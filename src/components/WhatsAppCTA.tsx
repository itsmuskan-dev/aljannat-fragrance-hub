import { MessageCircle } from "lucide-react";

const WhatsAppCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center">
        <p className="text-secondary font-body text-sm tracking-[0.25em] uppercase mb-4">
          Easy Ordering
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Order Easily on <span className="text-gold-gradient">WhatsApp</span>
        </h2>
        <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-10">
          Browse our collection and place your order directly through WhatsApp. Fast, easy, and convenient.
        </p>
        <a
          href="https://wa.me/923303824000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gold-gradient text-primary px-10 py-5 rounded-sm font-semibold text-base tracking-wide uppercase hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={22} />
          Order Now
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
