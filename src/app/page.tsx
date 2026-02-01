import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import CakeShowcase from "@/components/CakeShowcase";
import StoreExperience from "@/components/StoreExperience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <CakeShowcase />
      <StoreExperience />
      <CTA />
      <Footer />
    </main>
  );
}
