import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-body text-sm tracking-[0.25em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Visit Our <span className="text-gold-gradient">Store</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-elegant h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.1!3d24.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzAwLjAiTiA2N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Al Jannat Khushbu House location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Haji Rehmat Shah Rd, Sector 1-B<br />
                  Gulzar-e-Hijri Scheme 33, Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+923303824000" className="text-muted-foreground text-sm hover:text-secondary transition-colors">
                  +92 330 382 4000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">Store Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Open daily · 10:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
