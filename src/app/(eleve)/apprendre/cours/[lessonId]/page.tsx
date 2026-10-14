import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/db";
import { getLesson } from "@/server/catalog";
import { markPlanTaskDone } from "@/server/plan";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { ActionForm, Submit } from "@/components/ActionForm";
import { addNoteAction, deleteNoteAction, startPracticeAction } from "@/app/actions/student";
import { Flashcards } from "./Flashcards";
import { speechLang } from "@/lib/speech";
import { ReportButton } from "@/components/ReportButton";
import { frDate } from "@/components/labels";
import { DownloadLesson } from "@/components/OfflineButtons";
import { AssistantPanel } from "@/components/AssistantPanel";

export const dynamic = "force-dynamic";

export default async function Page({ params, searchParams }: { params: Promise<{ lessonId: string }>; searchParams: Promise<{ tache?: string }> }) {
  const { lessonId } = await params;
  const { tache } = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const data = await getLesson(db, actor, lessonId).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  if (tache) await markPlanTaskDone(db, actor.id, tache);
  const { lesson, skill, notes } = data;
  return (
    <div className="container stack" style={{ maxWidth: 820 }}>
      <nav className="small"><Link href="/apprendre">Apprendre</Link> › {skill?.domain}</nav>
      <h1>{lesson.title}</h1>
      <p className="small muted">
        Version {lesson.version} du {frDate(lesson.publishedAt ?? lesson.createdAt)} · rédigé par {data.authorName}
        {data.reviewerName ? `, relu par ${data.reviewerName}` : ""} · niveau {lesson.level}
        {lesson.isDemo ? " · contenu de démonstration original" : ""}
      </p>
      {data.updatedSinceView && (
        <p className="notice warn" role="status">Ce cours a été mis à jour depuis ta dernière lecture (version {data.updatedSinceView} → {lesson.version}).</p>
      )}
      <DownloadLesson url={`/apprendre/cours/${lessonId}`} title={lesson.title} />
      <section className="card flat">
        <h2>Objectifs</h2>
        <ul>{lesson.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
        {lesson.prerequisites.length > 0 && <p className="small muted">Prérequis : {lesson.prerequisites.map((p) => <Link key={p} href={`/apprendre/cours/L-${p}`}>{p}</Link>)}</p>}
      </section>
      {lesson.sections.map((s, i) => (
        <section key={s.anchor} id={s.anchor} className="card stack" style={{ scrollMarginTop: 80 }}>
          {i < 3 ? <h2>{s.title}</h2> : null}
          {i < 3 ? (
            <p className="lesson-body">{s.body}</p>
          ) : (
            <details>
              <summary>{s.title}</summary>
              <p className="lesson-body" style={{ marginTop: 8 }}>{s.body}</p>
            </details>
          )}
        </section>
      ))}
      <AssistantPanel kind="lesson" lessonId={lessonId} sections={lesson.sections.map((s) => ({ anchor: s.anchor, title: s.title }))} />
      {lesson.flashcards.length > 0 && (
        <section className="card flat stack">
          <h2>Cartes mémoire</h2>
          <Flashcards cards={lesson.flashcards} lang={speechLang(skill?.subjectCode)} />
        </section>
      )}
      <section className="card flat stack">
        <h2>Mettre en pratique</h2>
        <p>Une série courte sur cette notion, avec des questions jamais vues en priorité.</p>
        <ActionForm action={startPracticeAction}>
          <input type="hidden" name="skill" value={lesson.skillId} />
          <input type="hidden" name="size" value="short" />
          <Submit pendingText="Préparation…">Mini-test (5 questions)</Submit>
        </ActionForm>
      </section>
      <section className="card flat stack">
        <h2>Mes notes</h2>
        {notes.length > 0 && (
          <ul className="list-plain">
            {notes.map((n) => (
              <li key={n.id} className="row between">
                <span style={{ whiteSpace: "pre-wrap" }}>{n.body}</span>
                <form action={deleteNoteAction}>
                  <input type="hidden" name="noteId" value={n.id} />
                  <input type="hidden" name="lessonId" value={lessonId} />
                  <button className="btn ghost small" aria-label="Supprimer cette note">Supprimer</button>
                </form>
              </li>
            ))}
          </ul>
        )}
        <ActionForm action={addNoteAction} className="stack">
          <input type="hidden" name="lessonId" value={lessonId} />
          <label htmlFor="note-body">Ajouter une note personnelle</label>
          <textarea id="note-body" name="body" maxLength={2000} required />
          <Submit className="btn">Enregistrer la note</Submit>
        </ActionForm>
        <ReportButton contentType="lesson" contentVersionId={lesson.id} />
      </section>
    </div>
  );
}
