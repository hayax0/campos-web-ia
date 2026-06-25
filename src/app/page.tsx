import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Problem Section */}
        <Problems />

        {/* Services Section (Solutions) */}
        <Services />

        {/* Portfolio Section (Provas) */}
        <Portfolio />

        {/* How It Works Section (Process) */}
        <HowItWorks />

        {/* Pricing Section (with Testimonials integrated) */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Final Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
