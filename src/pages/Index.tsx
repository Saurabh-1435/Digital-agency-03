
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add custom scroll animations with improved visibility handling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Slightly increased threshold for better detection
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ensure we remove the opacity-0 class when the section comes into view
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in');
          // Don't unobserve to allow re-animation if user scrolls back up and down
          // This ensures sections don't disappear once they've been seen
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Set a small timeout to ensure all sections are in the DOM before observing
    setTimeout(() => {
      // Observe all sections except hero (which is already animated)
      const sections = document.querySelectorAll('section:not(#home)');
      sections.forEach(section => {
        // Add opacity-0 but with a transition to make fade smoother
        section.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        observer.observe(section);
      });
    }, 100);

    return () => {
      // Clean up observer
      const sections = document.querySelectorAll('section:not(#home)');
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
