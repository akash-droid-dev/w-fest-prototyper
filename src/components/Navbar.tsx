import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import wfestLogo from "@/assets/wfest-logo.png";

const Navbar = () => {
  const [isBookNowOpen, setIsBookNowOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "FESTIVAL", path: "/festival" },
    { label: "TOUR PACKAGE", path: "/tour-package" },
    { label: "MEDIA", path: "/media" },
    { label: "BOOK TICKETS", path: "/book-tickets" },
  ];

  const quickBookOptions = [
    {
      label: "Book now for W - Fest, Dharoi for 26 January 2026 Mega Surprise Day",
      city: "Dharoi",
      price: 1200,
    },
    {
      label: "Book now for W - Fest, Polo Forest for 26 January 2026 Mega Surprise Day",
      city: "Polo Forest",
      price: 1400,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBookNowOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleQuickBook = (option: typeof quickBookOptions[0]) => {
    setIsBookNowOpen(false);
    navigate("/book-tickets", {
      state: {
        preselectedCity: option.city,
        preselectedDate: "2026-01-26",
        preselectedAmount: option.price,
      },
    });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={wfestLogo} alt="W Fest Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Book Now Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBookNowOpen(!isBookNowOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg gradient-button text-primary-foreground transition-all hover:opacity-90"
              >
                BOOK NOW
                <ChevronDown size={16} className={`transition-transform ${isBookNowOpen ? "rotate-180" : ""}`} />
              </button>

              {isBookNowOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-card rounded-xl shadow-card border border-border animate-slide-down">
                  <div className="p-2">
                    {quickBookOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickBook(option)}
                        className="w-full text-left p-4 rounded-lg hover:bg-muted transition-colors text-sm"
                      >
                        <span className="font-medium text-foreground">{option.label}</span>
                        <span className="block mt-1 text-primary font-semibold">₹{option.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive(item.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-4 px-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">QUICK BOOK</p>
              {quickBookOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleQuickBook(option);
                  }}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors text-sm mb-2"
                >
                  <span className="font-medium text-foreground">{option.label}</span>
                  <span className="block mt-1 text-primary font-semibold">₹{option.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
