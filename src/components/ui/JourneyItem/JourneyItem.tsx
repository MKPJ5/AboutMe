import { motion } from "framer-motion";
import { JourneyProp } from "@/types/JourneyItemTypes/JourneyItem.types";

const JourneyItem = ({ title, date, description }: JourneyProp) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
        margin: "0px 0px -50px 0px",
      }}
      className="relative pl-8"
    >
      <div className="absolute top-1 -left-8.25 h-4 w-4 rounded-full border-4 border-[#FFFBEB] bg-[#D97706]"></div>

      <h3 className="text-xl font-bold text-[#92400E]">{title}</h3>

      <p className="mb-2 text-sm font-medium text-[#D97706]">{date}</p>

      <p className="leading-relaxed text-[#78716C]">{description}</p>
    </motion.div>
  );
};

export default JourneyItem;
