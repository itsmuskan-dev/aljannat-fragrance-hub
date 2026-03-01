import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Store interior with perfume shelves" },
  { src: gallery2, alt: "Premium perfume bottle collection" },
  { src: gallery3, alt: "Cosmetics display shelf" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.25em] uppercase mb-4">
            Inside Our Store
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Shop <span className="text-gold-gradient">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-sm group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
