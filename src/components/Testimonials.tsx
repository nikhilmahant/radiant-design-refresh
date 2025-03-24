
import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    content: "This design system has completely transformed our workflow. The attention to detail is remarkable.",
    author: "Sarah Johnson",
    role: "Product Designer, Acme Inc."
  },
  {
    content: "The simplicity and flexibility of these components make development so much faster and more enjoyable.",
    author: "Michael Chen",
    role: "Frontend Developer, Tech Solutions"
  },
  {
    content: "I've never worked with a more intuitive and well-designed system. It's truly a game-changer for our team.",
    author: "Alex Rodriguez",
    role: "UI/UX Lead, Creative Studio"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={headingRef}
          className="opacity-0 text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-4">What our customers say</h2>
          <p className="subtitle">
            Hear from the designers and developers who use our products every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="opacity-0 neo-card p-8 transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 text-gray-300">
                <path d="M12.5 0H7.5L0 12.5V24H12.5V12.5H5L12.5 0Z" fill="currentColor"/>
                <path d="M30 0H25L17.5 12.5V24H30V12.5H22.5L30 0Z" fill="currentColor"/>
              </svg>
              
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
