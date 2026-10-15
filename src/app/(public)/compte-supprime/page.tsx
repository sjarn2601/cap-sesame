export const metadata = { title: "Compte supprimé" };

export default async function Page({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <div className="container">
      <div className="card stack">
        <h1>Ton compte a été supprimé</h1>
        <p>Tes données applicatives ont été effacées. Les sauvegardes expirent selon la durée documentée.</p>
        {ref && <p className="small muted">Référence de la demande : {ref}</p>}
      </div>
    </div>
  );
}
