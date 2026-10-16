// Stockage local hors connexion (navigateur uniquement). Volume limité, effacé à la déconnexion.
import type { OfflineAnswer, OfflinePack, SyncReport } from "@/server/offline";
import { clearLibrary } from "./offlineLibraryStore";

export const MAX_OFFLINE_LESSONS = 10;
const PACKS = "sesame.offline.packs";
const LESSONS = "sesame.offline.lessons";

export type StoredPack = {
  pack: OfflinePack;
  answers: OfflineAnswer[];
  localScores: Record<string, boolean>;
  /** Identifiants locaux déjà confirmés par le serveur. */
  syncedIds: string[];
  finished?: boolean;
  sync?: SyncReport & { at: string };
};
export type StoredLesson = { url: string; title: string; savedAt: string };

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* stockage plein ou bloqué : la série reste faisable en ligne */
  }
}

export const getPacks = () => read<Record<string, StoredPack>>(PACKS, {});
export const savePack = (p: StoredPack) => write(PACKS, { ...getPacks(), [p.pack.attemptId]: p });
export function removePack(id: string) {
  const all = getPacks();
  delete all[id];
  write(PACKS, all);
}

export const getLessons = () => read<StoredLesson[]>(LESSONS, []);
export const setLessons = (l: StoredLesson[]) => write(LESSONS, l);

/** Envoie une commande au service worker et attend sa réponse. */
export async function swCommand(msg: Record<string, unknown>, timeoutMs = 30_000): Promise<{ ok: boolean; error?: string }> {
  if (!("serviceWorker" in navigator)) return { ok: false, error: "unsupported" };
  const reg = await Promise.race([navigator.serviceWorker.ready, new Promise<null>((r) => setTimeout(() => r(null), 5000))]);
  const target = reg?.active;
  if (!target) return { ok: false, error: "no_worker" };
  return new Promise((resolve) => {
    const ch = new MessageChannel();
    const timer = setTimeout(() => resolve({ ok: false, error: "timeout" }), timeoutMs);
    ch.port1.onmessage = (e) => {
      clearTimeout(timer);
      resolve(e.data);
    };
    target.postMessage(msg, [ch.port2]);
  });
}

/** Appareil partagé : à la déconnexion, plus aucune donnée de l'élève ne reste sur l'appareil. */
export async function clearOfflineData() {
  try {
    localStorage.removeItem(PACKS);
    localStorage.removeItem(LESSONS);
  } catch {}
  try {
    await caches.delete("sesame-offline");
  } catch {}
  await clearLibrary();
}

export const newClientId = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
