import { motion, type Variants } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import { ProjectsInfo } from "@/data/Projects/ProjectInfo";
import SingleOrnament from "@/components/ui/Ornaments/SingleOrnament";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen font-sans text-[#44403C] selection:bg-[#FDE68A] selection:text-[#92400E]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <h1 className="mb-4 font-serif text-4xl font-bold text-[#92400E] md:text-5xl">
            My <span className="text-[#D97706]">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#78716C]">
            A collection of projects I've built to learn, experiment, and solve real-world problems.
          </p>

          <SingleOrnament />
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectsInfo.map((proj, index) => (
            <ProjectCard project={proj} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
