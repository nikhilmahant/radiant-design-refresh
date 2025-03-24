
import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import GoogleMap from './GoogleMap';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-right');
            } else if (entry.target === formRef.current) {
              entry.target.classList.add('animate-slide-left');
            } else if (entry.target === mapRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-blue-800">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Reach out to Dr. Huddar for consultations, inquiries, or to schedule an appointment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div 
            ref={contentRef}
            className="opacity-0"
          >
            <h2 className="heading-md mb-6 text-blue-800">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Consultation</h3>
                  <p className="text-gray-700">+91 22 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-gray-700">drhuddar@mentalhealthcare.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-blue-800" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Clinic Address</h3>
                  <p className="text-gray-700">
                    ABC Complex, Marine Drive, Mumbai
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            className="opacity-0 neo-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-800">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-800 text-white text-sm font-medium transition-colors hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div 
          ref={mapRef} 
          className="opacity-0 neo-card p-4 overflow-hidden"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-800 px-4">Find Us</h3>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
