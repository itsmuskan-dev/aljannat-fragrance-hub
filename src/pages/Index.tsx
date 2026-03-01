import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <GallerySection />
      <WhatsAppCTA />
      <LocationSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
