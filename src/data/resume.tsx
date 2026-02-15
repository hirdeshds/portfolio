export const DATA = {
  name: "Hirdesh",
  initials: "HK",
  url: "https://github.com/Hirdeshds",
  location: "Ghaziabad, India",
  locationLink: "https://www.google.com/maps/place/Ghaziabad",
  description:
    "B.Tech IT Student | AI & ML Developer | AWS Certified | Open Source Contributor",
  summary:
    "I am a B.Tech Information Technology student at KIET Group of Institutions (2024–2028) passionate about Artificial Intelligence, Machine Learning, and building real-world intelligent systems. I have developed multiple ML-based projects including medical image classification, exoplanet prediction systems, and customer churn analysis. I enjoy combining AI with scalable backend systems using FastAPI and deploying production-ready applications.",

  avatarUrl: "/me.png",

  skills: [
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "FastAPI", icon: Python },
    { name: "TensorFlow", icon: Python },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/hirdeshds",
        icon: Icons.globe,
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
      company: "StandOut Platform (SWOC)",
      href: "https://github.com/Anushka-Pote/StandOut-Platform",
      badges: ["Open Source"],
      location: "Virtual",
      title: "Frontend Developer",
      logoUrl: "/standout.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Built and contributed to a React-based platform with reusable components and responsive UI. Implemented modern frontend practices including component-based architecture and state management.",
    },
    {
      company: "100 Days – 100 Web Projects",
      href: "https://github.com/dhairyagothi/100_days_100_web_project",
      badges: ["UI Revamp"],
      location: "Virtual",
      title: "Frontend Contributor",
      logoUrl: "/2048.png",
      start: "2025",
      end: "2025",
      description:
        "Redesigned and improved the UI of the 2048 game. Enhanced layout, styling, and responsiveness for a better gameplay experience.",
    },
  ],

  education: [
    {
      school: "KIET Group of Institutions",
      href: "https://kiet.edu",
      degree: "Bachelor of Technology in Information Technology",
      logoUrl: "/kiet.png",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "AI 4 Alzheimer’s",
      href: "https://github.com/hirdeshds/AI-4-Alzheimers",
      dates: "Jan 2026 – Present",
      active: true,
      description:
        "Developed a CNN model to classify MRI brain scans into 4 Alzheimer’s stages. Applied preprocessing and augmentation to improve performance. Deployed using FastAPI with SQLite for real-time predictions.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "FastAPI",
        "SQLite",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hirdeshds/AI-4-Alzheimers",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Exolumin",
      href: "https://github.com/hirdeshds/Exolumin",
      dates: "Oct 2025",
      active: true,
      description:
        "Built a Logistic Regression model to classify exoplanet candidates using NASA datasets (75.9% accuracy). Performed EDA, feature engineering, and deployed via FastAPI.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "FastAPI",
        "Matplotlib",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hirdeshds/Exolumin",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Customer Churn Prediction",
      href: "https://github.com/hirdeshds/Customer-Churn-Prediction",
      dates: "Sep 2025",
      active: true,
      description:
        "Built an end-to-end churn prediction system using multiple ML models. Applied EDA and feature engineering to improve performance and interpretability.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hirdeshds/Customer-Churn-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],

  certifications: [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
      link: "https://www.credly.com/badges/387ece25-23ff-4479-9602-d9468add304c",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2025",
      link: "https://www.credly.com/badges/4c5bd360-1bdd-4d93-b875-b85ae06c1d74",
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft",
      date: "July 2025",
      link: "https://www.linkedin.com/learning/certificates/8a354a39e4a9e3c31bd6978112ac9514e89c6d430c76f5d12c1a3a1fb11fe44e",
    },
  ],
} as const;
