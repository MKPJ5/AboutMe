import Url from "@/assets/images/Chosen2.png";
import { motion, type Variants } from "framer-motion";
import JourneyItem from "../components/ui/JourneyItem/JourneyItem";
import SoftSkillsInfo from "@/data/SoftSkillInfo";
import CardsInfo from "@/data/SkillCardInfo";
import SkillsSection from "../components/ui/SkillSection/SkillSection";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="min-h-screen font-sans text-[#44403C] selection:bg-[#FDE68A] selection:text-[#92400E]">
      {/* --- HERO SECTION --- */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[#D97706] shadow-lg shadow-[#D97706]/20"
        >
          <img src={Url} alt="MKPJ" className="h-full w-full object-cover" />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-3 font-serif text-4xl font-bold text-[#92400E] md:text-5xl"
        >
          Hi, I'm MKPJ.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-lg text-lg text-[#78716C]"
        >
          Front-End Developer. Building{" "}
          <span className="font-semibold text-[#D97706]"> Responsive </span>, performant web
          experiences.
        </motion.p>
      </section>

      {/* --- MY JOURNEY SECTION --- */}
      <section id="journey" className="mx-auto max-w-4xl px-6 py-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold text-[#92400E]"
        >
          My <span className="text-[#D97706]">Journey</span>
        </motion.h2>

        <div className="relative ml-4 space-y-12 border-l-2 border-[#FDE68A] md:ml-8">
          <JourneyItem
            title="Mechanical Engineering in High School"
            date="2020 - 2023"
            description="Spent 3 years diving deep into mechanical systems. Learned discipline, project management, and how complex systems work together."
          />
          <JourneyItem
            title="The Transition to Code"
            date="2023 - 2024"
            description="Fell in love with logic and problem solving. Started learning
              JavaScript, TypeScript, and the React ecosystem."
          />
          <JourneyItem
            title="Deep Learning"
            date="2024 - 2025"
            description="Focused on libraries and new technologies to stay updated."
          />
          <JourneyItem
            title="Preparing"
            date="Present Day"
            description="Building projects to demonstrate my skills and getting ready to enter the job market."
          />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <SkillsSection title="Coding" highlightedWord="Skills" skills={CardsInfo} initialCount={4} />

      <div>
        {/* Top Ornament */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
          <span className="text-2xl text-[#D97706]">✦</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
        </div>

        <p className="text-center font-serif text-xl text-[#A8A29E] italic md:text-2xl">
          &ldquo;Code gets the job done. Character gets you the job.&rdquo;
        </p>

        {/* Bottom Ornament */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
          <span className="text-2xl text-[#D97706]">✦</span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#FDE68A] to-transparent"></div>
        </div>
      </div>
      <SkillsSection
        title="Soft"
        highlightedWord="Skills"
        skills={SoftSkillsInfo}
        initialCount={4}
      />
    </div>
  );
};

export default Home;
