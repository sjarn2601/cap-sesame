import type { DB } from "@/db";
import { auditEvents } from "@/db/schema";

export async function audit(db: DB, actorId: string | null, action: string, target?: { type: string; id: string }, details: Record<string, unknown> = {}) {
  await db.insert(auditEvents).values({ actorId, action, targetType: target?.type, targetId: target?.id, details });
}
