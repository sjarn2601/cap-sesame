// Pont entre Next.js et les services : session depuis le cookie, redirections, erreurs HTTP.
import "server-only";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { actorFromToken, isStaff, SESSION_COOKIE, type Actor } from "./auth";
import { AppError } from "./errors";

export async function getActor(): Promise<Actor | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return actorFromToken(getDb(), token);
}

export async function sessionToken() {
  return (await cookies()).get(SESSION_COOKIE)?.value ?? null;
}

export async function setSessionCookie(token: string, staff: boolean) {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: staff ? 12 * 3600 : 14 * 86400,
  });
}

export async function clearSessionCookie() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function clientIp() {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? h.get("x-real-ip") ?? "local";
}

/** Page élève : connexion obligatoire, l'équipe est renvoyée vers l'administration. */
export async function requireStudent(): Promise<Actor> {
  const actor = await getActor();
  if (!actor) redirect("/connexion");
  if (actor.role !== "student") redirect("/admin");
  return actor;
}

export async function requireStaff(): Promise<Actor> {
  const actor = await getActor();
  if (!actor) redirect("/connexion");
  if (!isStaff(actor.role)) redirect("/aujourdhui");
  if (!actor.mfaVerified) redirect("/connexion/verification");
  return actor;
}

export function errorResponse(e: unknown) {
  if (e instanceof AppError) return NextResponse.json({ error: e.code, message: e.message }, { status: e.status });
  console.error(e);
  return NextResponse.json({ error: "server_error", message: "Une erreur inattendue est survenue. Réessaie dans un instant." }, { status: 500 });
}

export async function api<T>(fn: (actor: Actor | null) => Promise<T>) {
  try {
    const actor = await getActor();
    return NextResponse.json(await fn(actor));
  } catch (e) {
    return errorResponse(e);
  }
}

/** Pour les actions de formulaire : renvoie un message lisible au lieu de lever. */
export async function attempt<T>(fn: () => Promise<T>): Promise<{ ok: true; data: T } | { ok: false; message: string }> {
  try {
    return { ok: true, data: await fn() };
  } catch (e) {
    if (e instanceof AppError) return { ok: false, message: e.message };
    if (e && typeof e === "object" && "digest" in e && String((e as { digest: unknown }).digest).startsWith("NEXT_REDIRECT")) throw e;
    console.error(e);
    return { ok: false, message: "Une erreur inattendue est survenue. Tes données saisies sont conservées : réessaie." };
  }
}
