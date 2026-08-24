import { ContactCardType } from "@/types/ContactTypes/contact.types";
import Telegram from "@/assets/images/Logos/telegram-1024px.png";
import Medium from "@/assets/images/Logos/medium-1024px.png";
import Gmail from "@/assets/images/Logos/Gmail_Logo_512px.png";
import Whatsapp from "@/assets/images/Logos/whatsapp-1024px.png";
import Linkedin from "@/assets/images/Logos/linkedin-1024px.png";
import Github from "@/assets/images/Logos/github-light-1024px.png";

const ContactMeCardsInfo: ContactCardType[] = [
  {
    icon: Telegram,
    title: "Telegram",
    description: "Fastest way to reach me",
    link: "https://t.me/MichaelKpj",
    color: "hover:bg-[#0088cc]",
    label: "@yourusername",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Professional network",
    link: "https://www.linkedin.com/in/mkpj",
    color: "hover:bg-[#0A66C2]",
    label: "Connect with me",
  },
  {
    icon: Medium,
    title: "Medium",
    description: "Read my articles",
    link: "https://medium.com/@MKPJ",
    color: "hover:bg-[#000000]",
    label: "Follow my work",
  },
  {
    icon: Whatsapp,
    title: "WhatsApp",
    description: "Direct message",
    link: "https://wa.me/09054613537",
    color: "hover:bg-[#25D366]",
    label: "Chat with me",
  },
  {
    icon: Gmail,
    title: "Email",
    description: "Formal inquiries",
    link: "mailto:bmkpj5@gmail.com",
    color: "hover:bg-[#D97706]",
    label: "Send an email",
  },
  {
    icon: Github,
    title: "Github",
    description: "Code sources",
    link: "https://github.com/MKPJ5",
    color: "hover:bg-[#282725]",
    label: "Check out code sources",
  },
];

export { ContactMeCardsInfo };
