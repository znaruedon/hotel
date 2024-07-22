import React from 'react';
import '../assets/css/HotelDetails.css';

const HotelDetails = () => {
  return (
    <div className="hotel-details">
      <h3>THE LUXURY HOTEL</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <div className="staycation-offers">
        <h4>Staycation offers available</h4>
        <p>Get special benefits for your stay</p>
        <ul>
          <li>Food and Drinks</li>
          <li>Wellness</li>
          <li>Activities</li>
        </ul>
      </div>
    </div>
  );
};

export default HotelDetails;
