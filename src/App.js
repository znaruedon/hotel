import React from 'react';
import Header from './components/Header';
import HotelOverview from './components/HotelOverview';
import HotelDetails from './components/HotelDetails';
import Facilities from './components/Facilities';
import Room from './components/Room';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="app">

      <Header />
      <div className="content">
        <HotelOverview />
        <HotelDetails />
        <Facilities />
        <Room />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
};

export default App;
