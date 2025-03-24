
import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experienceItems = [
  {
    icon: Briefcase,
    title: 'Current Positions',
    items: [
      'Consultant Psychiatrist - XYZ Hospital, Mumbai',
      'Visiting Faculty - National Institute of Mental Health'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      'MD Psychiatry - AIIMS New Delhi',
      'Diploma in Psychological Medicine',
      'Fellowship in Addiction Psychiatry (UK)'
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
      
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div 
          ref={headingRef}
          className="opacity-0 text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="heading-lg mb-4 text-blue-800">Professional Experience</h2>
          <p className="text-lg text-gray-700">
            Dr. Huddar has extensive professional experience and academic qualifications in the field of psychiatry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (experienceRefs.current[index] = el)}
              className="opacity-0 neo-card p-8 transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <item.icon size={28} className="text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">{item.title}</h3>
              <ul className="space-y-4">
                {item.items.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs mt-0.5 text-blue-800">✓</span>
                    <span className="text-gray-700">{exp}</span>
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

export default Experience;
