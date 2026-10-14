import { asc } from "drizzle-orm";
import { getDb } from "@/db";
import { subjects } from "@/db/schema";
import { getProfile } from "@/server/profile";
import { listPublishedSessions } from "@/server/sessionConfig";
import { requireStudent } from "@/server/next";
import { ActionForm, Submit } from "@/components/ActionForm";
import { AvailabilityFields, ProfileBasics } from "@/components/ProfileFields";
import { saveProfileAction, changeTargetAction, deleteAccountAction } from "@/app/actions/student";

export const metadata = { title: "Profil" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStudent();
  const db = getDb();
  const profile = await getProfile(db, actor);
  const langs = (await db.select().from(subjects).orderBy(asc(subjects.position))).filter((s) => s.code.startsWith("LV-"));
  const sessions = await listPublishedSessions(db);
  const blocked = [...profile.blockedPeriods, { from: "", to: "", label: "" }];
  return (
    <div className="container stack" style={{ maxWidth: 820 }}>
      <h1>Profil</h1>
      <p className="muted">{actor.email}</p>

      <ActionForm action={saveProfileAction} className="card stack">
        <h2>Préparation</h2>
        <ProfileBasics profile={profile} />
        <AvailabilityFields profile={profile} />
        <fieldset>
          <legend>Périodes sans travail (examens scolaires, vacances…)</legend>
          {blocked.map((p, i) => (
            <div key={i} className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginBottom: 8 }}>
              <div><label htmlFor={`bf${i}`}>Du</label><input id={`bf${i}`} type="date" name="blockedFrom" defaultValue={p.from} /></div>
              <div><label htmlFor={`bt${i}`}>Au</label><input id={`bt${i}`} type="date" name="blockedTo" defaultValue={p.to} /></div>
              <div><label htmlFor={`bl${i}`}>Motif</label><input id={`bl${i}`} type="text" name="blockedLabel" defaultValue={p.label} placeholder="Bac blanc" /></div>
            </div>
          ))}
          <p className="hint">Laisse les dates vides pour supprimer une période.</p>
        </fieldset>
        <div className="field">
          <label htmlFor="dailyReviewCap">Révisions maximum par jour</label>
          <input id="dailyReviewCap" name="dailyReviewCap" type="number" min={0} max={50} defaultValue={profile.dailyReviewCap} />
          <p className="hint">Après une absence, le surplus est étalé sur les jours suivants.</p>
        </div>
        <div className="field">
          <label htmlFor="timeExtensionFactor">Aménagement de durée simulé</label>
          <select id="timeExtensionFactor" name="timeExtensionFactor" defaultValue={String(profile.timeExtensionFactor)}>
            <option value="1">Aucun</option>
            <option value="1.33">Tiers-temps simulé (×1,33)</option>
            <option value="1.5">×1,5</option>
          </select>
          <p className="hint">Pour t&apos;entraîner dans tes conditions. Seul le cadre officiel du concours accorde un aménagement.</p>
        </div>
        <fieldset>
          <legend>Rappels</legend>
          <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
            <input type="checkbox" name="notificationsEnabled" defaultChecked={profile.notificationsEnabled} /> Recevoir des rappels (facultatif, limités)
          </label>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginTop: 8 }}>
            <div><label htmlFor="qs">Silence à partir de</label><select id="qs" name="quietHoursStart" defaultValue={profile.quietHoursStart}>{Array.from({ length: 24 }, (_, h) => <option key={h} value={h}>{h} h</option>)}</select></div>
            <div><label htmlFor="qe">jusqu&apos;à</label><select id="qe" name="quietHoursEnd" defaultValue={profile.quietHoursEnd}>{Array.from({ length: 24 }, (_, h) => <option key={h} value={h}>{h} h</option>)}</select></div>
          </div>
          <p className="hint">Couper les rappels n&apos;empêche aucune activité. Les périodes sans travail suspendent aussi les rappels.</p>
        </fieldset>
        <div><Submit>Enregistrer</Submit></div>
      </ActionForm>

      <ActionForm action={changeTargetAction} className="card stack">
        <h2 id="session">Session et seconde langue</h2>
        <div className="field">
          <label htmlFor="examSessionCode">Session</label>
          <select id="examSessionCode" name="examSessionCode" defaultValue={profile.examSessionCode}>
            {sessions.map((s) => <option key={s.id} value={s.code}>Concours SESAME {s.code}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="secondLanguage">Seconde langue</label>
          <select id="secondLanguage" name="secondLanguage" defaultValue={profile.secondLanguage}>
            {langs.map((l) => <option key={l.code} value={l.code.slice(3)} disabled={!l.open}>{l.name}{l.open ? "" : " (pas encore ouverte)"}</option>)}
          </select>
          <p className="hint">Changer de langue modifie ton plan. Tes anciens résultats sont conservés, mesurés séparément par langue.</p>
        </div>
        <div><Submit className="btn">Changer</Submit></div>
      </ActionForm>

      <section className="card stack">
        <h2>Mes données</h2>
        <div className="row">
          <a className="btn" href="/api/export">Tout exporter (JSON)</a>
          <a className="btn" href="/api/export?format=csv">Résultats (CSV)</a>
        </div>
      </section>

      <ActionForm action={deleteAccountAction} className="card stack">
        <h2>Supprimer mon compte</h2>
        <p>Toutes tes données (profil, réponses, résultats, carnet, notes) sont supprimées. Cette action est définitive.</p>
        <div className="field"><label htmlFor="del-pw">Mot de passe</label><input id="del-pw" type="password" name="password" autoComplete="current-password" required /></div>
        <div className="field"><label htmlFor="del-confirm">Tape SUPPRIMER pour confirmer</label><input id="del-confirm" type="text" name="confirm" required /></div>
        <div><Submit className="btn danger" pendingText="Suppression…">Supprimer définitivement</Submit></div>
      </ActionForm>
    </div>
  );
}
