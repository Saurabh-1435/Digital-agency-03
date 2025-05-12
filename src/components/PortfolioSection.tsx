
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Eco Fashion Ecommerce',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    link: '#'
  },
  {
    id: 2,
    title: 'Financial App UI',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    link: '#'
  },
  {
    id: 3,
    title: 'Real Estate Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    link: '#'
  },
  {
    id: 4,
    title: 'Tourism Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    link: '#'
  },
  {
    id: 5,
    title: 'Tech Startup Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    link: '#'
  },
  {
    id: 6,
    title: 'Mobile Gaming App',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    link: '#'
  },
];

const categories = ['All', 'Web Design', 'UI/UX', 'Branding', 'Marketing'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  
  const showMoreProjects = () => {
    setVisibleProjects(prevCount => prevCount + 3);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-agency-blue/10 relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://res.cloudinary.com/dhr3tv24m/video/upload/v1715571225/projects-montage_auqggf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-agency-blue/20"></div>
      </div>
      
      {/* Section divider - top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 w-full h-24 rotate-180">
          <path fill="rgba(209, 213, 219, 0.1)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-1/4">Our Portfolio</h2>
          <p className="section-subtitle mx-auto">
            Explore our recent projects and see how we've helped brands achieve their goals.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-agency-purple text-white shadow-md' 
                  : 'bg-gray-100/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-1 rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-xl">
                  <div>
                    <span className="text-agency-orange font-medium block mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                    <a 
                      href={project.link}
                      className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See more button */}
        {filteredProjects.length > visibleProjects && (
          <div className="text-center mt-12">
            <Button 
              onClick={showMoreProjects}
              className="bg-agency-purple hover:bg-agency-purple/90 text-white rounded-full px-8 transition-all duration-300 hover:scale-105"
            >
              See More Projects
            </Button>
          </div>
        )}
      </div>
      
      {/* Section divider - bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
          <path fill="rgba(209, 213, 219, 0.1)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default PortfolioSection;
