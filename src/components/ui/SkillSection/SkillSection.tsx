// components/ui/SkillsSection.tsx
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Card from "../Card/Card";
import CardProp from "@/types/card.types";
import { useState } from "react";

interface SkillsSectionProps {
  title: string;
  highlightedWord: string;
  skills: CardProp[];
  initialCount?: number; // How many cards to show initially
}

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
    y: -200,
    opacity: 0,
    transition: { duration: 0.15, delay: custom.exitDelay },
  }),
};

const SkillsSection = ({
  title,
  highlightedWord,
  skills,
  initialCount = 3,
}: SkillsSectionProps) => {
  const [visibleCards, setVisibleCards] = useState<CardProp[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const initialSkills = skills.slice(0, initialCount);
  const remainingSkills = skills.slice(initialCount);

  function toggleCards() {
    if (visibleCards?.length) {
      setIsExpanded(false);
      setVisibleCards([]);
    } else {
      setVisibleCards(remainingSkills);
      setIsExpanded(true);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }}
        viewport={{
          once: true,
          amount: 0.7,
          margin: "0px 0px -100px 0px",
        }}
        className="mb-12 text-center font-serif text-3xl font-bold text-[#92400E]"
      >
        {title} <span className="text-[#D97706]">{highlightedWord}</span>
      </motion.h2>

      <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {initialSkills.map((card) => (
          <motion.div
            layout
            viewport={{
              once: true,
              amount: 0.3,
              margin: "0px 0px -100px 0px",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={{ enterDelay: card.delay }}
            key={card.title}
          >
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {visibleCards.length > 0 && (
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {visibleCards.map((card, index) => (
              <motion.div
                layout
                variants={cardVariants}
                key={card.title}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={{
                  enterDelay: card.delay - 0.3,
                  exitDelay: index * 0.05,
                }}
              >
                <Card
                  title={card.title}
                  icon={card.icon}
                  description={card.description}
                  delay={card.delay}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show More/Less Button - only if there are more skills to show */}
      {remainingSkills.length > 0 && (
        <motion.div layout className="mt-8 flex justify-center">
          <motion.button
            onClick={toggleCards}
            className="group relative flex items-center gap-2 rounded-lg bg-[#D97706] px-6 py-3 font-semibold text-white shadow-md shadow-[#D97706]/25 transition-colors duration-300 hover:scale-3d hover:scale-[1.05] hover:bg-[#B45309] active:scale-95"
          >
            {isExpanded ? (
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
        </motion.div>
      )}
    </section>
  );
};

export default SkillsSection;
