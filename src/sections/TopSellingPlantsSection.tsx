import { plants } from "@/config/top.config";
import SectionTitle from "@/components/SectionTitle";
import PlantCard from "@/components/PlantCard";

const TopSellingPlantsSection = () => (
  <section id="top-selling-plants" className="flex scroll-mt-28 flex-col items-center gap-20 py-20">
    <SectionTitle title={"Our Top Selling Plants"} />
    <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
      {plants.map((props, i) => (
        <PlantCard key={i} variant="topSelling" {...props} />
      ))}
    </div>
  </section>
);

export default TopSellingPlantsSection;
