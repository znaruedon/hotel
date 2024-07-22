import React from 'react';
import '../assets/css/LocationMap.css';

const LocationMap = () => {
  return (
    <div className="location-map">
      <h4>Where's The Luxury Hotel</h4>
      <div className="map">
        <iframe
          title="hotel-location"
          src="https://www.google.com/maps/embed?..."
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
