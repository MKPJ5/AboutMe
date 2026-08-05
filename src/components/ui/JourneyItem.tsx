import { motion } from "framer-motion";

interface JourneyProp {
  title: string;
  date: string;
  description: string;
}

const JourneyItem = ({ title, date, description }: JourneyProp) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8"
    >
      <div className="bg-primary absolute top-1 -left-8.25 h-4 w-4 rounded-full border-4 border-[#1a1a1a]"></div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-primary mb-2 text-sm">{date}</p>
      <p className="leading-relaxed text-gray-400">{description}</p>
    </motion.div>
  );
};

export default JourneyItem;
