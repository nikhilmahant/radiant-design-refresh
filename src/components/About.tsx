
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-right');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-slide-left');
            }
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="opacity-0"
          >
            <h2 className="heading-lg mb-6 text-blue-800">About Dr. Huddar</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in psychiatry and addiction medicine, Dr. Sudheendra Huddar is a renowned specialist in substance abuse disorders and mental health management.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              His patient-centric approach combines evidence-based treatments with compassionate care, ensuring that each individual receives personalized attention and effective therapeutic interventions.
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className="opacity-0 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-neo">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-subtle flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-800">Dr. Sudheendra Huddar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
