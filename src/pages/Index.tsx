
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <Hero />
      <About />
      <Services />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
