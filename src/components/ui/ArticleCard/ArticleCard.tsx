import { motion, Variants } from "framer-motion";
import LinkedIn from "@/assets/images/Logos/linkedin-1024px.png";
import Medium from "@/assets/images/Logos/medium-1024px.png";
import type { ArticleType } from "@/types/ArticleTypes/article.types";
import "./ArticleCard.css";

const articleCardVariants: Variants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, delay: custom },
  }),
};

interface ArticleCardProps {
  article: ArticleType;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <motion.article
      variants={articleCardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index * 0.1}
      className="article"
    >
      <div className="imgDiv">
        <img src={article.image} alt={article.title} className="titleImg" />
        {/* Decorative linbg-linear overlay */}
        <div className="decorativeLine" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="artTitle">{article.title}</h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-[#78716C]">{article.description}</p>

        {/* Divider */}
        <div className="divider" />

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-[#A8A29E]">Read this article in:</span>

          <div className="flex items-center gap-3">
            {article.linkedinUrl && (
              <motion.a
                href={article.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="LinkedInLink"
                aria-label="Read on LinkedIn"
              >
                <img className="h-5 w-5" src={LinkedIn} alt="LinkedIn logo" />
              </motion.a>
            )}

            {article.mediumUrl && (
              <motion.a
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="MediumLink"
                aria-label="Read on Medium"
              >
                <img className="h-5 w-5" src={Medium} alt="LinkedIn logo" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
