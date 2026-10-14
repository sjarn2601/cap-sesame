// Graphique d'une série de même nature, avec équivalent textuel (A11Y-01).
export function SeriesChart({ points, label }: { points: { date: string; pct: number; title: string }[]; label: string }) {
  const W = 600;
  const H = 160;
  const pad = 28;
  if (points.length === 0) return null;
  const x = (i: number) => (points.length === 1 ? W / 2 : pad + (i * (W - 2 * pad)) / (points.length - 1));
  const y = (v: number) => H - pad - (v / 100) * (H - 2 * pad);
  const d = points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.pct).toFixed(1)}`).join(" ");
  return (
    <figure style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${label} : ${points.map((p) => `${p.pct} %`).join(", ")}`} style={{ width: "100%", height: "auto" }}>
        {[0, 50, 100].map((v) => (
          <g key={v}>
            <line x1={pad} x2={W - pad} y1={y(v)} y2={y(v)} stroke="var(--border)" strokeDasharray={v === 50 ? "4 4" : undefined} />
            <text x={4} y={y(v) + 4} fontSize="11" fill="var(--muted)">{v}</text>
          </g>
        ))}
        <path d={d} fill="none" stroke="var(--accent)" strokeWidth={2.5} />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={x(i)} cy={y(p.pct)} r={4.5} fill="var(--accent)" />
            <text x={x(i)} y={y(p.pct) - 9} fontSize="11" textAnchor="middle" fill="var(--text)">{p.pct}</text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
