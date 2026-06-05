import project02 from '../assets/images/project-02.png';
import project002 from '../assets/images/project-002.png';
import project0002 from '../assets/images/project-0002.png';



import project01 from '../assets/images/project-01.png';
import project001 from '../assets/images/project-001.png';
import project0001 from '../assets/images/project-0001.png';
// import project3 from '../assets/images/project-03.png'; // Add when available

const projectsData = {
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