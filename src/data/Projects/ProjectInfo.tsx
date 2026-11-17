import { ProjectType } from "@/types/ProjectTypes/project.types";
export const ProjectsInfo: ProjectType[] = [
  {
    id: 1,
    title: "Todo SPA",
    description: "A simple Todo Application with feature of saving tasks in local storage.",
    githubUrl: "https://github.com/MKPJ5/Todo-App",
    techStack: ["React", "TypeScript", "Zod", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Weather SPA",
    description:
      "A web application which can get current weather of  any city user searchs, with feature of caching the data for a while",
    githubUrl: "https://github.com/MKPJ5/Weather-App",
    techStack: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Tanstack Query",
      "Framer-Motion",
    ],
  },
  {
    id: 3,
    title: "Todo SPA",
    description:
      "A personal finance app that helps users track their expenses, filter them by category and date, and see where their money is going through interactive charts. It handles user accounts securely so each person's data stays private, and updates instantly as users add or edit expenses.",
    githubUrl: "https://github.com/MKPJ5/Todo-App",
    vercelUrl: "https://ecommerce.vercel.app",
    techStack: [
      "React",
      "TypeScript",
      "Zod",
      "Rechart",
      "React Router",
      "Tailwind CSS",
      "Zustand",
      "Tanstack Query",
      "Framer-Motion",
    ],
  },
];
