import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import SlideBanner from "@/components/SlideBanner";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import UsageSection from "@/components/UsageSection";
import ProcessSection from "@/components/ProcessSection";
import WholesaleCTA from "@/components/WholesaleCTA";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Beranda */}
        <HeroSection />

        <ScrollReveal direction="up">
          <TrustBar />
        </ScrollReveal>

        {/* Slide Banner Otomatis */}
        <ScrollReveal direction="up">
          <SlideBanner />
        </ScrollReveal>

        {/* 2. Produk */}
        <ScrollReveal direction="up">
          <ProductSection />
        </ScrollReveal>

        {/* 3. Keunggulan */}
        <ScrollReveal direction="up">
          <BenefitsSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <UsageSection />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <ProcessSection />
        </ScrollReveal>

        <ScrollReveal direction="fade">
          <WholesaleCTA />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <TestimonialSection />
        </ScrollReveal>

        {/* 5. FAQ */}
        <ScrollReveal direction="up">
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal direction="fade">
          <FinalCTA />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="up">
        <Footer />
      </ScrollReveal>

      <WhatsAppButton />
    </>
  );
}
