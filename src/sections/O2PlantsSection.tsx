import { PlantAnglonemaImage, rightArrowIcon } from "@/assets";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

const O2PlantsSection = () => (
  <section id="best-o2" className="flex scroll-mt-28 flex-col items-center gap-10 py-10">
    <SectionTitle
      title={"Our Best o2"}
      gradient={[
        "bg-[linear-gradient(46.03deg,#55B000_-1.83%,rgba(255,255,255,0.156606)_49.18%,#50790B_100%)] -left-3!",
        "bg-[linear-gradient(226.03deg,#55B000_-1.83%,rgba(255,255,255,0.156606)_49.18%,#50790B_100%)] -right-4!",
      ]}
    />
    <div className="mt-10 rounded-[79px] bg-[linear-gradient(101.82deg,rgba(255,255,255,0.44)_2.51%,rgba(0,0,0,0)_39.22%,rgba(255,255,255,0.33)_97.85%)] p-0.5">
      <div className="bg-primary rounded-[77px]">
        <GlassCard className="flex flex-col items-center rounded-[77px] md:flex-row md:items-stretch">
          <div className="relative w-50 md:w-80">
            <div className="absolute -top-20 left-1/2 size-90 -translate-x-1/2 md:-top-30 md:-left-30 md:size-120 md:translate-0">
              <img
                src={PlantAnglonemaImage}
                alt="anglonema"
                className="drop-shadow-plant h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-60 flex flex-col gap-4 p-10 md:m-0 md:max-w-[50vw] md:p-20">
            <h2>We Have Small And Best O2 Plants Collection’s</h2>
            <p>
              Oxygen-producing plants, often referred to as "O2 plants," are those that release
              oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p>
              Many plants can help filter out pollutants and toxins from the air, such as
              formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier
              to breathe.
            </p>
            <div className="flex w-full justify-between">
              <Button className="px-10">Explore</Button>
              <div className="flex items-center gap-8">
                <img src={rightArrowIcon} alt="left" className="size-4 rotate-180 opacity-40" />
                <p className="text-xs font-bold text-white/70">
                  <strong className="text-base">01/</strong>
                  04
                </p>
                <img src={rightArrowIcon} alt="right" className="size-4" />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
    <div className="flex justify-center gap-1.5">
      <span className="size-2 w-5 rounded-full bg-white/75"></span>
      <span className="size-2 rounded-full bg-white/75"></span>
      <span className="size-2 rounded-full bg-white/75"></span>
    </div>
  </section>
);

export default O2PlantsSection;
