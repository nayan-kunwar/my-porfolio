export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  tech?: string[];
  current?: boolean;
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Backend Developer",
    company: "Nexzem Technologies",
    location: "Dehradun, India",
    startDate: "Dec 2025",
    endDate: "Present",
    current: true,
    highlights: [
      "Building scalable backend services using Node.js, TypeScript, PostgreSQL, and Prisma",
      "Implemented event-driven workflows with Apache Kafka and background workers",
      "Used Redis caching and BullMQ for asynchronous job processing",
      "Integrated Stripe Connect for onboarding, transfers, and payouts",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Apache Kafka",
      "Redis",
      "BullMQ",
      "Stripe Connect",
    ],
  },
  {
    role: "Technology Executive - Backend Developer",
    company: "Pearl Organisation",
    location: "Dehradun, India",
    startDate: "Jul 2024",
    endDate: "Aug 2025",
    highlights: [
      "Built REST APIs using Node.js, Express.js, MongoDB, and PostgreSQL",
      "Developed modules for authentication, messaging, and analytics",
      "Optimized performance via indexing and caching",
      "Integrated Razorpay, Cloudinary, and Nodemailer",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Razorpay",
      "Cloudinary",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "CodeJi Info Tech PVT LTD",
    location: "Dehradun, India",
    startDate: "Jun 2023",
    endDate: "Nov 2023",
    highlights: [
      "Developed a real-time chat app with Socket.io, Node.js, and MongoDB",
      "Implemented JWT-based authentication",
      "Built APIs and middleware for messaging and user management."
    ],
    tech: ["Node.js", "Socket.io", "MongoDB", "JWT"],
  },
];
