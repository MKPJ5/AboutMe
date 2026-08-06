import Url from "../assets/images/Chosen2.png";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import JourneyItem from "../components/ui/JourneyItem";
import SkillCard from "../components/ui/SkillCard";
import CardsInfo from "../components/ui/SkillCardInfo";
import { useState } from "react";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Card animation variants with staggered timing
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Container variants for the staggered effect

const Home = () => {
  const [isExpended, setIsExpended] = useState<boolean>(false);

  const visableCards = isExpended ? CardsInfo : CardsInfo.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#343434] font-sans text-white selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-primary shadow-primary/20 mb-6 h-32 w-32 overflow-hidden rounded-full border-4 shadow-lg"
        >
          <img src={Url} alt="MKPJ" className="h-full w-full object-cover" />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-3 font-serif text-4xl font-bold md:text-5xl"
        >
          Hi, I'm MKPJ.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-lg text-lg text-gray-400"
        >
          Front-End Developer. Building <span className="text-primary"> Responsive </span>,
          performant web experiences.
        </motion.p>
      </section>

      {/* --- MY JOURNEY SECTION --- */}
      <section id="journey" className="mx-auto max-w-4xl px-6 py-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold"
        >
          My <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="relative ml-4 space-y-12 border-l-2 border-gray-700 md:ml-8">
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
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold"
        >
          My <span className="text-primary">Toolbox</span>
        </motion.h2>

        <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visableCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                custom={index}
                // This transition adds the stagger effect
                transition={{
                  delay: index * 0.1, // Delay based on index
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                <SkillCard
                  title={card.title}
                  icon={card.icon}
                  description={card.description}
                  delay={card.delay}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => setIsExpended(!isExpended)}
            className="group relative flex items-center gap-2 rounded-lg bg-[#444] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#555]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpended ? (
              <>
                Show Less
                <motion.svg
                  animate={{ rotate: 0 }}
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </motion.svg>
              </>
            ) : (
              <>
                Show More
                <motion.svg
                  animate={{ rotate: 0 }}
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </>
            )}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
