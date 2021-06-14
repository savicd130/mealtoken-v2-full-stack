import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const smoothScrool = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="footer__box">
      <img src="/images/logoMeal.png" alt="logo" />
      <div className="footer__info">
        <p>+1 215 456 15 15.</p> <span>8:00 am – 11:30 pm</span>
      </div>

      <div className="tabs">
        <ul>
          <li>
            <Link onClick={smoothScrool} to="/" className="btn">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={smoothScrool} to="/menu" className="btn">
              Menu
            </Link>
          </li>
          <li>
            <Link onClick={smoothScrool} to="about" className="btn">
              About
            </Link>
          </li>
          <li>
            <Link onClick={smoothScrool} to="shop" className="btn">
              Shop
            </Link>
          </li>
          <li>
            <Link onClick={smoothScrool} to="contact" className="btn">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <p className="copyright">
        Copyright © 2021 Meal Token. All Rights Reserved.
      </p>
    </div>
  );
}
