export type AssetImage = {
  src: string;
  alt: string;
};

export type ProductItem = {
  img: AssetImage;
  title: string;
  description: string;
  price: string;
};

export type ReviewItem = {
  img: AssetImage;
  name: string;
  star: number;
  message: string;
};

export type NavItem = {
  name: string;
  href: string;
  img: AssetImage | false;
};

