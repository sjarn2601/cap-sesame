import { LoginForm } from "./LoginForm";
import Link from "next/link";

export const metadata = { title: "Connexion" };

export default function Page() {
  return (
    <div className="container" style={{ maxWidth: 480 }}>
      <div className="card stack">
        <h1>Connexion</h1>
        <LoginForm />
        <p className="small muted">
          Pas encore de compte ? <Link href="/inscription">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
}
