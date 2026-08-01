import {motion} from "framer-motion"


interface JourneyProp {
    title:string;
    date:string;
    description:string;
}

const JourneyItem = ({title,date,description}:JourneyProp) => {
    return ( 
          <motion.div 
            
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <div className="absolute -left-8.25 top-1 w-4 h-4 bg-primary rounded-full border-4 border-[#1a1a1a]"></div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-primary mb-2">{date}</p>
            <p className="text-gray-400 leading-relaxed">
             {description}
            </p>
          </motion.div>

     );
}
 
export default JourneyItem;