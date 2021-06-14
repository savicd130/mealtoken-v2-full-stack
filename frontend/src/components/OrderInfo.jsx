import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function OrderInfo() {
  return (
    <div className="order-info">
      <div className="container-home">
        <div className="order-info__box">
          <div>
            <h6>GET YOUR PIZZA DELIVERED!</h6>
            <p>ENJOY OUR LUSCIOUS DISHES WHEREVER YOU WANT</p>
          </div>
          <Link>
            Make an order now <ChevronRightIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
}
