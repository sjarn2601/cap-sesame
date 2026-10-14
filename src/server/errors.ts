import { z } from "zod";

// Messages de validation en français pour toute l'application.
z.config(z.locales.fr());

export class AppError extends Error {
  constructor(
    public code: string,
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export const notFound = (what = "Ressource") => new AppError("not_found", 404, `${what} introuvable.`);
export const forbidden = () => new AppError("forbidden", 403, "Accès refusé.");
export const badRequest = (msg: string) => new AppError("bad_request", 400, msg);
export const conflict = (code: string, msg: string) => new AppError(code, 409, msg);
