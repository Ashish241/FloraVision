import type { ReviewItem } from "@/types/data";
import ClippedCard from "@/components/ClippedCard";
import Stars from "@/components/Stars";

const TestimonialCard = ({ img, star, name, message }: ReviewItem) => (
  <ClippedCard className="max-w-[410px] bg-[linear-gradient(147.93deg,rgba(255,255,255,0.2)_6.68%,rgba(0,0,0,0)_51.71%,rgba(255,255,255,0.2)_93.27%)] p-px drop-shadow-[0px_9px_18.4px_#00000040]">
    <div className="clipped bg-primary size-full">
      <ClippedCard className="flex size-full flex-col justify-evenly p-6 backdrop-blur-xl">
        <div className="mb-4 flex w-full items-start gap-6">
          <img
            src={img.src}
            alt={img.alt}
            className="size-10 rounded-full object-cover object-center"
          />
          <div>
            <h3>{name}</h3>
            <Stars star={star} size={3} />
          </div>
        </div>
        <p>{message}</p>
      </ClippedCard>
    </div>
  </ClippedCard>
);

export default TestimonialCard;
