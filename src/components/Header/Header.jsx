import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <div className="Header-List ">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="Header-title">A Lifetime of discounts? It's Genius</h1>
        <p className="Header-Desc">
          Get rewarder for your travels - unlock instant saving of 10% of money
          back with a free hotelbooking account.
        </p>
        <button className="Header-button">Sign in/ Register</button>
      </div>
    </div>
  );
}
