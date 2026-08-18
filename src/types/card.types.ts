import { LucideIcon } from "lucide-react";

interface CardType {
  title: string;
  icon: LucideIcon | string;
  description: string;
  delay: number;
}

interface CardProp extends CardType {
  card?: CardProp;
  onCardSelected?: (card: any) => void;
}

export type { CardProp, CardType };
