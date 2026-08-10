import { motion, type Variants } from "framer-motion";

export interface SkillCardProp {
  title: string;
  icon: string;
  description: string;
  delay: number;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const SkillCard = ({ title, icon, description, delay }: SkillCardProp) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: delay }}
      whileHover={{
        y: -8,
        boxShadow: "0 10px 30px -10px rgba(217, 119, 6, 0.4)",
      }}
      className="group flex cursor-default flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-[#FDE68A]/50 transition-shadow duration-300 hover:ring-[#D97706]/30"
    >
      <h3 className="mb-4 text-xl font-bold text-[#92400E]">{title}</h3>
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <img src={icon} alt={title} className="h-full w-full object-contain" />
      </div>
      <p className="text-sm leading-relaxed text-[#78716C]">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
