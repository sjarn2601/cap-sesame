// Vide la base locale (développement uniquement).
import "./env";
import { Client } from "pg";

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("Refusé en production.");
  const c = new Client({ connectionString: process.env.DATABASE_URL });
  await c.connect();
  await c.query("drop schema public cascade; create schema public;");
  await c.end();
  console.log("Base vidée.");
}
main();
