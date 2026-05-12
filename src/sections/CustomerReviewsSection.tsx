import { reviews } from "@/config/review.config";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

const CustomerReviewsSection = () => (
  <section className="flex flex-col items-center gap-20 py-20">
    <SectionTitle title={"Customer Review"} />
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((props, i) => (
        <TestimonialCard key={i} {...props} />
      ))}
    </div>
  </section>
);

export default CustomerReviewsSection;
