// src/data/resume.ts
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

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
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "TypeScript", icon: Typescript },

    // Frameworks
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "FastAPI", icon: Icons.fastapi },
    { name: "TensorFlow", icon: Icons.tensorflow },
    { name: "Scikit-learn", icon: Icons.scikitlearn },
    // DevOps & Tools
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "GitHub", icon: Icons.github },
    { name: "Vercel", icon: Icons.vercel },
    { name: "Hugging Face", icon: Icons.huggingface },
    { name: "PostgreSQL", icon: Postgresql },
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
      icon:"",
      // icon: Icons./microsoft,
    },
  ] as Certification[],
  hackathons: [],
} as const;
