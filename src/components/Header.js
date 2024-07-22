import React, { useState } from 'react';
import CheckInput from './CheckInput';
import LocationInput from './LocationInput';
import RoomInput from './RoomInput';
import SearchButton from './SearchButton';
import '../assets/css/Header.css';
import Logo from '../assets/images/header/logo.png';
import iconCheckIn from '../assets/images/header/icon_check-in.png';
import iconCheckOut from '../assets/images/header/icon_check-out.png';

const Header = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-menu">
          <ul>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Airport Transfer</li>
            <li>Car Rental</li>
            <li>Things to Do</li>
          </ul>
        </div>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </div>
      <div className="search-bar">
        <LocationInput />
        <div className="check-input-wrapper">
          <CheckInput
            selectedDate={startDate}
            setSelectedDate={setStartDate}
            placeholderText="Check-in"
            icon={iconCheckIn}
            selectsStart={true}
            startDate={startDate}
            endDate={endDate}
          />
          <CheckInput
            selectedDate={endDate}
            setSelectedDate={setEndDate}
            placeholderText="Check-out"
            icon={iconCheckOut}
            selectsStart={false}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <RoomInput />
        <SearchButton />
      </div>
    </div>
  );
};

export default Header;
