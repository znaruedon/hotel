import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/RoomInput.css';
import { FaChevronDown } from 'react-icons/fa';

const RoomInput = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const increase = (setter, value) => setter(value + 1);
  const decrease = (setter, value) => setter(value > 0 ? value - 1 : value);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="room-input-container">
      <div className="room-input" onClick={() => setIsPopupOpen(!isPopupOpen)}>
        <FaChevronDown className="icon" />
        <div>
          <div>{adults} Adult{adults > 1 ? 's' : ''}</div>
          <div>{rooms} room{rooms > 1 ? 's' : ''}</div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="room-popup" ref={popupRef}>
          <div className="room-popup-section">
            <div className="room-popup-section-inner">
              <span className="label">Room</span>
              <div className="counter">
                <button onClick={() => decrease(setRooms, rooms)} disabled={rooms <= 1}>-</button>
                <span>{rooms}</span>
                <button onClick={() => increase(setRooms, rooms)}>+</button>
              </div>
            </div>
            <span className="age-info">&nbsp;&nbsp;</span>
          </div>
          <div className="room-popup-section">
            <div className="room-popup-section-inner">
              <span className="label">Adults</span>
              <div className="counter">
                <button onClick={() => decrease(setAdults, adults)} disabled={adults <= 1}>-</button>
                <span>{adults}</span>
                <button onClick={() => increase(setAdults, adults)}>+</button>
              </div>
            </div>
            <span className="age-info">Age 18 or above</span>
          </div>
          <div className="room-popup-section">
            <div className="room-popup-section-inner">
              <span className="label">Children</span>
              <div className="counter">
                <button onClick={() => decrease(setChildren, children)} disabled={children <= 0}>-</button>
                <span>{children}</span>
                <button onClick={() => increase(setChildren, children)}>+</button>
              </div>
            </div>
            <span className="age-info">Age 0-17</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomInput;
