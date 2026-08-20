import { SoftSkillType } from "@/types/softSkill.types";
import { Dumbbell, Mountain, Users, Zap, HeartHandshake } from "lucide-react";

const SoftSkillsInfo: SoftSkillType[] = [
  {
    icon: Dumbbell,
    title: "Hardworking",
    description: "I follow the 10X rule — ordinary results don't satisfy me.",
    delay: 0.1,
    moreDetails:
      "If you've read the 10X Rule by Grant Cardone, you know I'm not satisfied with ordinary results — I'm always grinding for a better version of myself.",
  },
  {
    icon: Mountain,
    title: "Resilient",
    description: "Living in Iran taught me to always find a solution and survive.",
    delay: 0.2,
    moreDetails:
      "Because of where I live, I'm hard to break. The situation in Iran is messy enough, and growing up in a middle-class family makes it even harder. But that's exactly what builds a resilient person.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: " I believe great things are built by teams, not one person.",
    delay: 0.3,
    moreDetails:
      "I really enjoy working with a team. I write my code clean and readable so it's easy to review and collaborate on.",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    description: "I can learn any library or tool the project needs.",
    delay: 0.4,
    moreDetails:
      "After two years of learning front-end development, I can pick up whatever a project needs — within a reasonable time. So if you don't see a certain library on my resume, don't worry. Just trust your developer.",
  },
  {
    icon: HeartHandshake,
    title: "Conscientious",
    description: " I treat every project like it's my own.",
    delay: 0.5,
    moreDetails:
      "I take every project seriously. On paper, it may look like I'm working for you — but if you watch how I grind to make things better, you'll think it's my own personal project.",
  },
];

export default SoftSkillsInfo;
