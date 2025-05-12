
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-agency-purple">Pixel</span>
          <span className="text-agency-orange">Pulse</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks isScrolled={isScrolled} />
          <Button
            className={cn(
              "rounded-full",
              isScrolled
                ? "bg-agency-purple hover:bg-agency-purple/90 text-white"
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            )}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64" : "max-h-0 overflow-hidden"
          )}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <NavLinks mobile />
            <Button className="bg-agency-purple hover:bg-agency-purple/90 rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

type NavLinksProps = {
  mobile?: boolean;
  isScrolled?: boolean;
};

const NavLinks = ({ mobile, isScrolled }: NavLinksProps) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium transition-colors duration-200",
            mobile
              ? "block py-2 text-gray-800 hover:text-agency-purple"
              : isScrolled
              ? "text-gray-800 hover:text-agency-purple"
              : "text-white hover:text-agency-blue"
          )}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
