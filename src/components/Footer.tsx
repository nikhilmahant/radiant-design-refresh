
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-8 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Dr. Sudheendra Huddar. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-600 text-sm">
              Built by <span className="font-medium">Nikhil Mahant</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
