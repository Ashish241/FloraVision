import {
  AgavePlantImage,
  CactusPlantImage,
  PlantainImage,
  PlantAnglonemaImage,
  SansevieriaPlantImage,
  SwissPlantImage,
} from "@/assets";
import type { ProductItem } from "@/types/data";

export const plants: ProductItem[] = [
  {
    img: {
      src: PlantAnglonemaImage,
      alt: "Aglaonema plant",
    },
    title: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
  },
  {
    img: {
      src: PlantainImage,
      alt: "Plantain Lilies",
    },
    title: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs. 380/-",
  },
  {
    img: {
      src: CactusPlantImage,
      alt: "Cactus",
    },
    title: "Cactus",
    description: "It is known for their ability to thrive in arid environments",
    price: "Rs. 259/-",
  },
  {
    img: {
      src: SwissPlantImage,
      alt: "Swiss cheese Plant",
    },
    title: "Swiss cheese Plant",
    description: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs. 400/-",
  },
  {
    img: {
      src: SansevieriaPlantImage,
      alt: "Sansevieria plant",
    },
    title: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs. 450/-",
  },
  {
    img: {
      src: AgavePlantImage,
      alt: "Agave plant",
    },
    title: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs. 359/-",
  },
];

