
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-working-on-code-screen-close-up-1768-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-agency-purple/80 to-agency-orange/80"></div>
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-agency-blue/30 shape-blob blur-xl"></div>
      <div className="absolute bottom-1/3 left-[15%] w-40 h-40 bg-agency-pink/20 shape-blob blur-lg"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold text-white animate-fade-in">
            <span className="block">Empowering Brands</span>
            <span className="block text-agency-blue">
              with <span className="text-white">Digital</span> Brilliance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            We craft exceptional digital experiences that elevate your brand, engage your audience, and drive sustainable growth.
          </p>
          
          <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button className="rounded-full bg-white text-agency-purple hover:bg-white/90 hover:text-agency-purple/90 font-medium px-8 py-6 text-lg">
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center scroll-indicator">
        <ArrowDown className="w-8 h-8 mx-auto animate-bounce-soft" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
};

export default HeroSection;
