
import React, { useEffect, useRef } from 'react';
import { Brain, Lightbulb, Users } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Addiction Psychiatry',
    items: [
      'Alcohol & Substance Abuse',
      'Behavioral Addictions',
      'Relapse Prevention'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Therapeutic Approaches',
    items: [
      'Cognitive Behavioral Therapy',
      'Motivational Interviewing',
      'Family Systems Therapy'
    ]
  }
];

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const expertiseRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    expertiseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      expertiseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={headingRef} 
          className="opacity-0 text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-4 text-blue-800">Areas of Expertise</h2>
          <p className="text-lg text-gray-700">
            Dr. Huddar specializes in various psychiatric disciplines with a focus on addiction treatment and therapeutic interventions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              ref={(el) => (expertiseRefs.current[index] = el)}
              className="opacity-0 neo-card p-8 transition-all duration-300 hover-lift bg-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <area.icon size={28} className="text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">{area.title}</h3>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs mt-0.5 text-blue-800">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
