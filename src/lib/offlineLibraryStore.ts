// Bibliothèque hors ligne sur l'appareil (IndexedDB) : contenus copiés et journal des réponses à synchroniser.
// Tout est effacé à la déconnexion (appareil partagé).
import type { OfflineLibrary } from "@/server/offlineLibrary";

const DB_NAME = "sesame-offline";
const STORE = "kv";
const CHECK_KEY = "sesame.offline.libraryCheckedAt";
/** Au plus une vérification de mise à jour toutes les 6 heures. */
const CHECK_EVERY_MS = 6 * 3600_000;

export type LocalAnswer = {
  clientId: string;
  questionVersionId: string;
  questionId: string;
  subjectCode: string;
  skillIds: string[];
  correct: boolean;
  selected: string[];
  numericValue: number | null;
  durationMs: number;
  answeredAt: string;
  /** Lot d'envoi attribué avant la première tentative : renvoyer le lot ne crée pas de doublon. */
  batchId?: string;
  synced?: boolean;
};

export type ExamResult = { id: string; subject: string; label: string; at: string; score20: number; correct: number; total: number; minutes: number };

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 2);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function get<T>(key: string): Promise<T | undefined> {
  const db = await open();
  return new Promise((resolve, reject) => {
    const r = db.transaction(STORE).objectStore(STORE).get(key);
    r.onsuccess = () => resolve(r.result as T | undefined);
    r.onerror = () => reject(r.error);
  });
}

async function put(key: string, value: unknown) {
  const db = await open();
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export const getLibrary = () => get<OfflineLibrary>("library").catch(() => undefined);
export const getAnswers = async () => (await get<LocalAnswer[]>("answers").catch(() => undefined)) ?? [];
export const getExams = async () => (await get<ExamResult[]>("exams").catch(() => undefined)) ?? [];

export async function addAnswers(list: LocalAnswer[]) {
  await put("answers", [...(await getAnswers()), ...list]);
}
export async function addExam(r: ExamResult) {
  await put("exams", [r, ...(await getExams())].slice(0, 50));
}

/** Télécharge la bibliothèque si elle manque ou si une nouvelle version est publiée. */
export async function refreshLibrary(force = false): Promise<{ ok: boolean; updated: boolean; error?: string }> {
  if (typeof navigator !== "undefined" && !navigator.onLine) return { ok: false, updated: false, error: "offline" };
  let last = 0;
  try {
    last = Number(localStorage.getItem(CHECK_KEY) ?? 0);
  } catch {}
  const current = await getLibrary();
  if (!force && current && Date.now() - last < CHECK_EVERY_MS) return { ok: true, updated: false };
  const res = await fetch("/api/offline/library", { cache: "no-store" }).catch(() => null);
  if (!res || !res.ok) return { ok: false, updated: false, error: res ? `HTTP ${res.status}` : "network" };
  const lib = (await res.json()) as OfflineLibrary;
  try {
    localStorage.setItem(CHECK_KEY, String(Date.now()));
  } catch {}
  if (current?.version === lib.version) return { ok: true, updated: false };
  await put("library", lib);
  return { ok: true, updated: true };
}

/** Envoie les réponses en attente par lots de 50. */
export async function syncAnswers(): Promise<{ sent: number; error?: string }> {
  if (!navigator.onLine) return { sent: 0, error: "offline" };
  let sent = 0;
  for (;;) {
    const all = await getAnswers();
    const pending = all.filter((a) => !a.synced);
    if (pending.length === 0) return { sent };
    let batchId = pending[0].batchId;
    const batch = batchId ? pending.filter((a) => a.batchId === batchId) : pending.slice(0, 50);
    if (!batchId) {
      batchId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const ids = new Set(batch.map((a) => a.clientId));
      await put("answers", all.map((a) => (ids.has(a.clientId) ? { ...a, batchId } : a)));
    }
    const res = await fetch("/api/offline/library-sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        batchId,
        answers: batch.map((a) => ({ questionVersionId: a.questionVersionId, clientId: a.clientId, selected: a.selected, numericValue: a.numericValue, durationMs: Math.min(a.durationMs, 14_400_000), answeredAt: a.answeredAt })),
      }),
    }).catch(() => null);
    if (!res || !res.ok) return { sent, error: res ? ((await res.json().catch(() => null))?.message ?? `HTTP ${res.status}`) : "network" };
    const done = new Set(batch.map((a) => a.clientId));
    await put("answers", (await getAnswers()).map((a) => (done.has(a.clientId) ? { ...a, synced: true } : a)));
    sent += batch.length;
  }
}

export async function clearLibrary() {
  try {
    localStorage.removeItem(CHECK_KEY);
  } catch {}
  await new Promise<void>((resolve) => {
    try {
      const r = indexedDB.deleteDatabase(DB_NAME);
      r.onsuccess = r.onerror = r.onblocked = () => resolve();
    } catch {
      resolve();
    }
  });
}
