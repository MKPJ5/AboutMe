import MorningDecided from "@/assets/images/Articels/MorningDecided.png";
import Control_Distraction from "@/assets/images/Articels/Control-Distraction.png";
import Brain_Rot from "@/assets/images/Articels/Brain-Rot.jpg";
import Forget_Past from "@/assets/images/Articels/Forget-Past.jpg";
import { ArticleType } from "@/types/ArticleTypes/article.types";

const ArticlesInfo: ArticleType[] = [
  {
    id: 1,
    title: "The Morning You Decided",
    image: MorningDecided,
    description:
      "some mornings, we just can't wake up earlier. Here's why and my solutions, based entirely on real experience and science.",

    linkedinUrl: "https://www.linkedin.com/pulse/morning-you-decided-michael-kpj-oty5e/",
    mediumUrl: "https://medium.com/@MKPJ/the-morning-you-decided-b122d193d8d9",
  },
  {
    id: 2,
    title: "How to Control Distractions",
    image: Control_Distraction,
    description:
      "Distractions have stolen enough of your time—time you can lose but never get back. I've gathered everything that actually works into this article. Not theory. Pure XP.",

    linkedinUrl: "https://www.linkedin.com/pulse/how-control-distractions-michael-kpj-u0jne/",
    mediumUrl:
      "https://medium.com/@MKPJ/how-to-control-distractions-702269df7eed?sharedUserId=MKPJ",
  },
  {
    id: 3,
    title: "A Healthy Brain",
    image: Brain_Rot,
    description:
      "When you attempt to memorize something, it feels like you're trying to shove a new item into an already stuffed bag. Check the bag — most of what's inside is unused, crap, short clips from social media. Do you need them? Hell no.",

    linkedinUrl: "https://www.linkedin.com/pulse/healthy-brain-rot-michael-kpj-l0uye/",
    mediumUrl:
      "https://medium.com/the-sunday-journal/a-healthy-brain-or-a-rot-brain-bb260e410313?sharedUserId=MKPJ",
  },
  {
    id: 4,
    title: "Living in the Present",
    image: Forget_Past,
    description:
      "We're not bots. We think about the past and dream about the future every single day — and that's completely okay. But sometimes, the past we had makes us forget the present. It locks us inside a time that's already gone.",

    linkedinUrl: "https://www.linkedin.com/pulse/living-present-painful-past-michael-kpj-96vee",
    mediumUrl:
      "https://medium.com/the-sunday-journal/living-in-the-present-with-a-painful-past-how-to-let-go-69decdab43c3?sharedUserId=MKPJ",
  },
];

export default ArticlesInfo;
