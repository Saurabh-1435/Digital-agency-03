
import React, { useEffect, useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Elevate Tech",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    rating: 5,
    quote: "PixelPulse transformed our online presence completely. Their team understood our vision immediately and delivered a website that perfectly represents our brand identity. The results have been incredible - our engagement metrics have doubled!"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "GrowthFlow",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote: "Working with PixelPulse has been game-changing for our startup. Their strategic approach to design and marketing helped us establish a strong digital foundation. We've seen a 40% increase in leads since launching our new site."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Brand Manager",
    company: "Urban Collective",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    quote: "The creativity and attention to detail that PixelPulse brings to every project is unmatched. They revitalized our brand with a fresh identity and coherent digital strategy that resonates perfectly with our target audience."
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Director",
    company: "Nexus Solutions",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    quote: "I've worked with many digital agencies before, but none match the level of professionalism and results that PixelPulse delivers. They're transparent, responsive, and genuinely invested in our success."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-agency-orange/5 to-agency-purple/5 relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 text-9xl text-agency-orange/10 font-serif">"</div>
      <div className="absolute bottom-10 right-10 text-9xl text-agency-purple/10 font-serif rotate-180">"</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/4">Client Testimonials</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Testimonials slider */}
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-10 bg-white rounded-2xl shadow-lg ${
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full pointer-events-none"
                }`}
              >
                {/* Avatar and info */}
                <div className="flex flex-col items-center text-center md:text-left md:items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-agency-purple/20 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-agency-purple font-medium">{testimonial.company}</p>
                  
                  {/* Star rating */}
                  <div className="flex mt-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <div className="flex-1">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-agency-purple w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
