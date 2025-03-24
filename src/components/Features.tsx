
import React, { useEffect, useRef } from 'react';
import { 
  Layers, 
  Layout, 
  Palette, 
  PenTool, 
  Smartphone, 
  Zap 
} from 'lucide-react';

const featureList = [
  {
    icon: Layers,
    title: 'Modular Components',
    description: 'Build interfaces with reusable, modular components that maintain consistency across your product.'
  },
  {
    icon: PenTool,
    title: 'Precision Tools',
    description: 'Design with precision using our advanced tools that provide pixel-perfect control.'
  },
  {
    icon: Layout,
    title: 'Flexible Layouts',
    description: 'Create responsive layouts that adapt perfectly to any screen size or device.'
  },
  {
    icon: Palette,
    title: 'Design System',
    description: 'Maintain consistency with a comprehensive design system that scales with your product.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Ensure your designs look and work perfectly on mobile devices with dedicated mobile tools.'
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'Create high-performance interfaces that load quickly and run smoothly on all devices.'
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={headingRef} 
          className="opacity-0 text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-4">Designed for productivity</h2>
          <p className="subtitle">
            Our features are carefully crafted to help designers and developers create beautiful, functional products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="opacity-0 neo-card p-6 transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
