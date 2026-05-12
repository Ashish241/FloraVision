import { CarolReviewImage, LulaReviewImage, ShellyReviewImage } from "@/assets";
import type { ReviewItem } from "@/types/data";

export const reviews: ReviewItem[] = [
  {
    img: {
      src: ShellyReviewImage,
      alt: "shelly",
    },
    name: "Shelly Russel",
    star: 4.5,
    message: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    img: {
      src: LulaReviewImage,
      alt: "lula",
    },
    name: "Lula Rolfson",
    star: 4.5,
    message:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    img: {
      src: CarolReviewImage,
      alt: "carol",
    },
    name: "Carol Huels",
    star: 4.5,
    message:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

