
import React from 'react';
import { Code, Image, BarChart, Users } from "lucide-react";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color,
  delay = 0 
}: { 
  title: string, 
  description: string, 
  icon: React.ElementType, 
  color: string, 
  delay?: number 
}) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-lg card-hover animate-zoom-in"
      style={{ 
        animationDelay: `${delay}s`,
        background: `linear-gradient(145deg, #ffffff, #f5f5f5)`
      }}
    >
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: color }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
};

const ServicesSection = () => {
  const services = [
    {
      title: "Web Design & Development",
      description: "Beautiful, responsive websites built with modern technologies to deliver exceptional user experiences.",
      icon: Code,
      color: "#8B5CF6"
    },
    {
      title: "Branding & Identity",
      description: "Strategic brand development that communicates your values and connects with your audience.",
      icon: Image,
      color: "#F97316"
    },
    {
      title: "Digital Marketing & SEO",
      description: "Data-driven marketing strategies that increase visibility and drive meaningful traffic to your business.",
      icon: BarChart,
      color: "#06B6D4"
    },
    {
      title: "Social Media Management",
      description: "Engaging social content and campaigns that build communities and foster brand loyalty.",
      icon: Users,
      color: "#EC4899"
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-agency-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-agency-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We offer a comprehensive suite of digital services to help you achieve your business goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Need something specific? We offer custom solutions tailored to your unique needs.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-agency-purple to-agency-orange text-white rounded-full hover:opacity-90 transition-opacity">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
