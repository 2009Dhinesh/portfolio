import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
export const personalInfo = {
  name: "Dhinesh Waran P",
  role: "Front-end Designer | Developer",
  tagline: "My passion for software lies with dreaming up ideas and making them come true with elegant interfaces.",
  email: "dwaranp@gmail.com",
  phone: "+91-7010382383",
  address: "M6HV+MRF, Gudalur, Tamil Nadu 625518",
  socials: [
    { name: "Github", icon: Github, url: "https://github.com/2009Dhinesh" },
    { name: "Linkedin", icon: Linkedin, url: "https://in.linkedin.com/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/" },
    { name: "Mail", icon: Mail, url: "mailto:dwaranp@gmail.com" }
  ]
};
export const skills = [
  { name: "HTML", level: 95, icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", level: 90, icon: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", level: 85, icon: "https://cdn.simpleicons.org/javascript" },
  { name: "React JS", level: 75, icon: "https://cdn.simpleicons.org/react" },
  { name: "React Native", level: 75, icon: "https://cdn.simpleicons.org/expo" },
  { name: "Node JS", level: 85, icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "UX Design", level: 85, icon: "https://cdn.simpleicons.org/framer" },
  { name: "C Programming", level: 70, icon: "https://cdn.simpleicons.org/c" },
  { name: "Python", level: 60, icon: "https://cdn.simpleicons.org/python" },
  { name: "n8n", level: 85, icon: "https://cdn.simpleicons.org/n8n" },
  { name: "Figma", level: 85, icon: "https://cdn.simpleicons.org/figma" }
];
export const projects = [
  {
    title: "Fabric Process Management System",
    description: "Full-stack industrial application designed to monitor, control, and calculate water usage costs during fabric processing in textile machines. Features machine-wise task flow and real-time process control.",
    image: "/project-fabric.png",
    github: "https://github.com/2009Dhinesh/Fabric",
    tags: ["React", "Chakra UI", "Full-Stack", "Industrial IoT"]
  },
  {
    title: "Campus Management System (Full-Stack)",
    description: "End-to-end management platform featuring a React Native mobile app for students/staff and a robust Node.js/Express API. Includes role-based access, automated complaint tracking, and academic programme management.",
    image: "/project-cms.png",
    github: "https://github.com/2009Dhinesh/FrontEnd-CMS",
    tags: ["React Native", "Node.js", "MongoDB", "JWT", "Express"]
  },
  {
    title: "Money Tracker App",
    description: "Full-stack personal finance suite with React Native mobile app and Node.js backend. Features family collaboration, expense tracking, and background processing.",
    image: "/project-money.png",
    github: "https://github.com/2009Dhinesh/Money-Tracker-App",
    tags: ["React Native", "Node.js", "MongoDB", "Redis"]
  },
  {
    title: "Tribal Product E-Commerce",
    description: "Modern e-commerce platform for tribal handicrafts. Includes secure Razorpay integration, admin dashboard, and Cloudinary media management.",
    image: "/project-tribal.png",
    github: "https://github.com/2009Dhinesh/Tribal-Product-frontend",
    tags: ["React", "Node.js", "Razorpay", "E-Commerce"]
  },
  {
    title: "PacMen",
    description: "Interactive PacMan animation where characters bounce off screen edges.",
    image: "/project-pacmen.png",
    github: "https://github.com/2009Dhinesh/Pacmen",
    demo: "https://2009dhinesh.github.io/Pacmen/",
    tags: ["HTML", "JS", "Animation"]
  },
  {
    title: "Eye Frame",
    description: "Real-time eye tracking experiment that follows cursor movement.",
    image: "/project-eye.png",
    github: "https://github.com/2009Dhinesh/Eye-Frame",
    demo: "https://2009dhinesh.github.io/Eye-Frame/",
    tags: ["JS", "DOM", "Interaction"]
  },
  {
    title: "Map Tracking",
    description: "Real-time bus tracking simulation using Mapbox integration.",
    image: "/project-map.png",
    github: "https://github.com/2009Dhinesh/map-tricker",
    demo: "https://2009dhinesh.github.io/map-tricker/",
    tags: ["API", "Mapbox", "Async"]
  },
  {
    title: "Tower",
    description: "Tower of Hanoi visualization and solver.",
    image: "/project-tower.png",
    github: "https://github.com/2009Dhinesh/Tower",
    demo: "https://2009dhinesh.github.io/Tower/",
    tags: ["Algorithms", "Recursion"]
  },
  {
    title: "Ball Moving",
    description: "Physics-based ball movement simulation.",
    github: "https://github.com/2009Dhinesh/Ball-Moving",
    demo: "https://2009dhinesh.github.io/Ball-Moving/",
    tags: ["Physics", "Canvas"]
  },
  {
    title: "Top Earner",
    description: "A project to visualize and list top earners efficiently.",
    github: "https://github.com/2009Dhinesh/Top-Earner",
    demo: "https://2009dhinesh.github.io/Top-Earner/",
    tags: ["JS", "Data Visualiztion"]
  },
  {
    title: "Word Count",
    description: "Real-time word and character counting utility.",
    github: "https://github.com/2009Dhinesh/Word-Count",
    demo: "https://2009dhinesh.github.io/Word-Count/",
    tags: ["JS", "String Manipulation"]
  },
  {
    title: "Multiple Pacman",
    description: "Advanced PacMan simulation with multiple characters and random movements.",
    github: "https://github.com/2009Dhinesh/multi-pacman",
    demo: "https://2009dhinesh.github.io/multi-pacman/",
    tags: ["JS", "Simulation"]
  }
];
export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "RVS College Of Arts And Science",
    year: "2024 - 2026",
    score: "Pursuing"
  },
  {
    degree: "B.Sc Computer Science",
    school: "SVST Kongunad Arts And Science College",
    year: "2021 - 2024",
    score: "79%"
  }
];
export const experiences = [
  {
    company: "Earestminds",
    role: "React Developer (probation period)",
    duration: "Jan 2026 - Present",
    desc: [
      "Specializing in Shopify theme development and storefront customization.",
      "Optimizing web performance and user experience for e-commerce platforms.",
      "Developing responsive and high-converting Shopify designs."
    ]
  },
  {
    company: "Flareminds",
    role: "MERN Stack Developer (Intern)",
    duration: "Aug 2025 - Dec 2025",
    desc: [
      "Developed the backend for the 'Righttount' system ensuring robust data handling.",
      "Implemented the frontend for the 'Fabric Process Management System' with a focus on real-time control.",
      "Collaborated with the team to integrate full-stack features using MongoDB, Express, React, and Node.js."
    ]
  }
];
