
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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-agency-blue/10">
      <div className="container mx-auto px-4">
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
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
          ))}
        </div>
        
        {/* See more button */}
        {filteredProjects.length > visibleProjects && (
          <div className="text-center mt-12">
            <Button 
              onClick={showMoreProjects}
              className="bg-agency-purple hover:bg-agency-purple/90 text-white rounded-full px-8"
            >
              See More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
