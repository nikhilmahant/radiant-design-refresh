
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    title: 'Design Suite',
    description: 'A comprehensive suite of design tools for modern creators.',
    price: '$49',
    features: ['UI Components', 'Design Templates', 'Asset Library', 'Export Options']
  },
  {
    title: 'Developer Kit',
    description: 'Everything developers need to build beautiful interfaces.',
    price: '$79',
    features: ['Component Library', 'Code Snippets', 'API Access', 'Documentation']
  },
  {
    title: 'Enterprise Solution',
    description: 'Advanced tools for teams building at scale.',
    price: '$149',
    features: ['Collaboration Tools', 'Version Control', 'Team Management', 'Priority Support']
  }
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      productRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={headingRef}
          className="opacity-0 text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-4">Our Products</h2>
          <p className="subtitle">
            Choose the right package for your needs and start creating beautiful designs today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (productRefs.current[index] = el)}
              className="opacity-0 neo-card p-8 transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <p className="text-3xl font-bold mb-6">{product.price}<span className="text-sm font-normal text-gray-500">/month</span></p>
              
              <ul className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium transition-colors hover:bg-gray-200"
              >
                Get Started <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
