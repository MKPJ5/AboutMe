import { motion } from "framer-motion";
import GitHub from "@/assets/images/Logos/github-light-1024px.png";
import { ExternalLink, Folder } from "lucide-react";
import type { ProjectType } from "@/types/ProjectTypes/project.types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.article className="group projCard">
        <div className="parentDiv">
          {project.image ? (
            <img src={project.image} alt={project.title} className="image" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Folder className="h-20 w-20 text-[#d97706]/30" />
            </div>
          )}

          <div className="overlay" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="title">{project.title}</h3>

          <p className="mb-6 flex-1 text-sm leading-relaxed text-[#78716C]">
            {project.description}
          </p>

          {/* Tech Stack (optional) */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-medium text-[#92400e]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mb-4 h-px bg-linear-to-r from-transparent via-[#FDE68A] to-transparent" />

          <div className="flex flex-col gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <span className="flex items-center gap-2">
                <img className="h-4 w-4" src={GitHub} alt="Github" />
                Visit code source at GitHub
              </span>
              <span className="text-[#d97706] group-hover:text-gray-600">→</span>
            </a>

            {/* Vercel Button */}
            {project.vercelUrl && (
              <a
                href={project.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vercel"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Visit website
                </span>
                <span>→</span>
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ProjectCard;
