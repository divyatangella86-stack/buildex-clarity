import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MaterialsGrid from "@/components/MaterialsGrid";
import WhyChoose from "@/components/WhyChoose";
import IndustriesSection from "@/components/IndustriesSection";
import ProcurementProcess from "@/components/ProcurementProcess";
import MarketInsights from "@/components/MarketInsights";
import TrustStats from "@/components/TrustStats";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <MaterialsGrid />
    <WhyChoose />
    <IndustriesSection />
    <ProcurementProcess />
    <MarketInsights />
    <TrustStats />
    <CTABanner />
    <Footer />
  </div>
);

export default Index;
