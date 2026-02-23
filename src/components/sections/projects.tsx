"use client";
import { useState } from "react";
import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { PinContainer } from "../ui/3d-pin";
import { motion } from "framer-motion";
import { ProjectModal } from "../ui/project-modal";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiTensorflow,
  SiScikitlearn,
  SiFastapi,
  SiKubernetes,
  SiGooglecloud,
  SiArduino,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  scikit: {
    title: "Scikit-Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  kubernetes: {
    title: "Kubernetes",
    bg: "black",
    fg: "white",
    icon: <SiKubernetes />,
  },
  gcp: {
    title: "Google Cloud",
    bg: "black",
    fg: "white",
    icon: <SiGooglecloud />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ovia",
    category: "Healthcare AI",
    title: "OVIA Wellness Assistant",
    src: "/assets/ovia dashboard.png",
    screenshots: ["ovia dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.scikit,
      ],
    },
    live: "#",
    github: "https://github.com/Raksha-Gangadhar/ovia-wellness-assistant",
    get content() {
      return (
        <div className="space-y-5">
          <TypographyP className="font-mono text-base md:text-lg leading-relaxed !mt-0">
            Full-stack React.js + FastAPI web app for women's health diagnostics, achieving <strong className="text-primary">95% PCOS AUC</strong>, <strong className="text-primary">98% thyroid AUC</strong>, and <strong className="text-primary">99% menstrual prediction AUC</strong> via Scikit-learn models (Random Forest, SVM, Logistic Regression).
          </TypographyP>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Platform Integration</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Integrates SQLite ORM for <strong className="text-foreground">1,000+ user logs</strong>, JWT auth, and <strong className="text-foreground">Grok AI</strong> for real-time chatbot insights on 5 wellness metrics (mood, sleep, exercise, hydration, stress).
          </p>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Performance Metrics</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Reduces risk detection time by <strong className="text-foreground">80%</strong> compared to manual screening, with responsive UI handling <strong className="text-foreground">50 concurrent sessions</strong>.
          </p>
        </div>
      );
    },
  },
  {
    id: "threat-analog",
    category: "Cybersecurity",
    title: "ThreatLog Analyzer",
    src: "/assets/THREAT ANALYZER.png",
    screenshots: ["THREAT ANALYZER.png"],
    live: "#",
    github: "https://github.com/chiranthakm-Dev/threatlog-analyzer",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.pandas,
      ],
    },
    get content() {
      return (
        <div className="space-y-5">
          <TypographyP className="font-mono text-base md:text-lg leading-relaxed !mt-0">
            Cybersecurity log analysis platform parsing Apache/NGINX logs at <strong className="text-primary">10,000+ lines/sec</strong> using Pandas and regex patterns to detect XSS, LFI/RFI, brute-force (threshold: 5 reqs/sec/IP), and scanner User-Agents.
          </TypographyP>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Threat Analysis Features</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Features threat scoring (0-100 scale), IOC extraction (IPs, hashes), and Matplotlib visualizations of <strong className="text-foreground">20+ attack types</strong>, with anomaly detection via z-score (<strong className="text-foreground">&gt;2.5σ flagged</strong>).
          </p>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Performance & Detection</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Processes <strong className="text-foreground">1GB logs in &lt;5min</strong>, identifying <strong className="text-foreground">95% of common OWASP Top 10 threats</strong> for SOC teams.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-traffic",
    category: "Smart Cities & AI",
    title: "Traffic Management IoT-AI",
    src: "/assets/dashboard.png",
    screenshots: ["dashboard.png"],
    live: "#",
    github: "https://github.com/chiranthakm-Dev/traffic-management-iot-ai",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div className="space-y-5">
          <TypographyP className="font-mono text-base md:text-lg leading-relaxed !mt-0">
            IoT-AI traffic optimizer using <strong className="text-primary">YOLOv8 object detection (mAP@0.5: 0.92)</strong> on OpenCV-processed camera feeds for vehicle counting across 4 lanes, with dynamic signal timing (green phase: 20-60s based on density).
          </TypographyP>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">IoT & Performance</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            NVIDIA Jetson Nano backend simulates <strong className="text-foreground">MQTT IoT comms (100ms latency)</strong>, Pygame GUI for real-time heatmaps, reducing avg wait time by <strong className="text-foreground">35% vs fixed timers</strong> in 1km urban sims.
          </p>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Scalability</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Handles <strong className="text-foreground">500+ vehicles/hour/junction</strong> with pedestrian priority logic.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-bi-dashboard",
    category: "Business Intelligence",
    title: "AI-Powered Business Dashboard",
    src: "/assets/AI BUSINESSS DASHBOARD.png",
    screenshots: ["AI BUSINESSS DASHBOARD.png"],
    live: "#",
    github: "https://github.com/chiranthakm-Dev/ai-powered-business-dashboard",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.tensorflow,
      ],
    },
    get content() {
      return (
        <div className="space-y-5">
          <TypographyP className="font-mono text-base md:text-lg leading-relaxed !mt-0">
            Interactive BI dashboard with React.js frontend, Tailwind CSS, and ML APIs (e.g., Prophet forecasting, <strong className="text-primary">isolation forest anomalies at 99% precision</strong>) for real-time KPIs from CSV/JSON uploads (<strong className="text-primary">up to 1M rows</strong>).
          </TypographyP>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">AI Features</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Supports <strong className="text-foreground">NLQ via LLM integration</strong>, <strong className="text-foreground">15+ Chart.js viz types</strong>, and drill-downs, processing queries in <strong className="text-foreground">&lt;2s with 90% insight accuracy</strong> on sales/ops data.
          </p>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Scalability & Impact</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Scales to <strong className="text-foreground">100 dashboards/users</strong>, boosting decision speed by <strong className="text-foreground">50%</strong> through auto-generated trends.
          </p>
        </div>
      );
    },
  },
  {
    id: "financial-risk-analytics-engine",
    category: "FinTech",
    title: "Financial Risk Analytics Engine",
    src: "/assets/projects-screenshots/financial-risk-analytics-engine/1.png",
    screenshots: ["financial-risk-analytics-engine/1.png"],
    live: "#",
    github: "https://github.com/chiranthakm-Dev/financial-risk-analytics-engine",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy, PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div className="space-y-5">
          <TypographyP className="font-mono text-base md:text-lg leading-relaxed !mt-0">
            A high-performance quantitative risk analytics system built to process large-scale financial data. Implements real-time risk metrics, volatility analysis, and structured financial modeling under performance constraints.
          </TypographyP>
          <TypographyH3 className="!mt-6 mb-3 text-lg md:text-xl font-semibold">Technical Highlights</TypographyH3>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
            Uses vectorized Pandas/NumPy pipelines, SQL-backed aggregation, and optimized sampling for sub-second metric computation on large tick datasets.
          </p>
        </div>
      );
    },
  },
];

// Export projects array for use in other components
export { projects };

// ProjectsSection component
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <SectionWrapper
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen py-20 z-10"
      >
        <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
          <SectionHeader
            id="projects"
            title="Projects"
            desc="Things I've built."
            className="mb-12 md:mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full flex items-stretch relative mx-auto h-auto md:h-[25rem]"
                style={{ maxWidth: "100%" }}
              >
                <div
                  className="w-full h-full cursor-pointer relative flex"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleProjectClick(project);
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                >
                  <PinContainer
                    title={project.title}
                    href="#"
                    containerClassName="w-full h-full"
                  >
                    <div className="flex flex-col gap-4 w-full h-full">
                      <div className="relative w-full flex-shrink-0 h-48 md:h-56 overflow-hidden rounded-lg bg-muted">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.src}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="space-y-2 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white truncate">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.category}</p>
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </>
  );
};

export default ProjectsSection;
