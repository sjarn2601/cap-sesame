import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

export type DB = NodePgDatabase<typeof schema>;

const globalForDb = globalThis as unknown as { __sesamePool?: Pool; __sesameDb?: DB; __sesameSchema?: typeof schema };

function create(url: string) {
  const pool = new Pool({ connectionString: url, max: 10 });
  return { pool, db: drizzle(pool, { schema }) };
}

export function getDb(): DB {
  // En développement, un schéma rechargé à chaud doit reconstruire le client (le pool est conservé).
  if (globalForDb.__sesameDb && globalForDb.__sesamePool && globalForDb.__sesameSchema !== schema) {
    globalForDb.__sesameDb = drizzle(globalForDb.__sesamePool, { schema });
    globalForDb.__sesameSchema = schema;
  }
  if (!globalForDb.__sesameDb) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL manquant");
    const { pool, db } = create(url);
    globalForDb.__sesamePool = pool;
    globalForDb.__sesameDb = db;
    globalForDb.__sesameSchema = schema;
  }
  return globalForDb.__sesameDb;
}

export async function closeDb() {
  await globalForDb.__sesamePool?.end();
  globalForDb.__sesamePool = undefined;
  globalForDb.__sesameDb = undefined;
}

export { schema };
