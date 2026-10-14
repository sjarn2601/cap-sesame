import { DAY_LABELS } from "./labels";
import type { profiles } from "@/db/schema";

type Profile = typeof profiles.$inferSelect;

export function AvailabilityFields({ profile }: { profile: Profile }) {
  return (
    <fieldset>
      <legend>Temps disponible par jour (minutes)</legend>
      <p className="hint">Ton plan ne dépassera jamais ces durées. Mets 0 les jours sans travail.</p>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}>
        {(Object.keys(DAY_LABELS) as (keyof typeof DAY_LABELS)[]).map((d) => (
          <div key={d}>
            <label htmlFor={`av_${d}`}>{DAY_LABELS[d]}</label>
            <input id={`av_${d}`} name={`av_${d}`} type="number" min={0} max={600} step={5} defaultValue={profile.availability[d as keyof Profile["availability"]]} />
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export function ProfileBasics({ profile }: { profile: Profile }) {
  return (
    <>
      <div className="field">
        <label htmlFor="schoolYear">Classe <span className="hint">(facultatif)</span></label>
        <select id="schoolYear" name="schoolYear" defaultValue={profile.schoolYear ?? ""}>
          <option value="">Non précisé</option>
          <option>Terminale</option>
          <option>Première année post-bac</option>
          <option>Autre</option>
        </select>
      </div>
      <fieldset className="field">
        <legend>Rythme</legend>
        <div className="radio-row">
          <label className="radio-pill"><input type="radio" name="rhythm" value="regular" defaultChecked={profile.rhythm !== "intensive"} /><span>Régulier (marge de 10 %)</span></label>
          <label className="radio-pill"><input type="radio" name="rhythm" value="intensive" defaultChecked={profile.rhythm === "intensive"} /><span>Intensif (tout le temps saisi)</span></label>
        </div>
        <p className="hint">Le rythme change la quantité de travail proposée, jamais tes scores.</p>
      </fieldset>
      <div className="field">
        <label htmlFor="targetPrograms">Programmes visés <span className="hint">(facultatif, séparés par des virgules)</span></label>
        <input id="targetPrograms" name="targetPrograms" type="text" defaultValue={profile.targetPrograms.join(", ")} />
      </div>
      <div className="field">
        <label htmlFor="difficulties">Difficultés ressenties ou besoins pratiques <span className="hint">(facultatif, aucun diagnostic médical demandé)</span></label>
        <textarea id="difficulties" name="difficulties" defaultValue={profile.difficulties ?? ""} />
      </div>
    </>
  );
}

export function HiddenPreferences({ profile }: { profile: Profile }) {
  return (
    <>
      <input type="hidden" name="dailyReviewCap" value={profile.dailyReviewCap} />
      <input type="hidden" name="timeExtensionFactor" value={profile.timeExtensionFactor} />
      <input type="hidden" name="quietHoursStart" value={profile.quietHoursStart} />
      <input type="hidden" name="quietHoursEnd" value={profile.quietHoursEnd} />
      {profile.notificationsEnabled && <input type="hidden" name="notificationsEnabled" value="on" />}
      {profile.blockedPeriods.map((p, i) => (
        <span key={i}>
          <input type="hidden" name="blockedFrom" value={p.from} />
          <input type="hidden" name="blockedTo" value={p.to} />
          <input type="hidden" name="blockedLabel" value={p.label} />
        </span>
      ))}
    </>
  );
}
