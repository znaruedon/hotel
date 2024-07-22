import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/css/LocationInput.css';

const LocationInput = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [location, setLocation] = useState('City, Hotel, Place to go');
  const popupRef = useRef();

  const handleLocationClick = (newLocation) => {
    setLocation(newLocation);
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="location-input-container">
      <div className="location-input" onClick={() => setShowPopup(true)}>
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          value={location}
          placeholder="City, Hotel, Place to go"
          readOnly
        />
      </div>
      {showPopup && (
        <div className="location-popup" ref={popupRef}>
          <div className="location-option" onClick={() => handleLocationClick('Pattaya, The Luxury Hotel, Chonburi, Thailand')}>
            <div>
              <strong>Pattaya</strong>
              <p>Chonburi, Thailand</p>
            </div>
            <button>District / City</button>
          </div>
          <div className="location-option" onClick={() => handleLocationClick('Bangkok, Thailand')}>
            <div>
              <strong>Bangkok</strong>
              <p>Thailand</p>
            </div>
            <button>District / City</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
