import project01 from '../assets/images/project-1-1.png';
import project001 from '../assets/images/project-1-2.png';
import project0001 from '../assets/images/project-1-3.png';

import project02 from '../assets/images/project-2-1.png';
import project002 from '../assets/images/project-2-2.png';
import project0002 from '../assets/images/project-2-3.png';




// import project3 from '../assets/images/project-03.png'; // Add when available

const projectsData = {
  "nexora-ai": {
    id: 2,
    slug: "nexora-ai",
    title: "Nexora AI – AI-Powered Learning Assistant",
    category: "AI Projects",
    overview: "An AI-powered learning platform that transforms study materials into interactive experiences with automated summaries, quizzes, and document processing.",
    description: [
      "Nexora AI revolutionizes how students interact with study materials by leveraging artificial intelligence to generate automated summaries, study notes, and intelligent quizzes from uploaded documents.",
      "The platform features a robust PDF processing pipeline that extracts content, analyzes it using AI APIs, and presents it in an intuitive learning dashboard. Users can track their performance through an intelligent quiz generation system with instant evaluation.",
      "Built with a modular architecture, the application ensures scalability and maintainability while delivering a responsive user experience across all devices."
    ],
    features: [
      "AI-powered document processing and content extraction",
      "Automated summary and study note generation via AI APIs",
      "Intelligent quiz generation with instant evaluation",
      "Performance tracking and learning analytics dashboard",
      "Secure JWT authentication with protected routes",
      "PDF upload and management system",
      "Responsive React.js components for intuitive UX",
      "Optimized MongoDB queries for fast data retrieval"
    ],
    challenges: [
      { challenge: "Processing large PDF files without blocking the main thread.", solution: "Implemented asynchronous processing with progress indicators and chunked file uploads." },
      { challenge: "Integrating multiple AI APIs while managing rate limits and costs.", solution: "Built a caching layer and request queuing system to optimize API usage." }
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "AI APIs", "PDF Processing", "Bootstrap"],
    liveDemo: "https://nexora-ai-application.vercel.app",
    github: "https://github.com/haroonameer/nexora-ai",
    thumbnail: project01,
    images: [project01, project001, project0001], // Replace with actual screenshots when available
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  },
  "nexra": {
    id: 1,
    slug: "nexra",
    title: "Nexra – E-commerce Web Application",
    category: "Full Stack",
    overview: "A full-stack e-commerce platform built with the MERN stack, featuring secure JWT authentication, admin dashboard, and complete shopping cart functionality.",
    description: [
      "Nexra is a comprehensive e-commerce solution designed to provide a seamless shopping experience across all devices. The application handles everything from product browsing to order tracking.",
      "The project was architected with scalability in mind, utilizing MongoDB for flexible data storage and React Context API for efficient state management across the component tree.",
      "I implemented a role-based access control system where admins can manage inventory, users, and orders through a dedicated dashboard, while customers enjoy a streamlined shopping experience."
    ],
    features: [
      "Responsive React.js components optimized for all screen sizes",
      "Secure JWT-based authentication and authorization system",
      "React Context API for global state management (sessions, cart)",
      "RESTful APIs built with Node.js and Express.js",
      "Admin Dashboard for product, user, inventory, and order management",
      "Complete e-commerce flow: listings, cart, placement, tracking",
      "MongoDB database with optimized queries for performance"
    ],
    challenges: [
      { challenge: "Managing complex cart state across multiple components without prop drilling.", solution: "Implemented React Context API with useReducer for predictable state updates, ensuring cart persistence during user sessions." },
      { challenge: "Handling image uploads and product media efficiently.", solution: "Designed a cloud-integrated file handling system with optimized image delivery." }
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API", "Bootstrap"],
    liveDemo: "https://nexra-demo.vercel.app",
    github: "https://github.com/haroonameer/nexra",
    thumbnail: project02,
    images: [project02, project002, project0002], // Replace with actual screenshots when available
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  },

  "nextnote": {
    id: 3,
    slug: "nextnote",
    title: "NextNote – Notes Taking Web Application",
    category: "Full Stack",
    overview: "A full-stack note-taking application for efficient personal and academic note management with real-time sync capabilities.",
    description: [
      "NextNote provides a clean, distraction-free environment for capturing and organizing thoughts. Designed for both personal and academic use, it offers rich text editing, categorization, and search functionality.",
      "The application emphasizes simplicity and speed, allowing users to focus on content creation rather than navigation. With a responsive design, notes are accessible from any device."
    ],
    features: [
      "Rich text note editor with formatting options",
      "Note categorization and tagging system",
      "Full-text search across all notes",
      "Secure user authentication",
      "Responsive design for mobile and desktop",
      "Real-time auto-save functionality"
    ],
    challenges: [
      { challenge: "Ensuring data consistency during network interruptions.", solution: "Implemented optimistic UI updates with background sync queue." }
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Context API", "Bootstrap"],
    liveDemo: "https://nextnote-demo.vercel.app",
    github: "https://github.com/haroonameer/nextnote",
    thumbnail: project01, // Replace with actual thumbnail when available
    images: [project01, project001], // Replace with actual screenshots when available
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  },

  // ===== Dummy / Expanded Portfolio Projects =====
  "pulseboard": {
    id: 4,
    slug: "pulseboard",
    title: "PulseBoard – Analytics Dashboard",
    category: "Frontend",
    overview: "A modern analytics dashboard that visualizes product metrics with interactive charts, filters, and export-ready reports.",
    description: [
      "PulseBoard helps teams track KPIs in real time using interactive chart components, date-range filtering, and customizable widgets.",
      "The dashboard is built for speed: data is normalized on the client and chart rendering is optimized to avoid UI jank.",
      "Users can export filtered summaries as reports for stakeholders and presentations."
    ],
    features: [
      "Interactive charts with responsive layouts",
      "Date range and segment filters",
      "Widget-based dashboard customization",
      "Client-side caching for faster navigation",
      "CSV export for filtered datasets",
      "Accessible UI with keyboard-friendly controls"
    ],
    challenges: [
      { challenge: "Keeping chart rendering smooth with large datasets.", solution: "Implemented memoization, throttled filter updates, and virtualized long lists." },
      { challenge: "Designing responsive dashboards that remain readable on mobile.", solution: "Used adaptive layouts and simplified chart density at smaller breakpoints." }
    ],
    techStack: ["React.js", "Tailwind CSS", "TypeScript", "Chart.js", "REST APIs"],
    liveDemo: "https://pulseboard-demo.vercel.app",
    github: "https://github.com/haroonameer/pulseboard",
    thumbnail: project02,
    images: [project02, project001, project0002],
    duration: "1.5 months",
    role: "Frontend Developer",
    year: "2026"
  },

  "shopstack": {
    id: 5,
    slug: "shopstack",
    title: "ShopStack – E-commerce Admin & Storefront",
    category: "Full Stack",
    overview: "A MERN-based e-commerce platform with admin inventory controls, product management, and a streamlined checkout flow.",
    description: [
      "ShopStack provides a complete shopping experience: browsing, cart management, checkout, and order tracking.",
      "Admins can manage products, categories, stock levels, and promotions from a dedicated dashboard.",
      "The backend includes secure endpoints for authentication, role-based access, and order updates."
    ],
    features: [
      "JWT authentication with role-based authorization",
      "Admin dashboard for product and inventory management",
      "Shopping cart, checkout, and order tracking",
      "Image upload pipeline and media optimization",
      "RESTful API built with Node.js and Express.js"
    ],
    challenges: [
      { challenge: "Preventing inconsistent cart state across sessions.", solution: "Stored cart data server-side and synchronized updates on login." },
      { challenge: "Managing performance for category and search queries.", solution: "Added query optimizations and indexing strategy for MongoDB." }
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bootstrap"],
    liveDemo: "https://shopstack-demo.vercel.app",
    github: "https://github.com/haroonameer/shopstack",
    thumbnail: project01,
    images: [project01, project002, project0001],
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  },

  "apigateway-pro": {
    id: 6,
    slug: "apigateway-pro",
    title: "API Gateway Pro – Rate Limiting & Observability",
    category: "AI Projects",
    overview: "A backend-focused project that adds API gateway capabilities including rate limiting, request logging, and usage monitoring.",
    description: [
      "API Gateway Pro provides a centralized way to manage traffic with per-key rate limits and consistent response handling.",
      "It includes request tracing with unique IDs, structured logging, and dashboards to view usage patterns.",
      "The system is designed for scalability and integrates cleanly with existing Express services."
    ],
    features: [
      "Rate limiting by API key and IP",
      "Structured request logging with trace IDs",
      "Usage metrics and health endpoints",
      "Middleware-based enforcement",
      "Configurable policies for different routes"
    ],
    challenges: [
      { challenge: "Keeping overhead low while collecting logs and metrics.", solution: "Used lightweight middleware and buffered logging to reduce latency." },
      { challenge: "Avoiding race conditions in counters.", solution: "Used atomic increments and TTL-based buckets." }
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "Observability"],
    liveDemo: "https://apigateway-pro-demo.vercel.app",
    github: "https://github.com/haroonameer/apigateway-pro",
    thumbnail: project0002,
    images: [project0002, project002, project001],
    duration: "1 month",
    role: "Backend Developer",
    year: "2026"
  },

  "meetflow": {
    id: 7,
    slug: "meetflow",
    title: "MeetFlow – Scheduling & Team Booking",
    category: "Full Stack",
    overview: "A scheduling web app that enables teams to create availability slots, book meetings, and receive confirmations automatically.",
    description: [
      "MeetFlow simplifies coordination by providing availability management, booking rules, and conflict detection.",
      "Users can schedule one-on-one or group sessions with reminders and confirmation status.",
      "The backend stores bookings securely and exposes endpoints for calendar views."
    ],
    features: [
      "Availability slot creation and editing",
      "Booking with conflict validation",
      "Email notification workflow (placeholder integration)",
      "Calendar views with month/week layouts",
      "Secure authentication and protected routes"
    ],
    challenges: [
      { challenge: "Preventing overlapping bookings.", solution: "Implemented transactional conflict checks on slot reservation." }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    liveDemo: "https://meetflow-demo.vercel.app",
    github: "https://github.com/haroonameer/meetflow",
    thumbnail: project02,
    images: [project02, project0001, project002],
    duration: "1.5 months",
    role: "Full Stack Developer",
    year: "2026"
  },

  "voice-to-notes": {
    id: 8,
    slug: "voice-to-notes",
    title: "VoiceToNotes – Speech to Study Notes",
    category: "AI Projects",
    overview: "An AI-assisted note generator that converts spoken lectures into structured summaries and action items.",
    description: [
      "VoiceToNotes turns voice recordings into readable notes by generating summaries, bullet points, and key takeaways.",
      "It organizes outputs into sections to make reviewing faster and more effective for exams.",
      "The app is designed as a lightweight prototype where AI calls can be swapped for different providers."
    ],
    features: [
      "Speech-to-text (placeholder integration)",
      "Automated summary generation",
      "Key takeaways and action items extraction",
      "Export notes to PDF (placeholder integration)",
      "User accounts with secure storage"
    ],
    challenges: [
      { challenge: "Maintaining quality for different accents and recording conditions.", solution: "Added normalization and adjustable confidence thresholds." }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Python", "AI APIs", "MongoDB"],
    liveDemo: "https://voice-to-notes-demo.vercel.app",
    github: "https://github.com/haroonameer/voice-to-notes",
    thumbnail: project01,
    images: [project01, project001, project0001],
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  },

  "secure-patient-portal": {
    id: 9,
    slug: "secure-patient-portal",
    title: "SecurePatient Portal – Appointment & Records",
    category: "Full Stack",
    overview: "A secure patient portal with appointments, medical record upload, and role-based access for clinics.",
    description: [
      "SecurePatient Portal is built to streamline appointment booking and provide patients with easy access to records.",
      "Clinic staff can manage appointments, upload documents, and review patient history based on permissions.",
      "Designed with security-first practices and protected API endpoints."
    ],
    features: [
      "Role-based access for patients and clinic staff",
      "Appointment booking and status tracking",
      "Document upload and secure retrieval",
      "JWT authentication and protected routes",
      "Responsive UI for mobile and desktop"
    ],
    challenges: [
      { challenge: "Securing file access and preventing unauthorized downloads.", solution: "Implemented signed URLs / access checks on protected endpoints." }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
    liveDemo: "https://secure-patient-portal-demo.vercel.app",
    github: "https://github.com/haroonameer/secure-patient-portal",
    thumbnail: project0002,
    images: [project0002, project002, project0001],
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2026"
  }
};


// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData[slug] || null;
};

// Helper to get all projects as array (for portfolio listing)
export const getAllProjects = () => {
  return Object.values(projectsData);
};

// Helper to get related projects (same category, excluding current)
export const getRelatedProjects = (slug, limit = 2) => {
  const current = projectsData[slug];
  if (!current) return [];

  return Object.values(projectsData)
    .filter(p => p.category === current.category && p.slug !== slug)
    .slice(0, limit);
};

export default projectsData;