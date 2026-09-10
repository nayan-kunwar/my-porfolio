export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Swyft",
    description:
      "Automotive marketplace backend connecting customers, stores, and delivery partners with event-driven order processing and complex payment flows.",
    highlights: [
      "Multi-sided marketplace with real-time order tracking via Socket.io",
      "Event-driven architecture using Apache Kafka and background workers",
      "Stripe Connect integration for onboarding, transfers, and payouts",
      "Redis caching and BullMQ for asynchronous job processing",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Apache Kafka",
      "Stripe Connect",
      "Socket.io",
      "AWS",
    ],
    featured: true,
  },
  {
    title: "Smriti",
    description:
      "Durable, queryable long-term memory backend for AI agents — stores working, episodic, and semantic memories and serves low-latency RAG context.",
    highlights: [
      "Three memory tiers — working (Redis), episodic (Postgres), semantic (Postgres + pgvector)",
      "Synchronous RAG retrieval via POST /memories/context with cache → embed → vector search → rank pipeline",
      "Async enrichment via Kafka workers for embeddings, importance scoring, summarization, consolidation, and profiling",
      "Production-oriented Nx monorepo with Kysely, OpenTelemetry traces, and Prometheus + Grafana metrics",
    ],
    tech: [
      "TypeScript",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Apache Kafka",
      "Kysely",
      "OpenTelemetry",
      "Prometheus",
    ],
    featured: true,
  },
  {
    title: "Travel Monk",
    description:
      "Travel booking platform backend with RESTful APIs for user authentication, bookings, and payment processing.",
    highlights: [
      "JWT and Bcrypt-based authentication system",
      "MongoDB integration with Mongoose for data persistence",
      "Razorpay payment gateway integration",
      "Email notifications via Nodemailer",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Nodemailer",
      "Multer",
    ],
  },
  {
    title: "Ready2move",
    description:
      "Property listing and management system with role-based access control for landlords, agents, and tenants.",
    highlights: [
      "Role-based access control (RBAC) for multi-user property management",
      "REST APIs for property listings, search, and user management",
      "Image uploads and media handling via Cloudinary",
      "Redis caching for improved API performance",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RBAC",
      "JWT",
      "Cloudinary",
      "Redis",
    ],
  },
];
