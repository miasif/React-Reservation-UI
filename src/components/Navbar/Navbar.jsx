import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavContainer">
        <span className="Navbar-logo">HotelBoking</span>
        <div className="Navbar-menu">
          <button className="navbar-button">Register</button>
          <button className="navbar-button">Login</button>
        </div>
      </div>
    </div>
  );
}
