import { dropdownIcon } from "@/assets";
import type { NavItem } from "@/types/data";

export const footerNavigation: Array<Omit<NavItem, "img">> = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Type’s Of plant’s",
    href: "#top-selling-plants",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Privacy",
    href: "#contact",
  },
];

export const headerNavigation: NavItem[] = [
  {
    name: "Home",
    href: "#hero",
    img: false,
  },
  {
    name: "Plants Type",
    href: "#top-selling-plants",
    img: {
      src: dropdownIcon,
      alt: "dropdown",
    },
  },
  {
    name: "More",
    href: "#best-o2",
    img: false,
  },
  {
    name: "Contact",
    href: "#contact",
    img: false,
  },
];

