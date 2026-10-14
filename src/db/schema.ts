// Modèle de données (TEC-01). Les tentatives référencent des versions exactes de contenus ;
// les scores et les configurations de session sont versionnés et jamais écrasés.
import {
  pgTable,
  pgEnum,
  uuid,
  bigint,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  real,
  primaryKey,
  uniqueIndex,
  index,
  date,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["student", "author", "reviewer", "admin", "support"]);
export const contentStatusEnum = pgEnum("content_status", [
  "draft",
  "in_review",
  "format_check",
  "validated",
  "published",
  "suspended",
  "retired",
]);
export const originEnum = pgEnum("content_origin", ["human", "ai", "official_authorized"]);
export const questionFormatEnum = pgEnum("question_format", ["single", "multiple", "numeric"]);
export const attemptKindEnum = pgEnum("attempt_kind", [
  "diagnostic",
  "practice",
  "review",
  "exam_strict",
  "exam_pedagogic",
]);
export const attemptStatusEnum = pgEnum("attempt_status", [
  "in_progress",
  "finalized",
  "expired",
  "invalidated",
]);
export const errorCauseEnum = pgEnum("error_cause", ["knowledge", "reading", "time", "unknown"]);
export const reviewStatusEnum = pgEnum("review_status", ["open", "closed"]);
export const configStatusEnum = pgEnum("config_status", ["draft", "pending_second_approval", "published", "archived"]);
export const reportStatusEnum = pgEnum("report_status", ["open", "accepted", "rejected"]);

// ---------- Identité ----------

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: roleEnum("role").notNull().default("student"),
  displayName: text("display_name"),
  // Secret TOTP (authentification renforcée obligatoire pour les comptes de l'équipe).
  totpSecret: text("totp_secret"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  lastSeenAt: timestamp("last_seen_at", { withTimezone: true }),
});

export const authSessions = pgTable("auth_sessions", {
  // Hachage SHA-256 du jeton : le jeton brut ne vit que dans le cookie.
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  mfaVerified: boolean("mfa_verified").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const loginThrottle = pgTable("login_throttle", {
  key: text("key").primaryKey(),
  failures: integer("failures").notNull().default(0),
  windowStart: timestamp("window_start", { withTimezone: true }).notNull().defaultNow(),
});

export type Availability = Record<"mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun", number>;

export const profiles = pgTable("profiles", {
  userId: uuid("user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  examSessionCode: text("exam_session_code").notNull(),
  secondLanguage: text("second_language").notNull(),
  schoolYear: text("school_year"),
  availability: jsonb("availability").$type<Availability>().notNull(),
  rhythm: text("rhythm").notNull().default("regular"),
  dailyReviewCap: integer("daily_review_cap").notNull().default(10),
  targetPrograms: jsonb("target_programs").$type<string[]>().notNull().default([]),
  difficulties: text("difficulties"),
  // Aménagement de durée simulé (A11Y) : facteur appliqué au chrono, jamais présenté comme officiel.
  timeExtensionFactor: real("time_extension_factor").notNull().default(1),
  notificationsEnabled: boolean("notifications_enabled").notNull().default(false),
  quietHoursStart: integer("quiet_hours_start").notNull().default(21),
  quietHoursEnd: integer("quiet_hours_end").notNull().default(8),
  blockedPeriods: jsonb("blocked_periods").$type<{ from: string; to: string; label: string }[]>().notNull().default([]),
  diagnosticState: jsonb("diagnostic_state").$type<{ attemptId?: string; completedAt?: string; deferred?: boolean }>().notNull().default({}),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const consentRecords = pgTable("consent_records", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  purpose: text("purpose").notNull(),
  granted: boolean("granted").notNull(),
  textVersion: text("text_version").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// Journal d'audit : volontairement sans clé étrangère pour survivre à la suppression d'un compte.
export const auditEvents = pgTable(
  "audit_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    actorId: uuid("actor_id"),
    action: text("action").notNull(),
    targetType: text("target_type"),
    targetId: text("target_id"),
    details: jsonb("details").$type<Record<string, unknown>>().notNull().default({}),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("audit_created_idx").on(t.createdAt)],
);

// ---------- Référentiel de session (REG-01) ----------

export type ExamPaper = {
  subject: string;
  label: string;
  questionCount: number;
  minutes: number;
  scoring: "standard" | "doc_partial";
  scoringNote: string;
  verified: boolean;
};

export type SessionConfigBody = {
  examDate: string;
  newsWindowMonths: number;
  oralPeriod: { from: string; to: string };
  papers: ExamPaper[];
  breaks: string;
  pauseMaxMinutes: number;
  navigation: "free" | "linear";
  languages: string[];
  coefficients: Record<string, Record<string, number> | null>;
  sources: { id: string; label: string; url: string }[];
};

export const examSessionConfigs = pgTable(
  "exam_session_configs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    code: text("code").notNull(),
    version: integer("version").notNull(),
    status: configStatusEnum("status").notNull().default("draft"),
    body: jsonb("body").$type<SessionConfigBody>().notNull(),
    verifiedAt: date("verified_at").notNull(),
    diffFromPrevious: jsonb("diff_from_previous").$type<{ path: string; before: unknown; after: unknown }[]>().notNull().default([]),
    createdBy: uuid("created_by").references(() => users.id, { onDelete: "set null" }),
    firstApprovedBy: uuid("first_approved_by").references(() => users.id, { onDelete: "set null" }),
    secondApprovedBy: uuid("second_approved_by").references(() => users.id, { onDelete: "set null" }),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("session_code_version_uq").on(t.code, t.version)],
);

// ---------- Catalogue ----------

export const subjects = pgTable("subjects", {
  code: text("code").primaryKey(),
  name: text("name").notNull(),
  position: integer("position").notNull(),
  isLanguage: boolean("is_language").notNull().default(false),
  open: boolean("open").notNull().default(true),
  textDirection: text("text_direction").notNull().default("ltr"),
});

export const skills = pgTable("skills", {
  id: text("id").primaryKey(),
  subjectCode: text("subject_code")
    .notNull()
    .references(() => subjects.code),
  domain: text("domain").notNull(),
  name: text("name").notNull(),
  synonyms: jsonb("synonyms").$type<string[]>().notNull().default([]),
  position: integer("position").notNull().default(0),
});

// Champs éditoriaux communs (COU-01, BAN-01).
const editorial = {
  version: integer("version").notNull(),
  status: contentStatusEnum("status").notNull().default("draft"),
  origin: originEnum("origin").notNull().default("human"),
  authorId: uuid("author_id").references(() => users.id, { onDelete: "set null" }),
  reviewerId: uuid("reviewer_id").references(() => users.id, { onDelete: "set null" }),
  rightsCleared: boolean("rights_cleared").notNull().default(false),
  isDemo: boolean("is_demo").notNull().default(false),
  importBatchId: text("import_batch_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
};

export type LessonSection = { anchor: string; title: string; body: string };

export const lessonVersions = pgTable(
  "lesson_versions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    lessonId: text("lesson_id").notNull(),
    skillId: text("skill_id")
      .notNull()
      .references(() => skills.id),
    title: text("title").notNull(),
    level: text("level").notNull().default("essentiel"),
    objectives: jsonb("objectives").$type<string[]>().notNull(),
    prerequisites: jsonb("prerequisites").$type<string[]>().notNull().default([]),
    sections: jsonb("sections").$type<LessonSection[]>().notNull(),
    flashcards: jsonb("flashcards").$type<{ front: string; back: string; reversible: boolean }[]>().notNull().default([]),
    ...editorial,
  },
  (t) => [uniqueIndex("lesson_version_uq").on(t.lessonId, t.version)],
);

export type QuestionOption = { id: string; text: string; correct: boolean; justification: string };

export const questionVersions = pgTable(
  "question_versions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    questionId: text("question_id").notNull(),
    subjectCode: text("subject_code")
      .notNull()
      .references(() => subjects.code),
    skillIds: jsonb("skill_ids").$type<string[]>().notNull(),
    familyId: text("family_id").notNull(),
    difficulty: integer("difficulty").notNull(),
    format: questionFormatEnum("format").notNull(),
    stem: text("stem").notNull(),
    options: jsonb("options").$type<QuestionOption[]>().notNull(),
    numericAnswer: real("numeric_answer"),
    numericTolerance: real("numeric_tolerance"),
    explanation: text("explanation").notNull(),
    rule: text("rule").notNull(),
    hints: jsonb("hints").$type<string[]>().notNull().default([]),
    timeSec: integer("time_sec").notNull(),
    references: jsonb("refs").$type<string[]>().notNull().default([]),
    lessonAnchor: text("lesson_anchor"),
    documentSetVersionId: uuid("document_set_version_id"),
    // Réservée aux diagnostics et concours blancs : jamais servie en entraînement libre.
    reserved: boolean("reserved").notNull().default(false),
    ...editorial,
  },
  (t) => [
    uniqueIndex("question_version_uq").on(t.questionId, t.version),
    index("question_subject_status_idx").on(t.subjectCode, t.status),
  ],
);

export type DocumentItem = {
  num: number;
  kind: "text" | "table" | "chart";
  title: string;
  caption?: string;
  reference: string;
  paragraphs?: string[];
  table?: { headers: string[]; rows: string[][] };
  chart?: { label: string; points: { x: string; y: number }[]; unit: string };
};

export const documentSetVersions = pgTable("document_set_versions", {
  id: uuid("id").primaryKey().defaultRandom(),
  documentSetId: text("document_set_id").notNull(),
  title: text("title").notNull(),
  documents: jsonb("documents").$type<DocumentItem[]>().notNull(),
  ...editorial,
});

export const editorialEvents = pgTable("editorial_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentType: text("content_type").notNull(),
  contentVersionId: uuid("content_version_id").notNull(),
  fromStatus: text("from_status").notNull(),
  toStatus: text("to_status").notNull(),
  actorId: uuid("actor_id"),
  reason: text("reason"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const rightsRegistry = pgTable("rights_registry", {
  id: uuid("id").primaryKey().defaultRandom(),
  contentType: text("content_type").notNull(),
  contentRef: text("content_ref").notNull(),
  holder: text("holder").notNull(),
  licence: text("licence").notNull(),
  evidence: text("evidence"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const newsItems = pgTable("news_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  eventDate: date("event_date").notNull(),
  summary: text("summary").notNull(),
  actors: jsonb("actors").$type<string[]>().notNull().default([]),
  context: text("context").notNull(),
  stakes: text("stakes").notNull(),
  whyItMatters: text("why_it_matters").notNull(),
  vocabulary: jsonb("vocabulary").$type<{ term: string; definition: string }[]>().notNull().default([]),
  claims: jsonb("claims").$type<{ kind: "fact" | "statement" | "interpretation" | "uncertain"; text: string }[]>().notNull().default([]),
  sources: jsonb("sources").$type<{ label: string; url: string }[]>().notNull(),
  lastVerifiedAt: date("last_verified_at").notNull(),
  ...editorial,
});

// ---------- Évaluations ----------

export const attempts = pgTable(
  "attempts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    kind: attemptKindEnum("kind").notNull(),
    subjectCode: text("subject_code"),
    sessionConfigId: uuid("session_config_id").references(() => examSessionConfigs.id),
    questionVersionIds: jsonb("question_version_ids").$type<string[]>().notNull(),
    scoringRule: text("scoring_rule").notNull().default("standard"),
    status: attemptStatusEnum("status").notNull().default("in_progress"),
    startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
    deadlineAt: timestamp("deadline_at", { withTimezone: true }),
    finalizedAt: timestamp("finalized_at", { withTimezone: true }),
    reason: text("reason"),
    meta: jsonb("meta").$type<Record<string, unknown>>().notNull().default({}),
  },
  (t) => [index("attempt_user_idx").on(t.userId, t.startedAt)],
);

export const responses = pgTable(
  "responses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    attemptId: uuid("attempt_id")
      .notNull()
      .references(() => attempts.id, { onDelete: "cascade" }),
    questionVersionId: uuid("question_version_id")
      .notNull()
      .references(() => questionVersions.id),
    idempotencyKey: text("idempotency_key").notNull(),
    selected: jsonb("selected").$type<string[]>().notNull(),
    numericValue: real("numeric_value"),
    receivedAt: timestamp("received_at", { withTimezone: true }).notNull().defaultNow(),
    durationMs: integer("duration_ms").notNull().default(0),
    confidence: integer("confidence"),
    hintsUsed: integer("hints_used").notNull().default(0),
    isCorrect: boolean("is_correct"),
    points: real("points"),
    maxPoints: real("max_points"),
    // Ordre côté client : une requête plus ancienne rejouée après une plus récente ne l'écrase pas.
    clientSeq: bigint("client_seq", { mode: "number" }).notNull().default(0),
    syncState: text("sync_state").notNull().default("confirmed"),
  },
  (t) => [
    uniqueIndex("response_attempt_question_uq").on(t.attemptId, t.questionVersionId),
    uniqueIndex("response_idempotency_uq").on(t.attemptId, t.idempotencyKey),
  ],
);

// Historique des scores : chaque recalcul ajoute une ligne (R07).
export const scoreVersions = pgTable(
  "score_versions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    attemptId: uuid("attempt_id")
      .notNull()
      .references(() => attempts.id, { onDelete: "cascade" }),
    version: integer("version").notNull(),
    points: real("points").notNull(),
    maxPoints: real("max_points").notNull(),
    answered: integer("answered").notNull(),
    total: integer("total").notNull(),
    details: jsonb("details").$type<Record<string, unknown>>().notNull().default({}),
    reason: text("reason").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("score_attempt_version_uq").on(t.attemptId, t.version)],
);

export const masterySnapshots = pgTable(
  "mastery_snapshots",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    skillId: text("skill_id")
      .notNull()
      .references(() => skills.id),
    score: real("score").notNull(),
    status: text("status").notNull(),
    autonomousAttempts: integer("autonomous_attempts").notNull(),
    families: integer("families").notNull(),
    distinctDays: integer("distinct_days").notNull(),
    weightsVersion: text("weights_version").notNull(),
    computedAt: timestamp("computed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.skillId] })],
);

export const reviewItems = pgTable(
  "review_items",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    skillId: text("skill_id")
      .notNull()
      .references(() => skills.id),
    familyId: text("family_id").notNull(),
    cause: errorCauseEnum("cause").notNull(),
    causeEditedByUser: boolean("cause_edited_by_user").notNull().default(false),
    rule: text("rule").notNull(),
    examples: jsonb("examples").$type<{ questionVersionId: string; questionId: string; attemptId: string; at: string }[]>().notNull(),
    stage: integer("stage").notNull().default(0),
    consecutiveFailures: integer("consecutive_failures").notNull().default(0),
    dueAt: timestamp("due_at", { withTimezone: true }).notNull(),
    lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }),
    status: reviewStatusEnum("status").notNull().default("open"),
    personalNote: text("personal_note"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("review_user_family_uq").on(t.userId, t.familyId)],
);

export type PlanTask = {
  id: string;
  date: string;
  kind: "lesson" | "practice" | "review" | "exam" | "diagnostic";
  subjectCode: string | null;
  skillId: string | null;
  minutes: number;
  minMinutes: number;
  reason: string;
  bucket: "priority" | "consolidation" | "simulation";
  done: boolean;
};

export const studyPlans = pgTable(
  "study_plans",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    version: integer("version").notNull(),
    tasks: jsonb("tasks").$type<PlanTask[]>().notNull(),
    rationale: jsonb("rationale").$type<string[]>().notNull(),
    active: boolean("active").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [uniqueIndex("plan_user_version_uq").on(t.userId, t.version)],
);

export const personalNotes = pgTable("personal_notes", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  lessonId: text("lesson_id").notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const lessonViews = pgTable(
  "lesson_views",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: text("lesson_id").notNull(),
    lessonVersionId: uuid("lesson_version_id").notNull(),
    version: integer("version").notNull(),
    viewedAt: timestamp("viewed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
);

export const contentReports = pgTable("content_reports", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  contentType: text("content_type").notNull(),
  contentVersionId: uuid("content_version_id").notNull(),
  message: text("message").notNull(),
  status: reportStatusEnum("status").notNull().default("open"),
  handledBy: uuid("handled_by").references(() => users.id, { onDelete: "set null" }),
  resolution: text("resolution"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const deletionRequests = pgTable("deletion_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  // Pas de clé étrangère : la demande doit rester traçable après suppression du compte.
  userId: uuid("user_id").notNull(),
  emailHash: text("email_hash").notNull(),
  status: text("status").notNull().default("received"),
  steps: jsonb("steps").$type<{ step: string; at: string }[]>().notNull().default([]),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  closedAt: timestamp("closed_at", { withTimezone: true }),
});
