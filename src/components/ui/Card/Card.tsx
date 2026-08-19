import { motion } from "framer-motion";
import type { CardProp } from "@/types/card.types";
import "./Card.css";

const Card = ({
  title,
  icon: Icon,
  description,
  delay,
  onCardSelected,
  card,
  onFocusId,
}: CardProp) => {
  const isString = typeof Icon === "string";

  return (
    <motion.div
      transition={{ delay: delay }}
      onClick={() => onCardSelected?.(card)}
      className={` ${onFocusId !== delay ? "card" : "cardActive card"}`}
    >
      <h3 className="title">{title}</h3>
      <div className="iconWrapper">
        {isString ? (
          <img src={Icon} alt={title} className="icon" />
        ) : (
          <Icon className="text-primary h-14 w-14 object-contain" />
        )}
      </div>
      <p className="description">{description}</p>
    </motion.div>
  );
};

export default Card;
