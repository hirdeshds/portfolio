import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import {
  SiAmazonwebservices,
  SiC,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGooglecolab,
  SiGithub,
  SiHeroku,
  SiHuggingface,
  SiJavascript,
  SiJupyter,
  SiKaggle,
  SiKeras,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiScikitlearn,
  SiSpacy,
  SiSqlite,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiNetlify,
  SiPrisma,
  SiN8N,
} from "react-icons/si";

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  icon?: React.ElementType; // optional icon
};

export const DATA = {
  name: "Hirdesh Kumar",
  initials: "HK",
  url: "https://github.com/hirdeshds",
  location: "Ghaziabad, India",
  locationLink:
    "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh,+India",
  description:
    "Aspiring AI Engineer & Software Developer | B.Tech IT Student | AWS Certified | Open Source Contributor",
  summary:
    "Aspiring AI Engineer and Software Developer with hands-on experience building machine learning, generative AI, and backend systems using Python, FastAPI, TensorFlow, and modern cloud technologies. Skilled in developing intelligent applications, multi-agent workflows, and AI-powered automation platforms. Passionate about solving real-world problems through scalable software systems and emerging AI technologies.",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "C", icon: SiC, color: "#A8B9CC" },

    // Frameworks & Libraries
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "NLP", icon: Icons.globe, color: "#2563EB" },
    { name: "SpaCy", icon: SiSpacy, color: "#09A3D5" },

    // Generative AI
    { name: "LangChain", icon: Icons.globe, color: "#F7DF1E" },
    { name: "FAISS", icon: Icons.globe, color: "#2563EB" },
    { name: "Prompt Engineering", icon: Icons.globe, color: "#10B981" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },

    // DevOps & Tools
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
    { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
    { name: "n8n", icon: SiN8N, color: "#FF6C5F" },

    // Databases / Cloud
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Heroku", icon: SiHeroku, color: "#430098" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: Icons.resume, label: "Resume" },
    { href: "/codolio", icon: Icons.leetcode, label: "Codolio" },
  ],
  contact: {
    email: "hirdeshhkumar2005@gmail.com",
    tel: "+91 6397458796",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hirdeshds",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hirdeshds/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hirdeshhkumar2005@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Social Winter of Code",
      href: "",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/swoc.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description: "Selected Contributor, Summer of Web and Code (SWOC) 2024. Developed multiple AI-powered applications focused on machine learning, automation, and intelligent systems.",
    },
  ],
  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://www.kiet.edu/",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/kiet.jpg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "NexCode AI",
      href: "https://github.com/hirdeshds/NEXCODE",
      dates: "Present",
      description:
        "Developed an AI-powered developer platform that assists with code generation, project creation, and software development workflows. Implemented automated code validation, syntax checking, and runtime testing using Docker-based sandbox environments. Integrated Cohere Command-R+ and GitHub APIs to automate project scaffolding, code analysis, and pull request creation.",
      technologies: ["Python", "FastAPI", "Cohere Command-R+", "Docker", "Redis", "Celery", "GitHub API"],
    },
    {
      title: "ESG Intelligence Platform",
      href: "https://github.com/hirdeshds/ESG-Intelligence-Platform",
      dates: "2026",
      description:
        "Developed a multi-agent ESG analytics platform for automated risk scoring, compliance auditing, and sustainability monitoring. Designed modular pipelines integrating feature engineering, machine learning prediction models, and SHAP explainability. Built scalable REST APIs using FastAPI and MongoDB for real-time analytics and reporting.",
      technologies: ["FastAPI", "Python", "MongoDB", "Scikit-Learn", "SHAP"],
    },
    {
      title: "AI 4 Alzheimer’s",
      href: "https://github.com/hirdeshds/AI-4-Alzheimers",
      dates: "2025",
      description:
        "Developed a Convolutional Neural Network (CNN) to classify MRI scans across four stages of Alzheimer’s disease. Implemented image preprocessing, augmentation, and optimization techniques to improve prediction accuracy. Built FastAPI endpoints to serve model predictions and integrate inference into external applications.",
      technologies: ["Python", "TensorFlow", "CNN", "FastAPI", "OpenCV", "SQLite"],
    },
    {
      title: "Customer Churn Prediction",
      href: "https://github.com/hirdeshds/Customer-Churn-Prediction",
      dates: "2025",
      description:
        "Built an end-to-end machine learning pipeline for customer churn prediction using real-world business datasets. Performed exploratory data analysis, feature engineering, and model evaluation across multiple algorithms. Improved model interpretability through visualization, performance comparison, and business-focused insights.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA", "ML comparison"],
    },
    {
      title: "Exolumin",
      href: "https://github.com/hirdeshds/Exolumin",
      dates: "2025",
      description: "Exoplanet prediction platform using Scikit-learn, Logistic Regression, and FastAPI built during NASA Space Apps Challenge.",
      technologies: ["Scikit-learn", "Logistic Regression", "FastAPI", "Random Forest", "Neural Networks"],
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      icon: Icons.aws,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      icon: Icons.aws,
    },
    {
      name: "Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "2025",
      icon: Icons.microsoft,
    },
  ] as Certification[],
  hackathons: [
    {
      title: "HackAvenis",
      dates: "February 12th - 13th, 2026",
      location: "MSIT DELHI, India",
      description:
        "We built an AI-powered ESG Intelligence Platform designed to shift organizations from reactive reporting to proactive, data-driven risk management. The platform leverages a multi-agent architecture to provide real-time ESG scoring, explainable insights, and scalable solutions for enterprises navigating the complex landscape of sustainability regulatory compliance. (Finalist) Secured 5th position.",
      image:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Nasa Space Apps Challenge",
      dates: "September 4th - 5th, 2025",
      location: "Houston, Texas",
      description:
        "We built a (ExoLumin) ,an AI-driven platform designed to identify potential exoplanets from NASA’s Kepler mission data. The project leverages machine learning models—such as Random Forest and Neural Networks—to analyze key astrophysical parameters (e.g., orbital period, transit depth, planet radius) and classify celestial objects as confirmed planets or false positives.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/23/e9/3e/23e93e01-00a8-f422-8dc6-891d7e4686fd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.jpeg/1200x630wa.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
