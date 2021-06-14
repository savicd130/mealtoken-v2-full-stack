import React from "react";
import Title from "../components/Title";
import OrderInfo from "../components/OrderInfo";
import { Link } from "react-router-dom";

export default function AboutScreen() {
  return (
    <>
      <Title title="About our restaurant" />

      <div className="about-img" />

      <div className="about">
        <div className="about__content">
          <h3>WE ARE MEAL TOKEN</h3>
          <h4>
            WE DON’T JUST MAKE PIZZA. WE MAKE PEOPLE’S DAYS. VINCENT PIZZERIA
            WAS BUILT ON THE BELIEF THAT PIZZA SHOULD BE SPECIAL, AND WE CARRY
            THAT BELIEF INTO EVERYTHING WE DO.
          </h4>

          <img src="./images/separator.png" alt="sep" />
          <p>
            With more than 50 years of experience under our belts, we understand
            how to best serve our customers through tried and true service
            principles. Instead of following trends, we set them. We create food
            we’re proud to serve and deliver it fast, with a smile. No matter
            where you find us, we’re making sure each meal our customers enjoy
            is delicious and one-of-a-kind.
          </p>
        </div>

        <div className="about__address">
          <div className="about__address--box">
            <img src="./images/address1.jpg" alt="address1" />
            <h2>BROOKLYN</h2>
            <div>
              <p>St Johns Pl/Nostrand Av, Brooklyn, NY 11216, USA</p>

              <p>+1 215 456 15 15 brooklyn@vincent.com</p>
            </div>

            <Link>Contact us</Link>
          </div>
          <div className="about__address--box">
            <img src="./images/address2.jpg" alt="address1" />
            <h2>QUEENS</h2>
            <div>
              <p>St Johns Pl/Nostrand Av, Brooklyn, NY 11216, USA</p>

              <p>+1 215 456 15 15 brooklyn@vincent.com</p>
            </div>

            <Link>Contact us</Link>
          </div>
        </div>
      </div>

      <OrderInfo />
    </>
  );
}
