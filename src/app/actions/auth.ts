"use server";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { login, logout, register, verifyMfa, isStaff } from "@/server/auth";
import { attempt, clearSessionCookie, clientIp, sessionToken, setSessionCookie } from "@/server/next";

export type FormState = { message?: string; values?: Record<string, string> } | undefined;

export async function loginAction(_: FormState, form: FormData): Promise<FormState> {
  const email = String(form.get("email") ?? "");
  const r = await attempt(() => login(getDb(), email, String(form.get("password") ?? ""), "web"));
  if (!r.ok) return { message: r.message, values: { email } };
  await setSessionCookie(r.data.token, isStaff(r.data.user.role));
  redirect(r.data.needsMfa ? "/connexion/verification" : "/aujourdhui");
}

export async function mfaAction(_: FormState, form: FormData): Promise<FormState> {
  const token = await sessionToken();
  if (!token) redirect("/connexion");
  const r = await attempt(() => verifyMfa(getDb(), token, String(form.get("code") ?? "")));
  if (!r.ok) return { message: r.message };
  redirect("/admin");
}

export async function registerAction(_: FormState, form: FormData): Promise<FormState> {
  const values = { email: String(form.get("email") ?? ""), secondLanguage: String(form.get("secondLanguage") ?? ""), consentAge: String(form.get("consentAge") ?? "") };
  if (form.get("password") !== form.get("password2")) return { message: "Les deux mots de passe ne correspondent pas.", values };
  if (values.consentAge !== "15_plus" && values.consentAge !== "under_15_with_parent") return { message: "Indique ta tranche d'âge.", values };
  if (values.consentAge === "under_15_with_parent" && form.get("parentConsent") !== "on") {
    return { message: "Avant 15 ans, l'accord d'un titulaire de l'autorité parentale est requis en plus du tien.", values };
  }
  if (form.get("terms") !== "on") return { message: "Merci de lire et d'accepter les conditions d'utilisation.", values };
  const db = getDb();
  const r = await attempt(async () => {
    await register(db, { email: values.email, password: String(form.get("password") ?? ""), examSessionCode: "2027", secondLanguage: values.secondLanguage, consentAge: values.consentAge as "15_plus" });
    return login(db, values.email, String(form.get("password") ?? ""), await clientIp());
  });
  if (!r.ok) return { message: r.message, values };
  await setSessionCookie(r.data.token, false);
  redirect("/bienvenue");
}

export async function logoutAction() {
  const token = await sessionToken();
  if (token) await logout(getDb(), token);
  await clearSessionCookie();
  redirect("/");
}
