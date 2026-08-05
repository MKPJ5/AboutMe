import Url from "../assets/images/Chosen2.png";
import { motion, type Variants } from "framer-motion";
import JourneyItem from "../components/ui/JourneyItem";
import SkillCard from "../components/ui/SkillCard";
import CardsInfo from "../components/ui/SkillCardInfo";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#343434] font-sans text-white selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-primary shadow-primary/20 mb-6 h-32 w-32 overflow-hidden rounded-full border-4 shadow-lg"
        >
          <img src={Url} alt="MKPJ" className="h-full w-full object-cover" />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-3 font-serif text-4xl font-bold md:text-5xl"
        >
          Hi, I'm MKPJ.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-lg text-lg text-gray-400"
        >
          Front-End Developer. Building <span className="text-primary"> Responsive </span>,
          performant web experiences.
        </motion.p>
      </section>

      {/* --- MY JOURNEY SECTION --- */}
      <section id="journey" className="mx-auto max-w-4xl px-6 py-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold"
        >
          My <span className="text-primary">Journey</span>
        </motion.h2>

        <div className="relative ml-4 space-y-12 border-l-2 border-gray-700 md:ml-8">
          {/* Timeline Item 1 */}
          <JourneyItem
            title="Mechanical Engineering in High School"
            date="2020 - 2023"
            description="Spent 3 years diving deep into mechanical systems. Learned discipline, project management, and how complex systems work together."
          />

          {/* Timeline Item 2 */}
          <JourneyItem
            title="The Transition to Code"
            date="2023 - 2024"
            description="Fell in love with logic and problem solving. Started learning
              JavaScript, TypeScript, and the React ecosystem."
          />

          {/* Timeline Item 3 */}
          <JourneyItem
            title="Deep Learning"
            date="2024 - 2025"
            description="Focused on libraries and new technologies to stay updated."
          />

          {/* Timeline Item 4 */}
          <JourneyItem
            title="Preparing"
            date="Present Day"
            description="Building projects to demonstrate my skills and getting ready to enter the job market."
          />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-3xl font-bold"
        >
          My <span className="text-primary">Toolbox</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CardsInfo.map((card) => (
            <SkillCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        ></motion.div>
      </section>
    </div>
  );
};

export default Home;
