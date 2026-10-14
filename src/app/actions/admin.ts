"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getDb } from "@/db";
import { applyBatch, cancelBatch, createQuestionDraft, dryRunBatch, neutralizeQuestion, resolveReport, supportLookup, transitionContent, type BatchReport } from "@/server/editorialAdmin";
import { approveConfig, createDraft } from "@/server/sessionConfig";
import { attempt, getActor } from "@/server/next";
import type { ContentStatus } from "@/lib/editorial";

export type AdminState = { message?: string; ok?: boolean; report?: BatchReport } | undefined;

export async function transitionAction(_: AdminState, form: FormData): Promise<AdminState> {
  const type = String(form.get("type")) as "question" | "lesson" | "news" | "document_set";
  const id = String(form.get("id"));
  const r = await attempt(async () => transitionContent(getDb(), await getActor(), type, id, String(form.get("to")) as ContentStatus, (form.get("reason") as string) || null));
  if (!r.ok) return { message: r.message };
  revalidatePath(`/admin/questions/${id}`);
  revalidatePath("/admin/contenus");
  return { ok: true, message: "Statut mis à jour." };
}

export async function neutralizeAction(_: AdminState, form: FormData): Promise<AdminState> {
  const r = await attempt(async () => neutralizeQuestion(getDb(), await getActor(), String(form.get("id")), String(form.get("reason") ?? "")));
  if (!r.ok) return { message: r.message };
  return { ok: true, message: `${r.data.length} tentative(s) recalculée(s) : ${r.data.map((c) => `${c.before.points}/${c.before.maxPoints} → ${c.after.points}/${c.after.maxPoints}`).join(" ; ") || "aucune à modifier"}.` };
}

export async function createQuestionAction(_: AdminState, form: FormData): Promise<AdminState> {
  let raw: unknown;
  try {
    raw = JSON.parse(String(form.get("json") ?? ""));
  } catch {
    return { message: "JSON invalide." };
  }
  const r = await attempt(async () => createQuestionDraft(getDb(), await getActor(), raw));
  if (!r.ok) return { message: r.message };
  redirect(`/admin/questions/${r.data.row.id}`);
}

function parseBatch(form: FormData) {
  const raw = JSON.parse(String(form.get("json") ?? "[]"));
  return Array.isArray(raw) ? raw : raw.questions;
}

export async function batchAction(_: AdminState, form: FormData): Promise<AdminState> {
  let items: unknown[];
  try {
    items = parseBatch(form);
  } catch {
    return { message: "JSON invalide : le lot doit être un tableau de questions ou un objet { questions: [...] }." };
  }
  const mode = String(form.get("mode"));
  const db = getDb();
  const actor = await getActor();
  if (mode === "dry") {
    const r = await attempt(() => dryRunBatch(db, actor, items));
    if (!r.ok) return { message: r.message };
    const bad = r.data.filter((x) => x.errors.length).length;
    return { ok: bad === 0, message: bad ? `${bad} question(s) invalide(s) sur ${r.data.length}. Rien n'a été écrit.` : `Lot valide : ${r.data.length} question(s). Rien n'a été écrit.`, report: r.data };
  }
  const r = await attempt(() => applyBatch(db, actor, items, { allowPartial: mode === "partial" }));
  if (!r.ok) return { message: r.message };
  return { ok: true, message: `Lot ${r.data.batchId} importé en brouillon : ${r.data.applied} question(s), ${r.data.rejected} rejetée(s).`, report: r.data.report };
}

export async function cancelBatchAction(_: AdminState, form: FormData): Promise<AdminState> {
  const r = await attempt(async () => cancelBatch(getDb(), await getActor(), String(form.get("batchId"))));
  if (!r.ok) return { message: r.message };
  return { ok: true, message: r.data.mode === "deleted" ? `Lot annulé : ${r.data.count} question(s) supprimée(s).` : `Lot déjà utilisé : ${r.data.count} question(s) retirée(s) proprement.` };
}

export async function resolveReportAction(_: AdminState, form: FormData): Promise<AdminState> {
  const r = await attempt(async () => resolveReport(getDb(), await getActor(), String(form.get("id")), form.get("decision") === "accepted" ? "accepted" : "rejected", String(form.get("resolution") ?? "")));
  if (!r.ok) return { message: r.message };
  revalidatePath("/admin/signalements");
  return { ok: true, message: "Signalement traité." };
}

export async function configDraftAction(_: AdminState, form: FormData): Promise<AdminState> {
  let body;
  try {
    body = JSON.parse(String(form.get("json")));
  } catch {
    return { message: "JSON invalide." };
  }
  const r = await attempt(async () => createDraft(getDb(), await getActor(), String(form.get("code")), body, String(form.get("verifiedAt"))));
  if (!r.ok) return { message: r.message };
  revalidatePath("/admin/sessions");
  return { ok: true, message: `Brouillon v${r.data.version} créé : ${r.data.diffFromPrevious.length} différence(s) avec la version précédente.` };
}

export async function approveConfigAction(_: AdminState, form: FormData): Promise<AdminState> {
  const r = await attempt(async () => approveConfig(getDb(), await getActor(), String(form.get("id"))));
  if (!r.ok) return { message: r.message };
  revalidatePath("/admin/sessions");
  return { ok: true, message: r.data === "published" ? "Configuration publiée. Les épreuves déjà commencées gardent leur version." : "Première validation enregistrée : une seconde personne doit valider." };
}

export type SupportState = { message?: string; result?: Awaited<ReturnType<typeof supportLookup>> } | undefined;

export async function supportLookupAction(_: SupportState, form: FormData): Promise<SupportState> {
  const r = await attempt(async () => supportLookup(getDb(), await getActor(), String(form.get("attemptId") ?? "").trim()));
  if (!r.ok) return { message: r.message };
  return { result: r.data };
}
