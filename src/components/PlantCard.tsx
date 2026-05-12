import type { ProductItem } from "@/types/data";
import { shopIcon } from "@/assets";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import ClippedCard from "@/components/ClippedCard";

type TrendingPlantCardProps = ProductItem & {
  variant: "trending";
  index: number;
};

type TopSellingPlantCardProps = ProductItem & {
  variant: "topSelling";
};

export type PlantCardProps = TrendingPlantCardProps | TopSellingPlantCardProps;

const PlantCard = (props: PlantCardProps) => {
  if (props.variant === "trending") {
    const { title, img, description, price, index } = props;
    return (
      <GlassCard
        className={`flex w-4/5 flex-col items-center justify-evenly rounded-4xl pb-10 backdrop-blur-2xl md:flex-row lg:pb-0 ${index > 0 && index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} md:rounded-[100px]`}
      >
        <div className="relative h-80 w-80">
          <img
            src={img.src}
            alt={img.alt}
            className="absolute bottom-10 aspect-601/732 w-100 object-cover"
          />
        </div>
        <div className="relative -top-10 flex flex-col gap-2 px-10 md:top-0 lg:max-w-[50%]">
          <h3 className="trend-card-heading-shadow text-xl font-semibold">{title}</h3>
          <p className="text-xs font-semibold">{description}</p>
          <p className="trend-card-price text-xl font-semibold">{price}</p>
          <div className="flex items-center gap-4">
            <Button className="px-10">Explore</Button>
            <Button>
              <img src={shopIcon} alt="shop" className="size-6" />
            </Button>
          </div>
        </div>
      </GlassCard>
    );
  }

  const { img, description, price, title } = props;

  return (
    <div className="relative">
      <img
        src={img.src}
        alt={img.alt}
        className="absolute bottom-1/2 left-1/2 z-1 size-70 -translate-x-1/2"
      />
      <ClippedCard className="bg-[linear-gradient(147.93deg,rgba(255,255,255,0.2)_6.68%,rgba(0,0,0,0)_51.71%,rgba(255,255,255,0.2)_93.27%)] p-px drop-shadow-[0px_9px_18.4px_#00000040]">
        <div className="clipped bg-primary size-full">
          <ClippedCard className="flex size-full max-w-[410px] flex-col items-center p-6 backdrop-blur-xl lg:w-[22vw]">
            <div className="mt-40 text-start">
              <h3 className="text-lg">{title}</h3>
              <p className="text-sm">{description}</p>
              <div className="mt-4 flex w-full items-center justify-between">
                <h3 className="text-xl">{price}</h3>
                <Button className="border!">
                  <img src={shopIcon} alt="shop" className="size-4" />
                </Button>
              </div>
            </div>
          </ClippedCard>
        </div>
      </ClippedCard>
    </div>
  );
};

export default PlantCard;
