import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutProduct from "@/components/AboutProduct";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import UsageSection from "@/components/UsageSection";
import ProcessSection from "@/components/ProcessSection";
import QualitySection from "@/components/QualitySection";
import WholesaleCTA from "@/components/WholesaleCTA";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutProduct />
        <ProductSection />
        <BenefitsSection />
        <UsageSection />
        <ProcessSection />
        <QualitySection />
        <WholesaleCTA />
        <TestimonialSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
