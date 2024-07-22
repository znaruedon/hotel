import React from 'react';
import '../assets/css/HotelOverview.css';
import hotelImage1 from '../assets/images/hotels/hotel1.jpg';
import hotelImage2 from '../assets/images/hotels/hotel2.jpg';

const HotelOverview = () => {
  return (
    <div className="hotel-overview">
      <h2>The Luxury Hotel</h2>
      <div className="hotel-images">
        <img src={hotelImage1} alt="Hotel 1" />
        <img src={hotelImage2} alt="Hotel 2" />
      </div>
      <button className="view-deal-button">View This Deal</button>
    </div>
  );
};

export default HotelOverview;
