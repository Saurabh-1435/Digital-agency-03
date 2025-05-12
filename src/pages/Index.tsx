
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
      threshold: 0.1 // Slightly lower threshold for better detection
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ensure we remove the opacity-0 class when the section comes into view
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-in');
          // Don't unobserve to allow re-animation if user scrolls back up and down
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

    // Implement smooth scroll behavior for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && document.querySelector(link.hash)) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.body.addEventListener('click', handleLinkClick);

    return () => {
      // Clean up observer and event listeners
      const sections = document.querySelectorAll('section:not(#home)');
      sections.forEach(section => {
        observer.unobserve(section);
      });
      document.body.removeEventListener('click', handleLinkClick);
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
