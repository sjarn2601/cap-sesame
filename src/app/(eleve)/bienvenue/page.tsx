import { getDb } from "@/db";
import { getProfile } from "@/server/profile";
import { requireStudent } from "@/server/next";
import { ActionForm, Submit } from "@/components/ActionForm";
import { AvailabilityFields, HiddenPreferences, ProfileBasics } from "@/components/ProfileFields";
import { saveProfileAction } from "@/app/actions/student";

export const metadata = { title: "Bienvenue" };

export default async function Page() {
  const actor = await requireStudent();
  const profile = await getProfile(getDb(), actor);
  return (
    <div className="container stack">
      <h1>Bienvenue !</h1>
      <p className="muted">Ces informations sont facultatives mais rendent ton plan réaliste. Tu pourras les modifier à tout moment.</p>
      <ActionForm action={saveProfileAction} className="card stack">
        <ProfileBasics profile={profile} />
        <AvailabilityFields profile={profile} />
        <HiddenPreferences profile={profile} />
        <div className="row">
          <Submit name="then" value="diagnostic">Enregistrer et faire le diagnostic (15 à 25 min)</Submit>
          <Submit name="then" value="today" className="btn">Enregistrer et commencer directement</Submit>
        </div>
      </ActionForm>
    </div>
  );
}
