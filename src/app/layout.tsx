import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PwaClient } from "@/components/PwaClient";

export const metadata: Metadata = {
  title: { default: "CAP SESAME", template: "%s · CAP SESAME" },
  description: "Préparation au concours SESAME : diagnostic, entraînement adaptatif, révisions espacées et concours blancs.",
  manifest: "/manifest.webmanifest",
  applicationName: "CAP SESAME",
  appleWebApp: { capable: true, title: "CAP SESAME", statusBarStyle: "default" },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/icon-192.png", sizes: "192x192" }], apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Plein écran sur téléphone : le contenu tient compte des encoches (safe-area).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2346c7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1320" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        {children}
        <PwaClient />
      </body>
    </html>
  );
}
