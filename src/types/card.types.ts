import { LucideIcon } from "lucide-react";

export default interface CardProp {
  title: string;
  icon: LucideIcon | string;
  description: string;
  delay: number;
}
