import SectionTitle from "@/components/SectionTitle";
import PlantCard from "@/components/PlantCard";
import { trends } from "@/config/trend.config";

const TrendingPlantsSection = () => (
  <section className="flex flex-col items-center gap-20 pb-20">
    <SectionTitle title={"Our Trendy plants"} />

    {trends.map((item, i) => (
      <PlantCard key={i} variant="trending" index={i} {...item} />
    ))}
  </section>
);

export default TrendingPlantsSection;
