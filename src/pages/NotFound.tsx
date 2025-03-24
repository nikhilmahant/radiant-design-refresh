
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="neo-card py-16 px-8 text-center max-w-md">
        <span className="inline-block text-6xl font-bold mb-6">404</span>
        <h1 className="heading-md mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-black text-white text-sm font-medium transition-colors hover:bg-gray-900"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
