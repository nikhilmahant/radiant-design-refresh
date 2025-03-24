
import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add('animate-slide-right');
            } else if (entry.target === formRef.current) {
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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="opacity-0"
          >
            <h2 className="heading-lg mb-6">Get in touch</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              Have questions about our products or pricing? Need a demo? Our team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5 19.5 16 15.5 16 12C16 8.5 14.5 4.5 12 2M12 22C9.5 19.5 8 15.5 8 12C8 8.5 9.5 4.5 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit us</h3>
                  <p className="text-sm text-gray-600">
                    123 Design Street<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.84C22 20.36 21.8 20.86 21.46 21.26C21.12 21.66 20.64 21.88 20.12 21.9C18.28 22.06 16.4 21.66 14.72 20.76C13.12 19.92 11.72 18.72 10.52 17.26C9.36 15.86 8.44 14.24 7.84 12.46C7.28 10.68 7.16 8.78 7.52 6.96C7.62 6.46 7.9 6 8.32 5.66C8.74 5.32 9.26 5.14 9.78 5.12H12.9C13.88 5.1 14.74 5.82 14.98 6.78C15.12 7.38 15.32 7.96 15.6 8.5C15.86 8.98 15.8 9.56 15.46 9.96L14.06 11.36C15.08 12.98 16.5 14.38 18.12 15.42L19.52 14.02C19.92 13.68 20.5 13.62 20.98 13.88C21.52 14.16 22.1 14.36 22.7 14.5C23.68 14.74 24.4 15.62 24.36 16.62L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call us</h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email us</h3>
                  <p className="text-sm text-gray-600">hello@aesthetic.design</p>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            className="opacity-0 neo-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
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
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-black text-white text-sm font-medium transition-colors hover:bg-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
