// Service worker CAP SESAME (OFF-01).
// - Fichiers statiques de l'application : cache d'abord.
// - Pages : réseau d'abord. Aucune page personnelle n'est mise en cache automatiquement :
//   seuls les cours téléchargés explicitement par l'élève (cache « sesame-offline ») et la page /hors-ligne.
// - API : toujours le réseau (les réponses hors connexion passent par la file locale de /hors-ligne).
const VERSION = "v1";
const STATIC = `sesame-static-${VERSION}`;
const SHELL = `sesame-shell-${VERSION}`;
const OFFLINE = "sesame-offline";
const SHELL_URLS = ["/hors-ligne", "/manifest.webmanifest", "/icon-192.png", "/icon.svg"];

/** Récupère une page et range ses fichiers statiques, pour qu'elle s'affiche sans réseau. */
async function storePage(url, cacheName) {
  const res = await fetch(url, { credentials: "include", cache: "no-store" });
  if (!res.ok || res.redirected) throw new Error(`HTTP ${res.status}`);
  const html = await res.clone().text();
  await (await caches.open(cacheName)).put(new URL(url, self.location.origin).pathname, res);
  const assets = [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"]+)"/g)].map((m) => m[1]);
  const statics = await caches.open(STATIC);
  await Promise.all(
    [...new Set(assets)].map(async (a) => {
      if (await statics.match(a)) return;
      const r = await fetch(a).catch(() => null);
      if (r && r.ok) await statics.put(a, r);
    }),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const shell = await caches.open(SHELL);
      await Promise.all(SHELL_URLS.filter((u) => u !== "/hors-ligne").map((u) => shell.add(u).catch(() => {})));
      await storePage("/hors-ligne", SHELL).catch(() => {});
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([STATIC, SHELL, OFFLINE]);
      for (const k of await caches.keys()) if (!keep.has(k)) await caches.delete(k);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(STATIC).then(async (c) => {
        const hit = await c.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) c.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req);
          if (url.pathname === "/hors-ligne" && res.ok) (await caches.open(SHELL)).put("/hors-ligne", res.clone());
          return res;
        } catch {
          return (
            (await caches.match(url.pathname, { cacheName: OFFLINE })) ??
            (await caches.match(url.pathname, { cacheName: SHELL })) ??
            (await caches.match("/hors-ligne", { cacheName: SHELL })) ??
            new Response("Hors connexion", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } })
          );
        }
      })(),
    );
    return;
  }

  if (SHELL_URLS.includes(url.pathname)) {
    event.respondWith(fetch(req).catch(async () => (await caches.match(url.pathname, { cacheName: SHELL })) ?? Response.error()));
  }
});

self.addEventListener("message", (event) => {
  const port = event.ports[0];
  const reply = (data) => port && port.postMessage(data);
  const msg = event.data || {};
  event.waitUntil(
    (async () => {
      try {
        if (msg.type === "download") {
          for (const u of msg.urls) await storePage(u, OFFLINE);
          reply({ ok: true });
        } else if (msg.type === "remove") {
          await (await caches.open(OFFLINE)).delete(new URL(msg.url, self.location.origin).pathname);
          reply({ ok: true });
        } else if (msg.type === "clear") {
          await caches.delete(OFFLINE);
          reply({ ok: true });
        } else {
          reply({ ok: false, error: "unknown" });
        }
      } catch (e) {
        reply({ ok: false, error: String(e && e.message ? e.message : e) });
      }
    })(),
  );
});
