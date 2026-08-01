import { motion , type Variants } from 'framer-motion'

export interface SkillCardProp {
  title: string
  icon: string
  description: string
  delay: number
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const SkillCard = ({ title, icon, description, delay }: SkillCardProp) => {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: delay }}
      whileHover={{
        y: -8,
        boxShadow: '0 10px 30px -10px rgba(217, 119, 6, 0.3)',
      }}
      className="group flex cursor-default flex-col items-center rounded-2xl bg-white p-8 text-center"
    >
      <h3 className="mb-4 text-xl font-bold text-gray-900">{title}</h3>
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <img src={icon} alt={title} className="h-full w-full object-contain" />
      </div>
      <p className="text-sm font-medium text-gray-600 underline">{description}</p>
      <button onClick={()=>console.log('im working')}>Chaneg my color</button>
    </motion.div>
  )
}

export default SkillCard
