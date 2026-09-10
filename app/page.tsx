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
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero tidak perlu animasi — langsung terlihat saat load */}
        <HeroSection />

        <ScrollReveal direction="up" delay={0}>
          <TrustBar />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <AboutProduct />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <ProductSection />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0}>
          <BenefitsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <UsageSection />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0}>
          <ProcessSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <QualitySection />
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={0}>
          <WholesaleCTA />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <TestimonialSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0}>
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal direction="fade" delay={0}>
          <FinalCTA />
        </ScrollReveal>
      </main>

      <ScrollReveal direction="up" delay={0}>
        <Footer />
      </ScrollReveal>

      <WhatsAppButton />
    </>
  );
}
