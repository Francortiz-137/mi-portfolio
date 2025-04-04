export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Un portfolio personal moderno y responsive construido con React y TypeScript. Incluye animaciones suaves y un diseño adaptable a modo oscuro.",
    image: "/assets/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/tu-usuario/portfolio",
    liveUrl: "https://tu-portfolio.com",
    category: "frontend"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos y gestión de productos.",
    image: "/assets/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    githubUrl: "https://github.com/tu-usuario/ecommerce",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Task Manager API",
    description: "API RESTful para gestión de tareas con autenticación JWT y operaciones CRUD.",
    image: "/assets/projects/task-manager.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/tu-usuario/task-manager-api",
    category: "backend"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard del clima que muestra pronósticos en tiempo real usando APIs meteorológicas.",
    image: "/assets/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/tu-usuario/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
    category: "frontend"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Plataforma de blog con sistema de comentarios y gestión de contenido.",
    image: "/assets/projects/blog.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/tu-usuario/blog-platform",
    category: "fullstack"
  }
]; 