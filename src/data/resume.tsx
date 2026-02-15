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

export const DATA = {
  name: "Hirdesh",
  initials: "HK",
  url: "https://github.com/Hirdeshds",
  location: "Ghaziabad, India",
  locationLink: "https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh,+India",
  description:
    "B.Tech IT Student | An Aspiring Data Engineer | AWS Certified | Open Source Contributor",
  summary:
    "I am a B.Tech Information Technology student at KIET Group of Institutions (2024–2028) passionate about Artificial Intelligence, Machine Learning, and building real-world intelligent systems.",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    // { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "C", icon: Csharp },
    // Frameworks
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    // { name: "FastAPI" },
    // { name: "TensorFlow" },
    // { name: "Keras" },
    // { name: "Scikit-learn" },
    // { name: "Pandas" },
    // { name: "NumPy" },
    // { name: "NLP" },
    // { name: "NLTK" },
    // { name: "SpaCy" },
    // DevOps & Tools
    { name: "Docker", icon: Docker },
    // { name: "FastAPI" },
    // { name: "Uvicorn" },
    // { name: "Joblib" },
    // { name: "Jupyter Notebook" },
    // { name: "Google Colab" },
    // { name: "Git" },
    { name: "GitHub", icon: Icons.github },
    // { name: "Postman" },
    // { name: "VSCode" },
    // { name: "Kaggle" },
    // Databases/Cloud
    { name: "PostgreSQL", icon: Postgresql },
    // { name: "SQLite" },
    // { name: "MySQL" },
    // { name: "MongoDB" },
    // { name: "Firebase" },
    // { name: "AWS" },
    // { name: "Netlify" },
    // { name: "Vercel" },
    // { name: "Heroku" },
    // { name: "Render" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: Icons.resume, label: "Resume" },
    {href: "/codolio", icon: NotebookIcon, label: "Codolio"}
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
      // LeetCode removed: icon not available
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
      description:
        "Open Source Contributor (SWOC)"
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
      href: "",
      dates: "",
      // active: true,
      description:
        "Medical image classification using TensorFlow, CNN, FastAPI, SQLite.",
      technologies: [
        "TensorFlow",
        "CNN",
        "FastAPI",
        "SQLite",
      ],
      // links: [],
      // image: "",
      // video: "",
    },
    {
      title: "Exolumin",
      href: "",
      dates: "",
      active: true,
      description:
        "Exoplanet prediction using Scikit-learn, Logistic Regression, FastAPI.",
      technologies: [
        "Scikit-learn",
        "Logistic Regression",
        "FastAPI",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Customer Churn Prediction",
      href: "",
      dates: "",
      active: true,
      description:
        "Customer Churn Prediction using Scikit-learn, EDA, ML comparison.",
      technologies: [
        "Scikit-learn",
        "EDA",
        "ML comparison",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
    },
    {
      name: "Microsoft Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "July 2025",
    },
  ],
  hackathons: [],
} as const;