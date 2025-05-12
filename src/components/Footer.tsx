
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-r from-agency-purple to-agency-orange text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">PixelPulse</h3>
            <p className="mb-4 opacity-90">
              Empowering brands with digital brilliance through creative design, strategic marketing, and innovative technology.
            </p>
            <div className="flex space-x-4 mt-6">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                  aria-label={social}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Web Design', 'Digital Marketing', 'Branding', 'UI/UX Design', 'SEO Optimization', 'Social Media'].map((service) => (
                <li key={service}>
                  <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About', link: '#about' },
                { name: 'Portfolio', link: '#portfolio' },
                { name: 'Pricing', link: '#pricing' },
                { name: 'Testimonials', link: '#testimonials' },
                { name: 'Contact', link: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="opacity-80 hover:opacity-100 transition-opacity">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="mb-4 opacity-90">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg flex-1 text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-agency-purple px-4 py-2 rounded-r-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80 text-sm">
            &copy; {new Date().getFullYear()} PixelPulse. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
