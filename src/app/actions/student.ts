"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getDb } from "@/db";
import { createDiagnostic, createExam, createPractice, createReview, type SessionSize } from "@/server/attempts";
import { applyNewPlan, getActivePlan, markPlanTaskDone, revertPlan } from "@/server/plan";
import { changeTarget, deferDiagnostic, updateProfile } from "@/server/profile";
import { addNote, deleteNote, reportContent } from "@/server/catalog";
import { updateReviewItem } from "@/server/reviewLog";
import { deleteAccount } from "@/server/privacy";
import { attempt, clearSessionCookie, getActor } from "@/server/next";
import type { ErrorCause } from "@/lib/spaced";

export type ActionState = { message?: string; ok?: boolean } | undefined;

const size = (v: FormDataEntryValue | null): SessionSize => (v === "short" || v === "long" ? v : "normal");

export async function startPracticeAction(_: ActionState, form: FormData): Promise<ActionState> {
  const actor = await getActor();
  const r = await attempt(() =>
    createPractice(getDb(), actor, {
      subjectCode: (form.get("subject") as string) || undefined,
      skillId: (form.get("skill") as string) || undefined,
      size: size(form.get("size")),
      planTaskId: (form.get("task") as string) || undefined,
    }),
  );
  if (!r.ok) return { message: r.message };
  redirect(`/seance/${r.data.id}`);
}

export async function startReviewAction(_: ActionState, form: FormData): Promise<ActionState> {
  const r = await attempt(async () => createReview(getDb(), await getActor(), { planTaskId: (form.get("task") as string) || undefined }));
  if (!r.ok) return { message: r.message };
  redirect(`/seance/${r.data.id}`);
}

export async function startDiagnosticAction(_: ActionState, form: FormData): Promise<ActionState> {
  const r = await attempt(async () => createDiagnostic(getDb(), await getActor(), { subjectCode: (form.get("subject") as string) || undefined, advanced: form.get("advanced") === "on" }));
  if (!r.ok) return { message: r.message };
  redirect(`/seance/${r.data.id}`);
}

export async function deferDiagnosticAction() {
  await deferDiagnostic(getDb(), await getActor());
  redirect("/aujourdhui");
}

export async function startExamAction(_: ActionState, form: FormData): Promise<ActionState> {
  const r = await attempt(async () =>
    createExam(getDb(), await getActor(), {
      subject: String(form.get("subject") ?? ""),
      mode: form.get("mode") === "pedagogic" ? "pedagogic" : "strict",
      planTaskId: (form.get("task") as string) || undefined,
    }),
  );
  if (!r.ok) return { message: r.message };
  redirect(`/seance/${r.data.id}`);
}

/** Lance la tâche du plan en une interaction depuis Aujourd'hui (UX-01). */
export async function startTaskAction(_: ActionState, form: FormData): Promise<ActionState> {
  const actor = await getActor();
  if (!actor) redirect("/connexion");
  const db = getDb();
  const taskId = String(form.get("task") ?? "");
  const plan = await getActivePlan(db, actor.id);
  const task = plan?.tasks.find((t) => t.id === taskId);
  if (!task) return { message: "Cette activité n'est plus dans ton plan. Recharge la page." };
  if (task.kind === "lesson") redirect(`/apprendre/cours/L-${task.skillId}?tache=${task.id}`);
  if (task.kind === "exam") redirect(`/concours?epreuve=${task.subjectCode?.startsWith("LV-") ? "LV" : task.subjectCode}&tache=${task.id}`);
  if (task.kind === "diagnostic") redirect("/diagnostic");
  const r = await attempt(() =>
    task.kind === "review" ? createReview(db, actor, { planTaskId: task.id }) : createPractice(db, actor, { skillId: task.skillId ?? undefined, size: size(form.get("size")), planTaskId: task.id }),
  );
  if (!r.ok) {
    // Contenu indisponible : on bascule sur une série libre de la matière plutôt que d'afficher un écran vide.
    if (task.kind === "practice" && task.subjectCode) {
      const fallback = await attempt(() => createPractice(db, actor, { subjectCode: task.subjectCode!, size: size(form.get("size")), planTaskId: task.id }));
      if (fallback.ok) redirect(`/seance/${fallback.data.id}`);
    }
    return { message: r.message };
  }
  redirect(`/seance/${r.data.id}`);
}

export async function markTaskDoneAction(taskId: string) {
  const actor = await getActor();
  if (!actor) return;
  await markPlanTaskDone(getDb(), actor.id, taskId);
  revalidatePath("/aujourdhui");
}

export async function saveProfileAction(_: ActionState, form: FormData): Promise<ActionState> {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
  const blocked: { from: string; to: string; label: string }[] = [];
  const from = form.getAll("blockedFrom").map(String);
  const to = form.getAll("blockedTo").map(String);
  const label = form.getAll("blockedLabel").map(String);
  from.forEach((f, i) => f && to[i] && blocked.push({ from: f, to: to[i], label: label[i] || "Indisponible" }));
  const input = {
    schoolYear: (form.get("schoolYear") as string) || null,
    availability: Object.fromEntries(days.map((d) => [d, Number(form.get(`av_${d}`) ?? 0)])),
    rhythm: form.get("rhythm") === "intensive" ? "intensive" : "regular",
    dailyReviewCap: Number(form.get("dailyReviewCap") ?? 10),
    difficulties: (form.get("difficulties") as string) || null,
    targetPrograms: String(form.get("targetPrograms") ?? "").split(",").map((s) => s.trim()).filter(Boolean),
    timeExtensionFactor: Number(form.get("timeExtensionFactor") ?? 1),
    notificationsEnabled: form.get("notificationsEnabled") === "on",
    quietHoursStart: Number(form.get("quietHoursStart") ?? 21),
    quietHoursEnd: Number(form.get("quietHoursEnd") ?? 8),
    blockedPeriods: blocked,
  };
  const r = await attempt(async () => updateProfile(getDb(), await getActor(), input));
  if (!r.ok) return { message: r.message };
  if (form.get("then") === "diagnostic") redirect("/diagnostic");
  if (form.get("then") === "today") redirect("/aujourdhui");
  revalidatePath("/profil");
  return { ok: true, message: "Profil enregistré. Pense à recalculer ton plan depuis le calendrier pour en tenir compte." };
}

export async function changeTargetAction(_: ActionState, form: FormData): Promise<ActionState> {
  const r = await attempt(async () => changeTarget(getDb(), await getActor(), { secondLanguage: (form.get("secondLanguage") as string) || undefined, examSessionCode: (form.get("examSessionCode") as string) || undefined }));
  if (!r.ok) return { message: r.message };
  revalidatePath("/profil");
  return { ok: true, message: "Changement enregistré. Tes anciens résultats sont conservés séparément ; recalcule ton plan depuis le calendrier." };
}

export async function addNoteAction(_: ActionState, form: FormData): Promise<ActionState> {
  const lessonId = String(form.get("lessonId"));
  const r = await attempt(async () => addNote(getDb(), await getActor(), lessonId, String(form.get("body") ?? "")));
  if (!r.ok) return { message: r.message };
  revalidatePath(`/apprendre/cours/${lessonId}`);
  return { ok: true };
}

export async function deleteNoteAction(form: FormData) {
  await deleteNote(getDb(), await getActor(), String(form.get("noteId")));
  revalidatePath(`/apprendre/cours/${String(form.get("lessonId"))}`);
}

export async function reportAction(contentType: "question" | "lesson", contentVersionId: string, message: string): Promise<ActionState> {
  const r = await attempt(async () => reportContent(getDb(), await getActor(), contentType, contentVersionId, message));
  return r.ok ? { ok: true, message: "Merci : ton signalement a été transmis à un responsable pédagogique." } : { message: r.message };
}

export async function updateReviewItemAction(form: FormData) {
  await updateReviewItem(getDb(), await getActor(), String(form.get("id")), {
    cause: (form.get("cause") as ErrorCause) || undefined,
    personalNote: form.has("personalNote") ? String(form.get("personalNote")) : undefined,
  });
  revalidatePath("/entrainement/carnet");
}

export async function applyPlanAction() {
  await applyNewPlan(getDb(), await getActor());
  revalidatePath("/calendrier");
  redirect("/calendrier?applique=1");
}

export async function revertPlanAction() {
  await revertPlan(getDb(), await getActor());
  redirect("/calendrier?annule=1");
}

export async function deleteAccountAction(_: ActionState, form: FormData): Promise<ActionState> {
  if (form.get("confirm") !== "SUPPRIMER") return { message: "Tape SUPPRIMER en majuscules pour confirmer." };
  const r = await attempt(async () => deleteAccount(getDb(), await getActor(), String(form.get("password") ?? "")));
  if (!r.ok) return { message: r.message };
  await clearSessionCookie();
  redirect(`/compte-supprime?ref=${r.data}`);
}
