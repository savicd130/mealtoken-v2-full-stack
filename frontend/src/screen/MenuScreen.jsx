import React from "react";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Title from "../components/Title";

export default function MenuScreen(props) {
  console.log(props.location);

  return (
    <>
      <Title title="Discover our menu" />

      <div className="menu">
        <div className="menu__nav">
          <ul>
            <li>
              <Link>Burgers</Link>
            </li>
            <li>
              <Link>Desserts</Link>
            </li>
            <li>
              <Link>Drinks</Link>
            </li>
            <li>
              <Link>Pasta</Link>
            </li>
            <li>
              <Link className="active">Pizzas</Link>
            </li>
            <li>
              <Link>Salads</Link>
            </li>
          </ul>
        </div>

        <div className="menu__content">
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/2.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/3.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/4.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/4.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/3.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/2.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
          <div className="menu__content--box">
            <div className="menu__content--cart">
              <img src="./images/hot-sales/1.gif" alt="prod1" />
              <button
                onClick={(e) => {
                  console.log("cart");
                }}
                className="menu__content--cart__btn"
              >
                <ShoppingCartIcon className="menu__content--cart__icon" />
              </button>
            </div>

            <Link
              className="menu__content--footer"
              onClick={(e) => {
                console.log("link");
              }}
            >
              <h3>Carbonara</h3>
              <p>
                Classic marinara sauce, authentic old-world pepperoni,
                all-natural Italian...
              </p>
              <h4>$3.60</h4>
            </Link>
          </div>
        </div>
      </div>

      <Info />
    </>
  );
}
