import React from 'react';
import '../assets/css/Room.css';
import roomImage1 from '../assets/images/rooms/room1.jpg';
import roomImage2 from '../assets/images/rooms/room2.jpg';

const Room = () => {
  return (
    <div className="room">
      <h4>Superior Modern</h4>
      <img src={roomImage1} alt="Room 1" />
      <p>Room Option(s): 2 Guests</p>
      <button className="choose-button">Choose</button>
      <h4>Business Suite</h4>
      <img src={roomImage2} alt="Room 2" />
      <p>Room Option(s): 2 Guests</p>
      <button className="choose-button">Choose</button>
    </div>
  );
};

export default Room;
