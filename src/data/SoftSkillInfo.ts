import CardProp from "@/types/card.types";
import { Dumbbell, Mountain, Users, Zap, HeartHandshake } from "lucide-react";

const SoftSkillsInfo: CardProp[] = [
  {
    icon: Dumbbell,
    title: "Hardworking",
    description: "I follow the 10X rule — ordinary results don't satisfy me.",
    delay: 0.1,
  },
  {
    icon: Mountain,
    title: "Resilient",
    description: "Living in Iran taught me to always find a solution and survive.",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Teamwork",
    description: " I believe great things are built by teams, not one person.",
    delay: 0.3,
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "I can learn any library or tool the project needs.",
    delay: 0.4,
  },
  {
    icon: HeartHandshake,
    title: "Conscientious",
    description: " I treat every project like it's my own.",
    delay: 0.5,
  },
];

export default SoftSkillsInfo;
