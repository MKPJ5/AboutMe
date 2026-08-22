import Url from "@/assets/images/Chosen2.png";
import { motion, type Variants } from "framer-motion";
import JourneyItem from "@/components/ui/JourneyItem/JourneyItem";
import SoftSkillsInfo from "@/data/SoftSkills/SoftSkillInfo";
import CardsInfo from "@/data/CodingSkills/CodingSkillInfo";
import SkillsSection from "@/components/ui/SkillSection/SkillSection";
import SkillDetailWindow from "@/components/ui/SkillDetailWindow/SkillDetailWindow";
import { useState } from "react";
import Ornament from "@/components/ui/Ornament/Ornament";
import { SoftSkillType } from "@/types/SoftSkillTypes/softSkill.types";
import { JourneyItemInfo } from "@/data/JourneyItems/JourneyItemsInfo";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<SoftSkillType>(SoftSkillsInfo[0]);
  const [isFocused, setIsFocused] = useState<number>(0.1);

  function handleCardSelect(card: SoftSkillType) {
    setSelectedCard(card);
    setIsFocused(card.delay);
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
          {JourneyItemInfo.map((item) => (
            <JourneyItem
              key={item.title}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <SkillsSection title="Coding" highlightedWord="Skills" skills={CardsInfo} initialCount={4} />

      <Ornament quote="Code gets the job done. Character gets you the job" />

      <SkillsSection
        title="Soft"
        highlightedWord="Skills"
        skills={SoftSkillsInfo}
        initialCount={4}
        onCardSelected={(card) => handleCardSelect(card)}
        onFocusId={isFocused}
      />
      <SkillDetailWindow selectedCard={selectedCard} />
    </div>
  );
};

export default Home;
