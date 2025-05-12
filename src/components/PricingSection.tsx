
import React, { useState } from 'react';
import { Check, CircleDollarSign } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  color: string;
  gradientClass: string;
  badge?: string;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses just getting started",
    features: [
      "Responsive website design",
      "Basic SEO setup",
      "Social media integration",
      "Contact form setup",
      "1 month of support"
    ],
    popular: false,
    color: "#8B5CF6",
    gradientClass: "bg-gradient-to-br from-agency-purple/10 to-agency-blue/30"
  },
  {
    name: "Pro",
    price: "$2499",
    description: "Ideal for growing businesses with specific needs",
    features: [
      "Everything in Starter",
      "Custom website development",
      "Advanced SEO optimization",
      "Content strategy",
      "E-commerce integration",
      "3 months of support"
    ],
    popular: true,
    color: "#F97316",
    gradientClass: "bg-gradient-to-br from-agency-orange/10 to-agency-pink/30",
    badge: "Most Popular"
  },
  {
    name: "Agency",
    price: "$4999",
    description: "Full-service solution for established businesses",
    features: [
      "Everything in Pro",
      "Brand identity design",
      "Marketing campaign setup",
      "Social media management",
      "Analytics dashboard",
      "Ongoing SEO management",
      "6 months of support"
    ],
    popular: false,
    color: "#06B6D4",
    gradientClass: "bg-gradient-to-br from-agency-blue/20 to-agency-green/20",
    badge: "Best Value"
  }
];

const PricingCard = ({ plan, index }: { plan: PricingPlan, index: number }) => {
  // State for card flip animation
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className={`relative h-full perspective-1000 animate-zoom-in transition-all duration-300 hover:scale-105 hover:shadow-glow`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: isFlipped ? `0 0 15px ${plan.color}40` : 'none'
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative h-full rounded-2xl shadow-lg transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card */}
        <div 
          className={`absolute inset-0 p-8 rounded-2xl backface-hidden ${plan.gradientClass} border border-gray-200`}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-agency-orange text-white px-4 py-1 rounded-full text-sm font-medium">
              {plan.badge}
            </div>
          )}
          
          <h3 className="text-2xl font-bold mb-2" style={{ color: plan.color }}>{plan.name}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
            <span className="text-gray-500 ml-1">/project</span>
          </div>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          
          <Button 
            className={`w-full rounded-full hover:shadow-lg text-white transition-all duration-300 hover:brightness-110`}
            style={{ backgroundColor: plan.color }}
          >
            Choose Plan
          </Button>
          
          <p className="text-sm text-center mt-4 text-gray-500">
            Flip for details
          </p>
        </div>
        
        {/* Back of card */}
        <div 
          className={`absolute inset-0 p-8 rounded-2xl backface-hidden bg-white rotate-y-180 border ${plan.popular ? 'border-agency-orange' : 'border-gray-200'}`}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: plan.color }}>Features</h3>
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" style={{ color: plan.color }} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={`w-full rounded-full mt-6 hover:shadow-lg text-white transition-all duration-300 hover:brightness-110`}
            style={{ backgroundColor: plan.color }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-agency-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-agency-orange/10 rounded-full blur-3xl"></div>
      
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-24 rotate-180">
          <path fill="rgba(209, 213, 219, 0.1)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">Pricing Plans</h2>
          <p className="section-subtitle mx-auto">
            Choose the perfect package for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center p-8 rounded-2xl bg-agency-blue/20 max-w-3xl mx-auto animate-fade-in">
          <CircleDollarSign className="h-12 w-12 mx-auto mb-4 text-agency-purple" />
          <h3 className="text-2xl font-bold mb-3">Need a custom solution?</h3>
          <p className="text-gray-700 mb-6">
            We offer tailored packages designed to meet your specific requirements. 
            Contact us to discuss your project needs.
          </p>
          <Button className="bg-agency-purple hover:bg-agency-purple/90 rounded-full px-8 transition-all duration-300 hover:scale-105">
            Request Custom Quote
          </Button>
        </div>
      </div>
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path fill="rgba(209, 213, 219, 0.1)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default PricingSection;
