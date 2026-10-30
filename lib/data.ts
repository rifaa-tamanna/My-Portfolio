import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

export interface Project {
  name: string;
  type: string;
  url: string;
  hue: string;
  image: string;
  description?: string;
}

export const profile = {
  name: "Rifa Tamanna",
  role: "Full Stack Web Developer",
  roles: [
    "Full Stack Web Developer",
    "React & Next.js Developer",
    "Node.js & MongoDB Builder",
    "TypeScript Enthusiast",
  ],
  email: "rifa.tamanna8853@gmail.com",
  linkedin: "https://www.linkedin.com/in/rifaa-tamanna/",
  github: "https://github.com/rifaa-tamanna",
  intro:
    "I build fast, accessible and well-structured web apps, from the database to the interface.",
  about:
    "I'm a full stack developer who enjoys turning ideas into complete products. I work across the MERN stack with TypeScript and Next.js, and I care about clean code, smooth interfaces and details that make an app feel finished.",
  photo: "/profile.png",
};

export const services = [
  {
    title: "Frontend Development",
    text: "Responsive, accessible interfaces with React, Next.js and Tailwind CSS.",
  },
  {
    title: "Backend & APIs",
    text: "REST APIs and server logic with Node.js and Express.js.",
  },
  {
    title: "Database Design",
    text: "Data modeling and queries with MongoDB.",
  },
  {
    title: "Full Stack Apps",
    text: "End to end products, from idea to deployment.",
  },
];

export const tech: { name: string; Icon: IconType; color: string }[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
];

export const projects: Project[] = [
  {
    name: "Bazar Dor",
    type: "Full stack web app",
    url: "https://bazar-dor-project-sand.vercel.app",
    hue: "from-violet-600/40 to-fuchsia-500/20",
    image: "/projects/bazar-dor-project.png",
  },
  {
    name: "Fit Log",
    type: "Web application",
    url: "https://fit-log-a6-gsou.vercel.app/",
    hue: "from-indigo-600/40 to-cyan-500/20",
    image: "/projects/fitlog-project.png",
  },
  {
    name: "Book Vibe",
    type: "Web application",
    url: "https://book-vibe-project-three.vercel.app/",
    hue: "from-purple-600/40 to-pink-500/20",
    image: "/projects/book-vibe-project.png",
  },
  {
    name: "Dev Stack Tech",
    type: "Web application",
    url: "https://dev-stack-tech-project.netlify.app/",
    hue: "from-fuchsia-600/40 to-indigo-500/20",
    image: "/projects/devStack-project.png",
  },
];

export const process = [
  {
    title: "Understand",
    text: "Clarify goals, users and scope before writing code.",
  },
  { title: "Design", text: "Plan the data, the API and the screens together." },
  {
    title: "Build",
    text: "Write typed, readable code with reusable components.",
  },
  { title: "Ship", text: "Test, deploy and improve from feedback." },
];