import { CTASection } from "./components/CTA";
import { FeaturesSection } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { PricingSection } from "./components/Pricing";
import { TestimonialsSection } from "./components/Testimonials";

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Home() {
  return (
    <div className="page">
      <NavBar navigation={navigation} />
      <main>
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
