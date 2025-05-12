
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-agency-blue/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image with decorative elements */}
          <div className="w-full md:w-1/2 relative animate-fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Creative team meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-agency-purple/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-agency-orange/20 rounded-full animate-float" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-agency-green/30 rounded-full animate-float" style={{animationDelay: "1.5s"}}></div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 animate-fade-in-right">
            <h2 className="section-title">
              We're a team of creative thinkers and doers
            </h2>
            
            <p className="text-lg mb-6 text-gray-700">
              Founded in 2015, PixelPulse has been at the forefront of digital innovation, 
              helping brands across industries establish powerful digital identities.
            </p>
            
            <p className="text-lg mb-6 text-gray-700">
              Our team of strategists, designers, developers, and marketers work together to 
              create seamless digital experiences that drive real business results.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {/* Stats */}
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="text-5xl font-bold text-agency-purple mb-2">200+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="text-5xl font-bold text-agency-orange mb-2">15+</h3>
                <p className="text-gray-600">Creative Experts</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="text-5xl font-bold text-agency-purple mb-2">8+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h3 className="text-5xl font-bold text-agency-orange mb-2">350+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
