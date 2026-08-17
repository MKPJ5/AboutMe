import { motion } from "framer-motion";
import type CardProp from "@/types/card.types";
import "./Card.css";

const Card = ({ title, icon, description, delay }: CardProp) => {
  return (
    <motion.div transition={{ delay: delay }} className="card">
      <h3 className="title">{title}</h3>
      <div className="iconWrapper">
        <img src={icon} alt={title} className="icon" />
      </div>
      <p className="description">{description}</p>
    </motion.div>
  );
};

export default Card;
