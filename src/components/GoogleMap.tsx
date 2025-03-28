
import React, { useEffect, useRef } from 'react';

// Add type declarations for the Google Maps API
declare global {
  interface Window {
    google: any;
    initGoogleMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize the Google Map
    const initMap = () => {
      if (!mapRef.current) return;
      
      // Mumbai coordinates (approximate for Marine Drive)
      const location = { lat: 18.9442, lng: 72.8234 };
      
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [{ "weight": "2.00" }]
          },
          {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "color": "#d1e8ff" }]
          }
        ]
      });
      
      // Add a marker for the clinic
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Dr. Huddar\'s Clinic',
        animation: window.google.maps.Animation.DROP,
      });
    };
    
    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initGoogleMap`;
      script.async = true;
      script.defer = true;
      window.initGoogleMap = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
    
    return () => {
      // Clean up
      window.initGoogleMap = null;
    };
  }, []);
  
  return (
    <div 
      ref={mapRef} 
      className="h-[350px] w-full rounded-lg shadow-subtle overflow-hidden"
    />
  );
};

export default GoogleMap;
