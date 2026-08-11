import Url from "../assets/images/Chosen2.png";
import { motion, type Variants, AnimatePresence, useAnimationControls } from "framer-motion";
import JourneyItem from "../components/ui/JourneyItem";
import SkillCard, { type SkillCardProp } from "../components/ui/SkillCard";
import CardsInfo from "../components/ui/SkillCardInfo";
import { useState } from "react";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom: { enterDelay: number }) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, delay: custom.enterDelay },
  }),
  exit: (custom: { exitDelay: number }) => ({
    y: -500,
    opacity: 0,
    transition: { duration: 0.09, delay: custom.exitDelay },
  }),
};

const Home = () => {
  const [cards, setCards] = useState<SkillCardProp[]>([]);
  const [isExpended, setIsExpended] = useState<boolean>(false);
  const buttonAnimate = useAnimationControls();

  const buttonAnimationControl = async () => {
    await buttonAnimate.start({
      backgroundColor: "green",
      scale: 1.5,
      transition: { duration: 1 },
    });

    if (isExpended === true) {
      await buttonAnimate.start({
        backgroundColor: "red",
        scale: 1,
        transition: { duration: 1 },
      });
    }
  };

  function cardsSetter() {
    if (cards?.length) {
      setIsExpended(false);
      setCards([]);
    } else {
      const selectedCards = CardsInfo.slice(2);
      setCards(selectedCards);
      setIsExpended(true);
    }
    console.log(cards);
  }

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
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold text-[#92400E]"
        >
          My <span className="text-[#D97706]">Toolbox</span>
        </motion.h2>

        <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CardsInfo.slice(0, 3).map((card) => (
            <motion.div
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={{ enterDelay: card.delay }}
              key={card.title}
            >
              <SkillCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={card.delay}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {cards?.map((card, index) => (
              <motion.div
                variants={cardVariants}
                key={card.title}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={{
                  enterDelay: card.delay - 0.3,
                  exitDelay: (cards.length - 1 - index) * 0.03,
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
            layout
            onClick={() => cardsSetter()}
            className="group relative flex items-center gap-2 rounded-lg bg-[#D97706] px-6 py-3 font-semibold text-white shadow-md shadow-[#D97706]/25 transition-colors duration-300 hover:scale-3d hover:scale-[1.05] hover:bg-[#B45309] active:scale-95"
          >
            {isExpended ? (
              <>
                Show Less
                <motion.svg
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
