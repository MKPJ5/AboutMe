import { motion } from "framer-motion";
import { ReactNode, SVGProps } from "react";
const Button = ({
  innerHtml,
  clickHandler,
}: {
  innerHtml: ReactNode | string;
  clickHandler?: () => void;
}) => {
  return (
    <motion.button
      onClick={() => clickHandler?.()}
      className="group relative flex items-center gap-2 rounded-lg bg-[#D97706] px-6 py-3 font-semibold text-white shadow-md shadow-[#D97706]/25 transition-colors duration-300 hover:scale-3d hover:scale-[1.05] hover:bg-[#B45309] active:scale-95"
    >
      {innerHtml}
    </motion.button>
  );
};

export default Button;
