import { PlantAnglonemaImage, playIcon, rightArrowIcon, RonnieReviewImage } from "@/assets";
import ClippedCard from "@/components/ClippedCard";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";
import Stars from "@/components/Stars";

const HeroBanner = () => (
  <section
    id="hero"
    className="flex min-h-screen scroll-mt-28 flex-col items-center justify-between p-5 text-white/75 md:flex-row md:p-10"
  >
    <div className="flex flex-col gap-15">
      <div className="md:max-w-[50vw] lg:max-w-[40vw]">
        <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl">Earth’s Exhale</h2>
        <p className="font-medium">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and
          its essential role in sustaining life.
        </p>
        <div className="mt-3 flex gap-4">
          <Button className="px-6">Buy Now</Button>
          <div className="flex items-center gap-2">
            <Button className="rounded-full! p-3">
              <img src={playIcon} alt="play" className="size-4" />
            </Button>
            <p className="font-indieflower text-xl tracking-tighter"> Live Demo...</p>
          </div>
        </div>
      </div>

      <GlassCard className="p-5 md:w-[35vw] lg:w-[25vw] backdrop-blur-[17px]">
        <div className="flex items-center gap-6 pb-5">
          <img
            src={RonnieReviewImage}
            alt="ronnie"
            className="size-15 rounded-full object-cover object-center"
          />
          <div>
            <h3 className="text-xl">Ronnie Hamill</h3>
            <Stars star={4.5} />
          </div>
        </div>
        I can't express how thrilled I am with my new natural plants! They bring such a fresh and
        vibrant energy to my home.
      </GlassCard>
    </div>
    <div className="relative top-0 mt-10 md:-top-10">
      <img
        src={PlantAnglonemaImage}
        alt="Anglonema Plant"
        className="absolute bottom-2/5 left-1/2 z-2 w-full -translate-x-1/2"
      />
      <div className="border-wrapper">
        <ClippedCard className="flex w-80 flex-col justify-around p-8 pt-60 backdrop-blur-lg">
          <div className="flex flex-col gap-1">
            <h6 className="text-sm">indoor Plant</h6>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Aglaonema plant</h2>
              <img src={rightArrowIcon} alt="swipe-right" className="size-3" />
            </div>
            <Button className="mt-2 w-1/2">Buy Now</Button>
          </div>
          <div className="mt-2 flex justify-center gap-1.5 p-2">
            <span className="size-1 w-5 rounded-full bg-white"></span>
            <span className="size-1 rounded-full bg-white"></span>
            <span className="size-1 rounded-full bg-white"></span>
          </div>
        </ClippedCard>
      </div>
    </div>
  </section>
);

export default HeroBanner;
