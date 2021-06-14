import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-grid">
      <Slider className="slider" {...settings}>
        <div style={{ height: "100%" }}>
          <div className="slider-content">
            <div className="slider-content--left">
              <h1>Meal Token Pizza</h1>
              <h2>Make people happy</h2>
              <div className="line" />
              <p>Italian pizza with Cherry Tomatoes and Green Basil</p>
              <div className="slider-content--btns">
                <Link className="btn-secondary" to="cart">
                  Order Now
                  <ChevronRightIcon fontSize="large" />
                </Link>
                <Link className="btn-primary" to="menu">
                  View menu
                  <ChevronRightIcon fontSize="large" />
                </Link>
              </div>
            </div>
            <div className="slider-content--right">
              <img src="./images/pizza_2.png" alt="pizza1" />
            </div>
          </div>
        </div>
        <div>
          <div className="slider-content">
            <div className="slider-content--left">
              <h1>The Crispy Crust Pizzeria </h1>
              <h2>Make people happy</h2>
              <div className="line" />
              <p>Italian pizza with Cherry Tomatoes and Onion</p>
              <div className="slider-content--btns">
                <Link className="btn-secondary" to="cart">
                  Order Now
                  <ChevronRightIcon fontSize="large" />
                </Link>
                <Link className="btn-primary" to="menu">
                  View menu
                  <ChevronRightIcon fontSize="large" />
                </Link>
              </div>
            </div>
            <div className="slider-content--right">
              <img src="./images/pizza_1.png" alt="pizza1" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
