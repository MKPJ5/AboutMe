import { SoftSkillType } from "@/types/softSkill.types";
import { Dumbbell, Mountain, Users, Zap, HeartHandshake } from "lucide-react";

const SoftSkillsInfo: SoftSkillType[] = [
  {
    icon: Dumbbell,
    title: "Hardworking",
    description: "I follow the 10X rule — ordinary results don't satisfy me.",
    delay: 0.1,
    moreDetails: "we will add this part at near future",
  },
  {
    icon: Mountain,
    title: "Resilient",
    description: "Living in Iran taught me to always find a solution and survive.",
    delay: 0.2,
    moreDetails: "we will add this part at near future",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: " I believe great things are built by teams, not one person.",
    delay: 0.3,
    moreDetails: "we will add this part at near future",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "I can learn any library or tool the project needs.",
    delay: 0.4,
    moreDetails: "we will add this part at near future",
  },
  {
    icon: HeartHandshake,
    title: "Conscientious",
    description: " I treat every project like it's my own.",
    delay: 0.5,
    moreDetails: "we will add this part at near future",
  },
];

export default SoftSkillsInfo;
