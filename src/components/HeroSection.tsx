import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Al Jannat Khushbu House storefront"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p
          className="text-secondary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Premium Fragrances & Beauty
        </p>
        <h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in-up leading-tight"
          style={{ animationDelay: "0.4s" }}
        >
          Original Perfumes &<br />
          <span className="text-gold-gradient">Cosmetics in Karachi</span>
        </h1>
        <p
          className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Premium fragrances, attar collections, and beauty products available at Al Jannat Khushbu House.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://wa.me/923303824000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary px-8 py-4 rounded-sm font-semibold text-sm tracking-wide uppercase hover:opacity-90 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
          <a
            href="tel:+923303824000"
            className="border border-secondary/50 text-secondary px-8 py-4 rounded-sm font-semibold text-sm tracking-wide uppercase hover:bg-secondary/10 transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
