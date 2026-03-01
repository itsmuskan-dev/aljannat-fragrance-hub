import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-secondary mb-3">
              Al Jannat Khushbu House
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Your trusted destination for original perfumes, attars, and cosmetics in Karachi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Collections", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-primary-foreground/50 text-sm hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-primary-foreground/50 text-sm">
                <MapPin size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                <span>Haji Rehmat Shah Rd, Sector 1-B, Gulzar-e-Hijri Scheme 33, Karachi</span>
              </div>
              <a href="tel:+923303824000" className="flex items-center gap-2 text-primary-foreground/50 text-sm hover:text-secondary transition-colors">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                +92 330 382 4000
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} Al Jannat Khushbu House. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs">
            Website Managed by Lyrikka Web Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
