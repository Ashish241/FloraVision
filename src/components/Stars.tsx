import { FullStarIcon, HalfStarIcon } from "@/assets";

type StarsProps = {
  star: number;
  size?: number;
  className?: string;
};

const Stars = ({ star, size = 4, className = "" }: StarsProps) => (
  <div className={("flex " + className).trim()}>
    {Array.from({ length: Math.floor(star) }).map((_, i) => (
      <img key={i} src={FullStarIcon} alt="star" className={`size-${size} md:size-${size + 1}`} />
    ))}
    {star - Math.floor(star) >= 0.5 && (
      <img src={HalfStarIcon} alt="star" className={`size-${size} md:size-${size + 1}`} />
    )}
  </div>
);

export default Stars;
