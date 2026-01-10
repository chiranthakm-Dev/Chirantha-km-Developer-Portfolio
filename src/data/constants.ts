// constants/index.ts

export enum SkillNames {
  PYTHON = "python",
  C = "c",
  CPP = "cpp",
  REACT = "react",
  GITHUB = "github",
  VERCEL = "vercel",
  LLM = "llm",
  JAVA = "java",
  GO = "go",
  KOTLIN = "kotlin",
  JS = "js",
  SQL = "sql",
  MLE = "mle",
  TENSORFLOW = "tensorflow",
  SCIKIT = "scikit",
  FASTAPI = "fastapi",
  DOCKER = "docker",
  GCP = "gcp",
  MONGODB = "mongodb",
  POSTGRES = "postgres",
  KUBERNETES = "kubernetes",
  REDHAT = "redhat",
  RESTAPI = "restapi",
  CYBERSEC = "cybersec",
  FINTECH = "fintech",
  // Helper mappings for backwards compatibility
  HTML = "html",
  CSS = "css",
  NODEJS = "nodejs",
  TS = "ts",
  TAILWIND = "tailwind",
  GIT = "git",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  level?: "Pro" | "Intermediate" | "Beginner";
};

export const SKILLS: Record<SkillNames, Skill> = {
  // Pro Level
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "My strongest language. Used for ML, automation, APIs, and problem-solving without hesitation.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Pro",
  },
  [SkillNames.C]: {
    id: 2,
    name: "c",
    label: "C",
    shortDescription: "Strong fundamentals with memory, pointers, and low-level logic. Keeps my engineering roots solid.",
    color: "#A8B9CC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    level: "Pro",
  },
  [SkillNames.CPP]: {
    id: 3,
    name: "cpp",
    label: "C++",
    shortDescription: "Where everything began. Years of experience with problem-solving, performance, and core concepts.",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    level: "Pro",
  },
  [SkillNames.REACT]: {
    id: 4,
    name: "react",
    label: "React.js",
    shortDescription: "Comfortable building clean, responsive interfaces with proper component structure and state handling.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Pro",
  },
  [SkillNames.GITHUB]: {
    id: 5,
    name: "github",
    label: "GitHub",
    shortDescription: "Daily driver for version control, collaboration, and real-world project workflows.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: "Pro",
  },
  [SkillNames.VERCEL]: {
    id: 6,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployments made effortless. Confident with production-ready deployments.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    level: "Pro",
  },
  [SkillNames.LLM]: {
    id: 7,
    name: "llm",
    label: "Large Language Models (LLMs)",
    shortDescription: "Hands-on with prompting, pipelines, and real use-cases. Always verify, never blindly trust.",
    color: "#10a37f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    level: "Pro",
  },
  
  // Intermediate Level
  [SkillNames.JAVA]: {
    id: 8,
    name: "java",
    label: "Java",
    shortDescription: "Enterprise-ready understanding. Can build, read, and maintain backend systems confidently.",
    color: "#ed8b00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: "Intermediate",
  },
  [SkillNames.GO]: {
    id: 9,
    name: "go",
    label: "Go (Golang)",
    shortDescription: "Recently adopted and enjoying it. Strong with fundamentals and backend concepts.",
    color: "#00add8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    level: "Intermediate",
  },
  [SkillNames.KOTLIN]: {
    id: 10,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Comfortable with modern JVM features and cleaner alternatives to Java.",
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    level: "Intermediate",
  },
  [SkillNames.JS]: {
    id: 11,
    name: "js",
    label: "JavaScript",
    shortDescription: "Solid for frontend logic and web development needs.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Intermediate",
  },
  [SkillNames.SQL]: {
    id: 12,
    name: "sql",
    label: "SQL",
    shortDescription: "Confident with queries, joins, and database interactions.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Intermediate",
  },
  [SkillNames.MLE]: {
    id: 13,
    name: "mle",
    label: "Machine Learning Engineering",
    shortDescription: "Building and deploying ML pipelines with focus on optimisation and real outcomes.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    level: "Intermediate",
  },
  [SkillNames.TENSORFLOW]: {
    id: 14,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Used for training and deploying ML models beyond toy examples.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    level: "Intermediate",
  },
  [SkillNames.SCIKIT]: {
    id: 15,
    name: "scikit",
    label: "Scikit-learn",
    shortDescription: "Reliable tool for fast experimentation and classical ML workflows.",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg",
    level: "Intermediate",
  },
  [SkillNames.FASTAPI]: {
    id: 16,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Serving ML models and APIs cleanly and efficiently.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    level: "Intermediate",
  },
  [SkillNames.DOCKER]: {
    id: 17,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerizing applications and ML services for consistent deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Intermediate",
  },
  [SkillNames.GCP]: {
    id: 18,
    name: "gcp",
    label: "Google Cloud Platform",
    shortDescription: "Experience deploying applications and ML workloads in the cloud.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    level: "Intermediate",
  },
  [SkillNames.MONGODB]: {
    id: 19,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Comfortable working with NoSQL data models and integrations.",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
  },
  [SkillNames.POSTGRES]: {
    id: 20,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Strong with structured data and relational design.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Intermediate",
  },
  
  // Beginner Level
  [SkillNames.KUBERNETES]: {
    id: 21,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Understanding orchestration basics and learning deeper scaling concepts.",
    color: "#326ce5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    level: "Beginner",
  },
  [SkillNames.REDHAT]: {
    id: 22,
    name: "redhat",
    label: "Red Hat Linux",
    shortDescription: "Exposure to enterprise Linux environments and system fundamentals.",
    color: "#ee0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
    level: "Beginner",
  },
  [SkillNames.RESTAPI]: {
    id: 23,
    name: "restapi",
    label: "REST APIs",
    shortDescription: "Designing and consuming APIs with growing confidence.",
    color: "#005571",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    level: "Beginner",
  },
  [SkillNames.CYBERSEC]: {
    id: 24,
    name: "cybersec",
    label: "Cybersecurity Fundamentals",
    shortDescription: "Understanding common vulnerabilities and secure design principles.",
    color: "#ff6b00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    level: "Beginner",
  },
  [SkillNames.FINTECH]: {
    id: 25,
    name: "fintech",
    label: "FinTech",
    shortDescription: "Strong interest in finance-driven systems, payments, and data-centric decision making.",
    color: "#1e88e5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg",
    level: "Beginner",
  },
  
  // Helper mappings for backwards compatibility (not shown on keyboard)
  [SkillNames.HTML]: {
    id: 99,
    name: "html",
    label: "HTML",
    shortDescription: "The foundation of the web. Semantic structure done right.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 100,
    name: "css",
    label: "CSS",
    shortDescription: "Making things look clean and responsive.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 101,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the server. Backend versatility unlocked.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.TS]: {
    id: 102,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with type safety. Catching bugs before they ship.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 103,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Styling without crying. Fast, consistent, and no fighting with CSS files.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.GIT]: {
    id: 104,
    name: "git",
    label: "Git",
    shortDescription: "Version control is muscle memory.",
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
};

// Filter to only show the 25 main skills on the keyboard (excluding helpers)
export const KEYBOARD_SKILLS: Skill[] = Object.values(SKILLS).filter(
  (skill): skill is Skill => skill.id <= 25
);

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    title: "ML Engineer Intern",
    company: "Dexter Ltd",
    description: [
      "Optimized pipelines reducing model training time by 65% while maintaining 94% accuracy.",
      "Built and deployed 3 production ML models supporting 50,000 daily transactions.",
      "Improved predictive accuracy by 32%, resulting in 120K annual cost savings.",
      "Designed automated monitoring system detecting model drift 4x faster than manual methods.",
      "Collaborated across teams using Docker, GCP, and Kubernetes for enterprise-grade CI/CD.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.TENSORFLOW,
      SkillNames.DOCKER,
      SkillNames.KUBERNETES,
      SkillNames.GCP,
    ],
  },
  {
    id: 2,
    startDate: "Jun 2024",
    endDate: "Sep 2024",
    title: "Python Developer Intern",
    company: "YBI Foundation",
    description: [
      "Developed and maintained Python-based applications for data processing and automation.",
      "Collaborated with the team to build scalable solutions using modern Python frameworks.",
      "Implemented efficient algorithms and data structures to optimize application performance.",
      "Participated in code reviews and contributed to improving code quality and best practices.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
  ],
  dark: [
    "Dark mode activated! Thanks from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. Comfort restored.",
    "Dark mode on! Finally, someone who understands sophistication.",
  ],
};
