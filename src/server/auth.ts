// Identité et sessions (ACC-01, SEC-01). Fonctions indépendantes de Next pour être testables.
import { createHash, randomBytes } from "node:crypto";
import { and, eq, gt, lt, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { authSessions, examSessionConfigs, loginThrottle, profiles, subjects, users, consentRecords } from "@/db/schema";
import { hashPassword, verifyPassword, passwordProblems } from "@/lib/password";
import { verifyTotp } from "@/lib/totp";
import { AppError, badRequest } from "./errors";
import { audit } from "./audit";

export type Role = "student" | "author" | "reviewer" | "admin" | "support";
export type Actor = { id: string; role: Role; email: string; mfaVerified: boolean; sessionId: string };

export const SESSION_COOKIE = "sesame_session";
const SESSION_DAYS = 14;
const STAFF_SESSION_HOURS = 12;
const MAX_FAILURES = 5;
const WINDOW_MS = 15 * 60_000;

export const isStaff = (role: Role) => role !== "student";

const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");

export type RegisterInput = {
  email: string;
  password: string;
  examSessionCode: string;
  secondLanguage: string;
  consentAge: "15_plus" | "under_15_with_parent";
};

export async function register(db: DB, input: RegisterInput) {
  const email = input.email.trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw badRequest("Adresse électronique invalide.");
  const pb = passwordProblems(input.password);
  if (pb) throw badRequest(pb);
  const lang = await db.query.subjects.findFirst({ where: eq(subjects.code, `LV-${input.secondLanguage}`) });
  if (!lang?.open) throw badRequest("Cette seconde langue n'est pas encore ouverte.");
  const session = await db.query.examSessionConfigs.findFirst({ where: and(eq(examSessionConfigs.code, input.examSessionCode), eq(examSessionConfigs.status, "published")) });
  if (!session) throw badRequest("Session inconnue.");
  const existing = await db.query.users.findFirst({ where: eq(users.email, email) });
  // Message identique pour ne pas révéler l'existence d'un compte.
  if (existing) throw new AppError("email_taken", 409, "Impossible de créer ce compte avec cette adresse.");
  const passwordHash = await hashPassword(input.password);
  return db.transaction(async (tx) => {
    const [u] = await tx.insert(users).values({ email, passwordHash, role: "student" }).returning();
    await tx.insert(profiles).values({
      userId: u.id,
      examSessionCode: input.examSessionCode,
      secondLanguage: input.secondLanguage,
      availability: { mon: 30, tue: 30, wed: 45, thu: 30, fri: 30, sat: 60, sun: 0 },
    });
    await tx.insert(consentRecords).values({
      userId: u.id,
      purpose: input.consentAge === "15_plus" ? "service_account_15_plus" : "service_account_parental",
      granted: true,
      textVersion: "cgu-2026-10",
    });
    return u;
  });
}

async function throttleKey(db: DB, key: string) {
  const row = await db.query.loginThrottle.findFirst({ where: eq(loginThrottle.key, key) });
  if (!row) return 0;
  if (Date.now() - row.windowStart.getTime() > WINDOW_MS) return 0;
  return row.failures;
}

async function recordFailure(db: DB, key: string) {
  await db
    .insert(loginThrottle)
    .values({ key, failures: 1, windowStart: new Date() })
    .onConflictDoUpdate({
      target: loginThrottle.key,
      set: {
        failures: sql`case when now() - ${loginThrottle.windowStart} > interval '15 minutes' then 1 else ${loginThrottle.failures} + 1 end`,
        windowStart: sql`case when now() - ${loginThrottle.windowStart} > interval '15 minutes' then now() else ${loginThrottle.windowStart} end`,
      },
    });
}

export async function login(db: DB, emailRaw: string, password: string, ip = "unknown") {
  const email = emailRaw.trim().toLowerCase();
  const key = `${email}|${ip}`;
  if ((await throttleKey(db, key)) >= MAX_FAILURES) {
    throw new AppError("throttled", 429, "Trop de tentatives. Réessaie dans 15 minutes.");
  }
  const u = await db.query.users.findFirst({ where: eq(users.email, email) });
  const ok = u ? await verifyPassword(password, u.passwordHash) : false;
  if (!u || !ok) {
    await recordFailure(db, key);
    throw new AppError("bad_credentials", 401, "Adresse ou mot de passe incorrect.");
  }
  await db.delete(loginThrottle).where(eq(loginThrottle.key, key));
  const token = randomBytes(32).toString("base64url");
  const hours = isStaff(u.role) ? STAFF_SESSION_HOURS : SESSION_DAYS * 24;
  await db.insert(authSessions).values({ id: hashToken(token), userId: u.id, expiresAt: new Date(Date.now() + hours * 3_600_000), mfaVerified: false });
  await db.update(users).set({ lastSeenAt: new Date() }).where(eq(users.id, u.id));
  if (isStaff(u.role)) await audit(db, u.id, "staff.login", { type: "user", id: u.id });
  return { token, user: u, needsMfa: isStaff(u.role) };
}

export async function verifyMfa(db: DB, token: string, code: string) {
  const s = await db.query.authSessions.findFirst({ where: eq(authSessions.id, hashToken(token)) });
  if (!s) throw new AppError("unauthenticated", 401, "Session expirée.");
  const u = await db.query.users.findFirst({ where: eq(users.id, s.userId) });
  if (!u?.totpSecret) throw new AppError("mfa_not_enrolled", 400, "Authentification renforcée non configurée pour ce compte.");
  const key = `mfa|${u.id}`;
  if ((await throttleKey(db, key)) >= MAX_FAILURES) throw new AppError("throttled", 429, "Trop de codes erronés. Réessaie dans 15 minutes.");
  if (!verifyTotp(u.totpSecret, code)) {
    await recordFailure(db, key);
    throw new AppError("bad_code", 401, "Code incorrect.");
  }
  await db.update(authSessions).set({ mfaVerified: true }).where(eq(authSessions.id, s.id));
  await audit(db, u.id, "staff.mfa_verified", { type: "user", id: u.id });
}

export async function actorFromToken(db: DB, token: string | undefined | null): Promise<Actor | null> {
  if (!token) return null;
  const rows = await db
    .select({ s: authSessions, u: users })
    .from(authSessions)
    .innerJoin(users, eq(users.id, authSessions.userId))
    .where(and(eq(authSessions.id, hashToken(token)), gt(authSessions.expiresAt, new Date())))
    .limit(1);
  const row = rows[0];
  if (!row) return null;
  return { id: row.u.id, role: row.u.role, email: row.u.email, mfaVerified: row.s.mfaVerified, sessionId: row.s.id };
}

export async function logout(db: DB, token: string) {
  await db.delete(authSessions).where(eq(authSessions.id, hashToken(token)));
}

export async function purgeExpiredSessions(db: DB) {
  await db.delete(authSessions).where(lt(authSessions.expiresAt, new Date()));
}

/** Contrôle de rôle côté serveur. Les comptes de l'équipe doivent avoir validé le second facteur. */
export function assertRole(actor: Actor | null, roles: Role[]): Actor {
  if (!actor) throw new AppError("unauthenticated", 401, "Connexion requise.");
  if (!roles.includes(actor.role)) throw new AppError("forbidden", 403, "Accès refusé.");
  if (isStaff(actor.role) && !actor.mfaVerified) throw new AppError("mfa_required", 403, "Authentification renforcée requise.");
  return actor;
}
