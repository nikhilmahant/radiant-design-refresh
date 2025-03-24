
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-bold">Aesthetic</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-xs">
              Beautiful design that focuses on simplicity and functionality.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">PRODUCT</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'Releases'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {['About', 'Team', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">LEGAL</h3>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'License', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © {currentYear} Aesthetic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
