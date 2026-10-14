// Affiche le code TOTP courant d'un secret (comptes de démonstration).
import { totp } from "@/lib/totp";
const secret = process.argv[2] ?? "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP";
console.log(totp(secret));
