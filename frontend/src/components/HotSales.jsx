import React from "react";
import { Link } from "react-router-dom";

export default function HotSales() {
  return (
    <div className="hot-sales">
      <div className="container-home">
        <h5>HOT SALES</h5>
        <div className="hot-sales__products">
          <Link className="hot-sales__products--box">
            <img src="./images/hot-sales/1.gif" alt="prod1" />
            <h3>Carbonara</h3>
            <p>
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian...
            </p>
            <h4>$3.60</h4>
          </Link>
          <Link className="hot-sales__products--box">
            <img src="./images/hot-sales/2.gif" alt="prod1" />
            <h3>CAPRICCIOSA</h3>
            <p>
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian...
            </p>
            <h4>$3.20</h4>
          </Link>
          <Link className="hot-sales__products--box">
            <img src="./images/hot-sales/3.gif" alt="prod1" />
            <h3>PROSCIUTTO</h3>
            <p>
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian...
            </p>
            <h4>$4.00</h4>
          </Link>
          <Link className="hot-sales__products--box">
            <img src="./images/hot-sales/4.gif" alt="prod1" />
            <h3>DIABLO</h3>
            <p>
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian...
            </p>
            <h4>$2.70</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
