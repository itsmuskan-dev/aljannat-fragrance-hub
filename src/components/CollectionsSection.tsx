import collectionAttar from "@/assets/collection-attar.jpg";
import collectionPerfumes from "@/assets/collection-perfumes.jpg";
import collectionCosmetics from "@/assets/collection-cosmetics.jpg";
import collectionGiftsets from "@/assets/collection-giftsets.jpg";

const collections = [
  { title: "Arabic Attar Collection", image: collectionAttar, description: "Exquisite traditional Arabian attars" },
  { title: "Imported Perfumes", image: collectionPerfumes, description: "Premium international fragrance brands" },
  { title: "Cosmetics & Beauty", image: collectionCosmetics, description: "High-quality beauty essentials" },
  { title: "Gift Sets & Bundles", image: collectionGiftsets, description: "Perfect fragrance gift combinations" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-dark-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.25em] uppercase mb-4">
            Explore
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Our <span className="text-gold-gradient">Collections</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <a
              key={item.title}
              href="https://wa.me/923303824000"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-sm aspect-[3/4] block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm font-body">
                  {item.description}
                </p>
                <span className="inline-block mt-3 text-secondary text-xs font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Order Now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
