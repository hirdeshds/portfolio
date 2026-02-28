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
} from "react-icons/si";

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  icon?: React.ElementType; // optional icon
};

export const DATA = {
  name: "Hirdesh",
  initials: "HK",
  url: "https://github.com/Hirdeshds",
  location: "Ghaziabad, India",
  locationLink:
    "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh,+India",
  description:
    "B.Tech IT Student | An Aspiring Data Engineer | AWS Certified | Open Source Contributor",
  summary:
    "I am a B.Tech Information Technology student at KIET Group of Institutions (2024–2028) passionate about Artificial Intelligence, Machine Learning, and building real-world intelligent systems.",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    // { name: "C", icon: SiC },

    // Frameworks
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#8A8A8A" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Keras", icon: SiKeras, color: "#D00000" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "NLP", icon: Icons.globe, color: "#2563EB" },
    // { name: "NLTK", icon: Icons.globe },
    // { name: "SpaCy", icon: SiSpacy },

    // DevOps & Tools
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    // { name: "Uvicorn", icon: Icons.globe },
    // { name: "Joblib", icon: Icons.globe },
    { name: "Jupyter Notebook", icon: SiJupyter, color: "#F37626" },
    { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    // { name: "VS Code", icon: Icons.globe },
    // { name: "Kaggle", icon: SiKaggle },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },

    // Databases / Cloud
    { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Heroku", icon: SiHeroku, color: "#430098" },
    { name: "Render", icon: SiRender, color: "#46E3B7" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: Icons.resume, label: "Resume" },
    { href: "/codolio", icon: Icons.leetcode, label: "Codolio" },
  ],
  contact: {
    email: "Hirdeshhkumar2005@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Hirdeshds",
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
        url: "mailto:Hirdeshhkumar2005@gmail.com",
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
      description: "Open Source Contributor (SWOC)",
    },
  ],
  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://www.kiet.edu/",
      degree: "B.Tech in Information Technology",
      logoUrl: "/kiet.jpg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "ESG Monitoring System",
      href: "https://github.com/hirdeshds/ESG-Monitoring-System",
      dates: "",
      description:
        "Automated compliance checks and risk scoring, anomaly detection with alert generation, and a live dashboard with explainable AI insights.",
      technologies: ["Python", "TensorFlow", "FastAPI", "Scikit-learn", "Docker"],
    },
    {
      title: "AI 4 Alzheimer’s",
      href: "https://github.com/hirdeshds/AI-4-Alzheimers",
      dates:"",
      description: "Medical image classification using TensorFlow, CNN, FastAPI, SQLite.",
      technologies: ["TensorFlow", "CNN", "FastAPI", "SQLite"],
    },
    {
      title: "Exolumin",
      href: "https://github.com/hirdeshds/Exolumin",
      dates:"",
      description: "Exoplanet prediction using Scikit-learn, Logistic Regression, FastAPI.",
      technologies: ["Scikit-learn", "Logistic Regression", "FastAPI"],
    },
    {
      title: "Customer Churn Prediction",
      href: "https://github.com/hirdeshds/Customer-Churn-Prediction",
      dates:"",
      description: "Customer Churn Prediction using Scikit-learn, EDA, ML comparison.",
      technologies: ["Scikit-learn", "EDA", "ML comparison"],
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
      icon: Icons.aws,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
      icon: Icons.aws,
    },
    {
      name: "Microsoft Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "July 2025",
      icon: Icons.microsoft,
    },
  ] as Certification[],
  hackathons: [
       {
      title: "HackAvenis",
      dates: "February 12th - 13th, 2026",
      location: "MSIT DELHI, India",
      description:
        "We built an AI-powered ESG Intelligence Platform designed to shift organizations from reactive reporting to proactive, data-driven risk management. The platform leverages a multi-agent architecture to provide real-time ESG scoring, explainable insights, and scalable solutions for enterprises navigating the complex landscape   of sustainability  regulatory compliance.  (Finalist) Secured 5th position "
        ,
    
      image:
        "data:image/webp;base64,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",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Nasa Space Apps Challenge",
      dates: "September 4th - 5th, 2025",
      location: "Houston, Texas"

,
      description:
        " We built a (ExoLumin) ,an AI-driven platform designed to identify potential exoplanets from NASA’s Kepler mission data. The project leverages machine learning models—such as Random Forest and Neural Networks—to analyze key astrophysical parameters (e.g., orbital period, transit depth, planet radius) and classify celestial objects as confirmed planets or false positives",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/23/e9/3e/23e93e01-00a8-f422-8dc6-891d7e4686fd/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.jpeg/1200x630wa.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
