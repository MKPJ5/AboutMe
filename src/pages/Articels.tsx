import { motion, type Variants } from "framer-motion";
import ArticleCard from "@/components/ui/ArticleCard/ArticleCard";
import SingleOrnament from "@/components/ui/Ornaments/SingleOrnament";
import ArticlesInfo from "@/data/Articles/ArticlesInfo";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Articles = () => {
  return (
    <div className="selection:text-primary min-h-screen font-sans text-[#44403C] selection:bg-[#FDE68A]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <h1 className="text-primary mb-4 font-serif text-4xl font-bold md:text-5xl">
            My <span className="text-secondary">Articles</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#78716C]">
            Thoughts, tutorials, and insights about web development, self-improvment, and my journey
            as a developer.
          </p>

          {/* Decorative divider */}
          <SingleOrnament />
        </motion.div>

        {/* Articles Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {ArticlesInfo.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
