
import React, { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Experience from '../components/Experience';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        const element = document.querySelector(id as string);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main>
        <About />
        <Expertise />
        <Experience />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
