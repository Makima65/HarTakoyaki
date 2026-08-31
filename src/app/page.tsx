import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import HowItWorks from "@/components/HowItWorks";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Inquire from "@/components/Inquire";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <HowItWorks />
      <Amenities />
      <Gallery />
      <Reviews />
      <Inquire />
      <FAQ />
      <StickyCTA />
    </main>
  );
}
