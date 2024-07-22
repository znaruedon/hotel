import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../assets/css/SearchButton.css';

const SearchButton = () => {
  return (
    <button className="search-button">
      <FaSearch className="icon" />
      Search
    </button>
  );
};

export default SearchButton;
