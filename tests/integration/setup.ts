import { execSync } from "node:child_process";
import { Client } from "pg";
import "../../scripts/env";

export async function prepareTestDb() {
  const url = process.env.TEST_DATABASE_URL ?? "postgres://postgres@localhost:5432/sesame_test";
  process.env.DATABASE_URL = url;
  const c = new Client({ connectionString: url });
  await c.connect();
  await c.query("drop schema public cascade; create schema public;");
  await c.end();
  execSync("npx drizzle-kit push --force", { env: { ...process.env, DATABASE_URL: url }, stdio: "ignore" });
  const { seed } = await import("../../scripts/seed");
  const { getDb } = await import("@/db");
  await seed(getDb());
  return getDb();
}
