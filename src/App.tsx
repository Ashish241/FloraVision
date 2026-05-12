import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import TrendingPlantsSection from "@/sections/TrendingPlantsSection";
import TopSellingPlantsSection from "@/sections/TopSellingPlantsSection";
import CustomerReviewsSection from "@/sections/CustomerReviewsSection";
import O2PlantsSection from "@/sections/O2PlantsSection";

const App = () => (
  <div className="font-inter bg-primary flex flex-col items-center text-white">
    <div className="bg-hero flex w-screen flex-col items-center">
      <Navbar />
      <main className="container pt-24 md:pt-28">
        <HeroBanner />
        <TrendingPlantsSection />
      </main>
    </div>
    <main className="container flex flex-col items-center">
      <TopSellingPlantsSection />
      <CustomerReviewsSection />
      <O2PlantsSection />
    </main>
    <Footer />
  </div>
);

export default App;
