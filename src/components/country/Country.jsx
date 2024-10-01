import React, { useState } from 'react';
import './Country.css'; // CSS file for styling (optional)

const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "India", "France", "Japan"];

const Country = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select a country");

  // Toggle the dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle the country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="country-dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedCountry} ▼
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {countries.map((country, index) => (
            <li key={index} onClick={() => handleCountrySelect(country)} className="dropdown-item">
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Country;
