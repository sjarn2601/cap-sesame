// Bibliothèque complète pour le mode hors ligne : copiée sur l'appareil de l'élève connecté.
import { getDb } from "@/db";
import { api } from "@/server/next";
import { buildOfflineLibrary } from "@/server/offlineLibrary";

export async function GET() {
  return api(async (actor) => buildOfflineLibrary(getDb(), actor));
}
