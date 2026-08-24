import JourneyItem from "@/components/ui/JourneyItem/JourneyItem";
import SingleOrnament from "@/components/ui/Ornaments/SingleOrnament";
import { ContactMeCardsInfo } from "@/data/Contact/ContactMeInfo";
import { DayRoutine } from "@/data/DayRoutin/DayRoutineInfo";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Contact = () => {
  return (
    <div className="selection:text-primary min-h-screen font-sans text-[#44403C] selection:bg-[#FDE68A]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-primary mb-4 font-serif text-4xl font-bold md:text-5xl">
            Let's <span className="text-secondary">Connect</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#78716C]">
            Have a project in mind? Looking for a developer? Or just want to say hi? I'd love to
            hear from you!
          </p>

          {/* Decorative divider */}
          <SingleOrnament />
        </motion.div>

        {/* Why Work With Me Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-primary mb-4 font-serif text-3xl font-bold">
              Why <span className="text-secondary">Work With Me</span>
            </h2>
            <p className="text-[#78716C]">
              I'm not saying I'm competing. I'm saying I live and grind on a different level.
            </p>

            <p className="text-[#78716C]">You ask how?</p>

            <p className="text-[#78716C]">Let my daily routine answer that.</p>
          </motion.div>

          <div className="relative ml-4 space-y-12 border-l-2 border-[#FDE68A] md:ml-8">
            {DayRoutine.map((item) => (
              <JourneyItem
                key={item.title}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Contact Methods Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-primary mb-4 font-serif text-3xl font-bold">
              Get in <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-[#78716C]">Choose the platform that works best for you</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ContactMeCardsInfo.map((method) => (
              <motion.div
                key={method.title}
                variants={fadeInUp}
                viewport={{
                  once: true,
                  amount: 0.7,
                  margin: "0px 0px -100px 0px",
                }}
              >
                <motion.a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-2xl border border-[#FDE68A] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${method.color}`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#FEF3C7] transition-colors group-hover:bg-white/20">
                    <img
                      className="text-secondary h-7 w-7 transition-colors group-hover:text-white"
                      src={method.icon}
                      alt={method.label}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-primary font-semibold transition-colors group-hover:text-white">
                      {method.title}
                    </h3>
                    <p className="text-sm text-[#A8A29E] transition-colors group-hover:text-white/80">
                      {method.description}
                    </p>
                    <p className="text-secondary mt-1 text-xs font-medium transition-colors group-hover:text-white">
                      {method.label}
                    </p>
                  </div>
                  <ArrowRight className="text-secondary h-5 w-5 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <CheckCircle2 className="text-secondary mx-auto mb-4 h-8 w-8" />
          <p className="text-sm text-[#A8A29E]">I typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
