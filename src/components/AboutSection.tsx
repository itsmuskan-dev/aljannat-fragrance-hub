import { Award, Star, Store, DollarSign } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Award, label: "100% Original Products" },
    { icon: Star, label: "Wide Variety Available" },
    { icon: Store, label: "Trusted Local Store" },
    { icon: DollarSign, label: "Affordable Prices" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.25em] uppercase mb-4">
            About Our Store
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            A Legacy of <span className="text-gold-gradient">Authentic Fragrances</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Al Jannat Khushbu House is a trusted perfume and cosmetics store in Karachi offering original fragrances, Arabic attars, imported perfumes, and beauty products with quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="bg-muted rounded-sm p-6 md:p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <feature.icon className="text-secondary" size={24} />
              </div>
              <p className="font-body text-sm md:text-base font-medium text-foreground">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
