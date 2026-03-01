import { Phone, MessageCircle, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Collections", href: "#collections" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-heading text-xl md:text-2xl font-bold text-secondary">
          Al Jannat Khushbu House
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/923303824000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient text-primary px-5 py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-secondary/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-medium tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/923303824000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-primary px-5 py-3 rounded-sm text-sm font-semibold text-center"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
