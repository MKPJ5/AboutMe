import { LucideIcon } from "lucide-react";
import { CardType } from "./card.types";

interface SoftSkillType extends CardType {
  icon: LucideIcon;
  moreDetails: string;
}

export type { SoftSkillType };
