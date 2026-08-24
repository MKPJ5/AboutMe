import { motion, AnimatePresence, type Variants } from "framer-motion";
import { SoftSkillType } from "@/types/SoftSkillTypes/softSkill.types";

interface SkillDetailWindowProps {
  selectedCard: SoftSkillType | null;
}

const detailVariants: Variants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const detailItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const SkillDetailWindow = ({ selectedCard }: SkillDetailWindowProps) => {
  return (
    <AnimatePresence>
      {selectedCard && (
        <motion.div
          variants={detailVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mx-auto mb-8 max-w-6xl px-6"
        >
          <div className="overflow-hidden rounded-2xl border border-[#FDE68A] bg-[#ffffff] shadow-lg">
            {/* Header */}
            <motion.div
              variants={detailItemVariants}
              className="flex items-start justify-between border-b border-[#FDE68A] px-8 py-6"
            >
              <div className="flex items-center gap-4">
                {<selectedCard.icon />}
                <div>
                  <h3 className="text-primary text-xl font-bold">{selectedCard.title}</h3>
                  <p className="text-secondary text-sm font-medium">{selectedCard.description}</p>
                </div>
              </div>
            </motion.div>
            {/* Content */}
            <div className="px-8 py-6">
              <motion.p variants={detailItemVariants} className="leading-relaxed text-[#78716C]">
                {selectedCard.moreDetails}
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillDetailWindow;
