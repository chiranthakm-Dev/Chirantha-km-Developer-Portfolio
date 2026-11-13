export type Entry = {
  title: string;
  organization?: string;
  location?: string;
  start?: string;
  end?: string;
  dates?: string;
  bullets: string[];
  tags?: string[];
  href?: string;
};
export const content = {
  name: "Chirantha K M",
  shortName: "chiranth km",
  year: "2026",
  location: "Bengaluru, India",
  url: "https://chirantha-km-developer-portfolio.vercel.app",
  email: "chirantha.km15@gmail.com",
  phone: "+91 83102 28282",
  phoneHref: "tel:+918310228282",
  github: "https://github.com/chirantha-km",
  linkedin: "https://www.linkedin.com/in/chirantha-km",
  title: "Chirantha K M — Python Engineer & Quantitative Research",
  description:
    "Python engineer working across financial data platforms, backend APIs, applied AI/ML and quantitative research. Explore experience, projects and publications.",
  roles: ["Python Engineer", "Financial Data Platforms", "Applied AI/ML"],
  portrait: {
    src: "/assets/PROFILE PICTURE.png",
    alt: "Portrait of Chirantha K M wearing a forest-green suit",
    caption: "Chirantha K M",
  },
  hero: {
    eyebrow: "Engineering · Data · Research",
    descriptor: "Python Engineer | Financial Data Platforms | Applied AI/ML",
    subline:
      "I build the backend systems that move, check, and analyse financial data, and I research how to make AI outputs more reliable.",
    note: "Bengaluru, India",
    primary: "Download Resume",
    secondary: "Explore my work",
    specialties: ["Backend & Data Systems", "AI/ML & Research"],
  },
  labels: {
    navigation: "Main navigation",
    menu: "Menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    contact: "Contact",
    email: "Email Chirantha",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    source: "Source code",
    research: "Ongoing research",
    footer: "Python · Data · Research",
    back: "Back to portfolio",
    notFound: "Page not found",
    notFoundDetail:
      "The page you are looking for may have moved. Explore the portfolio or get in touch.",
    errorCode: "404",
    resume: "Resume",
    location: "Location",
    elsewhere: "Elsewhere",
    phone: "Phone",
    copyright: "Chirantha K M",
    top: "Back to top",
  },
  sections: [
    { id: "summary", title: "Summary", note: "A little context" },
    { id: "skills", title: "Skills", note: "The tools behind the work" },
    {
      id: "experience",
      title: "Experience",
      note: "From questions to working systems",
    },
    { id: "projects", title: "Projects", note: "Selected engineering work" },
    {
      id: "research",
      title: "Research & Publications",
      note: "Exploring what comes next",
    },
    { id: "education", title: "Education", note: "Foundations" },
    {
      id: "certifications",
      title: "Certifications",
      note: "Continued learning",
    },
    {
      id: "achievements",
      title: "Achievements & Leadership",
      note: "Beyond the code",
    },
    { id: "contact", title: "Contact", note: "Start a conversation" },
  ],
  summary: [
    "I’m a Python engineer who builds software that handles financial data accurately and at scale. That means pipelines that collect and clean thousands of records a day, APIs that other apps rely on, and machine-learning models that spot unusual patterns.",
    "At SuperBuilt AI, I built pipelines that process 50,000+ financial records daily with 99.4% reliability, and made the database queries that check those records about 10× faster. I also research how to detect when large language models give wrong or made-up answers.",
    "Based in Bengaluru. I work in English, Kannada, and Hindi.",
  ],
  proof: [
    {
      value: "50,000+",
      label: "Financial records processed daily",
      meaning: "The pipelines I built handle real volume, not demo data.",
      context:
        "SuperBuilt AI · Backend / Data Engineer Intern · Feb to May 2025.",
    },
    {
      value: "99.4%",
      label: "Pipeline reliability",
      meaning:
        "Records were validated, retried on failure, and failed ones routed aside instead of being lost.",
      context:
        "SuperBuilt AI · Backend / Data Engineer Intern · Feb to May 2025.",
    },
    {
      value: "8s → 900ms",
      label: "Reconciliation query speed (~10× faster)",
      meaning:
        "Reconciliation means checking that records from different sources agree. I made that check fast using indexing and partitioning.",
      context:
        "SuperBuilt AI · Backend / Data Engineer Intern · Feb to May 2025.",
    },
  ],
  howWork: {
    title: "How I work",
    steps: [
      {
        title: "Build",
        items: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kafka"],
      },
      {
        title: "Check",
        items: [
          "pytest",
          "validation rules",
          "Prometheus and Grafana monitoring",
        ],
      },
      {
        title: "Analyse",
        items: [
          "anomaly detection (Z-score, Isolation Forest)",
          "XGBoost",
          "LLM output validation research",
        ],
      },
    ],
  },
  // Render only the skills and certifications listed here. TODOs are authoring notes, not credentials.
  // TODO: Confirm any additional tools (Monte Carlo, risk metrics, portfolio optimization, QuantConnect / LEAN) before adding them.
  // TODO: Add QuantConnect only with a verified exact course title/year and proof; use in-progress only after confirmation.
  // TODO: Verify exact transcript titles for Financial Accounting, Financial Management, Marketing Research, and Principles of Management before adding coursework.
  skills: [
    {
      title: "Programming & Data",
      items: [
        "Python",
        "SQL",
        "Go",
        "C++",
        "Pandas",
        "NumPy",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Backend & Platforms",
      items: [
        "FastAPI",
        "REST APIs",
        "Kafka",
        "Redis",
        "WebSockets",
        "JWT / RBAC",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "Applied AI & Research",
      items: [
        "Scikit-learn",
        "XGBoost",
        "Anomaly Detection",
        "Feature Engineering",
        "Predictive Modelling",
        "LLM Reliability Research",
      ],
    },
    {
      title: "Quantitative Methods",
      items: [
        "Statistical Analysis",
        "Time-Series Data",
        "Backtesting Frameworks (Backtrader contributor)",
        "Quantitative Research Workflows",
        "Financial Data Reconciliation",
        "Operations Research",
      ],
    },
    {
      title: "Infrastructure & Quality",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "pytest",
        "Prometheus",
        "Grafana",
        "GCP Cloud Run",
        "AWS (working knowledge)",
        "Linux",
      ],
    },
  ],
  experience: [
    {
      title: "Quant Analyst & Tech",
      organization: "Reverb Inc.",
      location: "Remote",
      start: "2026-05",
      end: "2026-09",
      dates: "May 2026 – Sep 2026",
      bullets: [
        "Translated quantitative research questions into reproducible data workflows, experiments, and Python-based solutions; refined approaches using results and stakeholder feedback.",
        "Owned data preparation, quantitative analysis, debugging, and technical delivery from problem definition through implementation in collaboration with stakeholders.",
      ],
    },
    {
      title: "Full-Stack Engineer & Technical Lead (Intern)",
      organization: "MSR Solutions",
      location: "Bengaluru, India",
      start: "2025-12",
      end: "2026-05",
      dates: "Dec 2025 – May 2026",
      bullets: [
        "Independently shipped production web, mobile, admin, and CRM applications, designing backend APIs, data integrations, and maintainable services.",
        "Developed an ML-powered estimation feature, translating quantitative cost and timeline models into an end-user product.",
        "Led architecture, implementation, testing, and deployments through rapid iterations with technical and business stakeholders.",
      ],
    },
    {
      title: "Backend / Data Engineer Intern",
      organization: "SuperBuilt AI",
      location: "Remote",
      start: "2025-02",
      end: "2025-05",
      dates: "Feb 2025 – May 2025",
      bullets: [
        "Developed Python and SQL financial-data pipelines processing 50,000+ records daily; implemented reconciliation, validation, idempotent retries, and dead-letter handling to achieve 99.4% reliability.",
        "Improved PostgreSQL reconciliation queries from 8s to 900ms using composite indexes, partitioning, and schema optimization.",
        "Implemented statistical anomaly detection with Z-score and Isolation Forest; exposed Prometheus metrics and investigated data-quality failures.",
      ],
    },
    {
      title: "Data Science Intern",
      organization: "YBI Foundation",
      location: "Bengaluru, India",
      start: "2024-01",
      end: "2024-02",
      dates: "Jan 2024 – Feb 2024",
      bullets: [
        "Built a reproducible Python ML pipeline for ingestion, feature engineering, training, and evaluation, with 78% pytest coverage.",
        "Reduced debugging MTTR from 4 hours to under 45 minutes using structured logging and Grafana dashboards.",
      ],
    },
  ] satisfies Entry[],
  // TODO: Project repository and live destinations must come from PDF hyperlink annotations or owner confirmation. Do not infer URLs from slugs.
  projects: [
    {
      title: "Real-Time Statistical Anomaly Detection Engine",
      bullets: [
        "Processed 500 transactions/sec through Kafka, combining Z-score, IQR, and Isolation Forest with PostgreSQL persistence, API endpoints, and latency monitoring.",
      ],
      tags: [
        "Python",
        "FastAPI",
        "Kafka",
        "Scikit-learn",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
        "Docker",
      ],
    },
    {
      title: "Production REST API — Task & Team Management",
      bullets: [
        "Achieved sub-100ms p95 latency under 500 concurrent users and 84% pytest coverage with JWT/RBAC, Redis rate limiting, and automated testing.",
      ],
      tags: [
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "JWT",
        "Docker",
        "pytest",
        "GitHub Actions",
      ],
    },
    {
      title: "Real-Time Event Streaming & Notification Service",
      bullets: [
        "Handled 1,000+ events/min with Kafka consumer groups, dead-letter routing, idempotency, Redis, and consumer-lag monitoring.",
      ],
      tags: [
        "Python",
        "FastAPI",
        "Kafka",
        "WebSockets",
        "PostgreSQL",
        "Redis",
        "Prometheus",
      ],
    },
    {
      title: "Ovia — Predictive Modelling Research",
      bullets: [
        "Developed a reproducible XGBoost workflow for feature processing, evaluation, and FastAPI inference with PostgreSQL; research accepted for IEEE NELEX 2026.",
      ],
      tags: ["Python", "XGBoost", "FastAPI", "PostgreSQL", "Docker"],
    },
  ] satisfies Entry[],
  // TODO: Confirm publication URLs and whether the accepted NELEX paper has been published. Acceptance is the only status asserted here.
  research: [
    {
      title:
        "Output Validation & Hallucination Detection for LLM Inference Systems",
      dates: "2025 – present",
      start: "2025",
      organization: "Ongoing research",
      bullets: [
        "Research on LLM inference output validation, hallucination detection, model failure analysis, and reliability evaluation.",
      ],
    },
    {
      title:
        "Ovia: XGBoost-Based Predictive Modelling for Women’s Wellness Tracking",
      dates: "2026",
      start: "2026",
      organization: "IEEE NELEX 2026 · Conference accepted",
      bullets: [
        "Predictive modelling research using XGBoost, feature processing, evaluation, and API inference.",
      ],
    },
    {
      title: "Fast Fashion’s Impact on Youth & Sustainability",
      dates: "2024",
      start: "2024",
      organization:
        "Asia Journal of Ethics and Sustainability · Journal publication",
      bullets: [],
    },
  ] satisfies Entry[],
  education: {
    title: "B.Tech — Computer Science & Business Systems",
    organization: "Jain (Deemed-to-be University)",
    location: "Bengaluru, India",
    start: "2022",
    end: "2026",
    dates: "2022 – 2026",
    bullets: [
      "GPA: 8.3/10",
      "Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Operations Research, Business Analytics, Computer Networks.",
    ],
  } satisfies Entry,
  // TODO: Resume supplies years only for education/certifications; do not invent months. Certificate URLs are not supplied.
  certifications: [
    {
      title: "Meta Backend Developer Professional Certificate",
      organization: "Meta / Coursera",
      year: "2024",
    },
    {
      title: "Apache Kafka for Beginners — Developer Certificate",
      organization: "Confluent",
      year: "2024",
    },
    {
      title: "Docker for Developers",
      organization: "Docker Inc.",
      year: "2024",
    },
    {
      title: "GitHub Actions CI/CD",
      organization: "GitHub Skills",
      year: "2024",
    },
    {
      title: "Google Cloud Fundamentals",
      organization: "Google Cloud / Coursera",
      year: "2023",
    },
    {
      title: "Linux Command Line Essentials (NDG)",
      organization: "Cisco NetAcad",
      year: "2023",
    },
    {
      title: "Machine Learning with Python",
      organization: "IBM SkillsBuild",
      year: "2023",
    },
  ],
  achievements: [
    {
      title: "Top 5 Finalist — Indegene Hackathon",
      year: "2025",
      detail: "2,000+ teams; real-time anomaly detection backend.",
    },
    {
      title: "Open-Source Contributor",
      year: "2024",
      detail: "Backtrader & FastAPI-pagination.",
    },
    {
      title: "TCS IT Quiz — National Level Representative",
      year: "2023",
      detail: "Karnataka state selection.",
    },
    {
      title: "Founder & Technical Lead — Echo Club",
      year: "2023",
      detail:
        "FinTech-focused student community, Jain University; 2023–present.",
    },
    {
      title: "Founding Member & Tech/PR Lead — Tech Council SCSE",
      year: "2022",
      detail: "Led technical and PR operations for three years.",
    },
    {
      title: "Technical Lead — Cultural Club",
      year: "2022",
      detail: "Managed AV infrastructure for large-scale campus events.",
    },
  ],
  // TODO: Hindi proficiency varies by source; omit proficiency labels until confirmed.
  languages: "English · Kannada · Hindi",
  resumePath: "/resume.pdf",
  resumeFilename: "Chirantha_K_M_Resume.pdf",
} as const;
