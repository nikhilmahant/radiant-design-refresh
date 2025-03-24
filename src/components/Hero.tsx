
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements sequentially
    const elements = [headingRef, subtitleRef, ctaRef, imageRef];
    
    elements.forEach((ref, index) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100');
          ref.current?.classList.remove('opacity-0');
          
          if (index === 0) ref.current?.classList.add('animate-slide-up');
          if (index === 1) ref.current?.classList.add('animate-slide-up');
          if (index === 2) ref.current?.classList.add('animate-fade-in');
          if (index === 3) ref.current?.classList.add('animate-scale');
        }, 300 * index);
      }
    });
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-xs font-medium text-gray-800">New Release</span>
            </div>
            
            <h1 
              ref={headingRef}
              className="opacity-0 heading-xl mb-6"
            >
              Design with precision & attention to detail
            </h1>
            
            <p 
              ref={subtitleRef}
              className="opacity-0 text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Create beautiful interfaces with a design system that focuses on simplicity, functionality, and attention to detail.
            </p>
            
            <div 
              ref={ctaRef}
              className="opacity-0 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#features" 
                className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium transition-colors hover:bg-gray-900 text-center sm:text-left"
              >
                Explore Features
              </a>
              <a 
                href="#products" 
                className="px-6 py-3 rounded-lg border border-gray-200 text-gray-800 text-sm font-medium flex items-center justify-center sm:justify-start gap-2 transition-colors hover:bg-gray-50"
              >
                View Products <ArrowRight size={16} />
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0 relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-neo">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 aspect-video bg-white rounded-xl shadow-subtle flex items-center justify-center">
                  <span className="text-gray-400">Product Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
