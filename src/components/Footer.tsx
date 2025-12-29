import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import wfestLogo from "@/assets/wfest-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={wfestLogo} alt="W Fest" className="h-20 w-auto mb-4" />
            <p className="text-sm text-primary-foreground/70">
              Experience the magic of Water, Woods & Wisdom at Gujarat's premier cultural festival.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/festival" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Festival</Link></li>
              <li><Link to="/tour-package" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link to="/book-tickets" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">Book Tickets</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail size={16} />
                <a href="mailto:hello@wfest.com" className="hover:text-primary transition-colors">hello@wfest.com</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5" />
                <span>Gujarat, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          <p>© 2026 W Festival. All rights reserved. | 26 Jan to 28 Feb, 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
