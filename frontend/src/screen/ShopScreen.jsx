import React from "react";
import Title from "../components/Title";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom";

export default function ShopScreen() {
  return (
    <>
      <Title title="shop" />

      <div className="shop">
        <div className="shop__cart">
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart-item">
                <td className="cart-close-icon">
                  <button>
                    <CancelIcon className="cart-cancel-icon" fontSize="large" />
                  </button>
                </td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">
                  <button>
                    <AddIcon fontSize="large" />
                  </button>
                  <p>1</p>
                  <button>
                    <RemoveIcon fontSize="large" />
                  </button>
                </td>
                <td>$2.60</td>
              </tr>
              <tr className="cart-item">
                <td className="cart-close-icon">
                  <button>
                    <CancelIcon className="cart-cancel-icon" fontSize="large" />
                  </button>
                </td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">
                  <button>
                    <AddIcon fontSize="large" />
                  </button>
                  <p>1</p>
                  <button>
                    <RemoveIcon fontSize="large" />
                  </button>
                </td>
                <td>$2.60</td>
              </tr>
              <tr className="cart-item">
                <td className="cart-close-icon">
                  <button>
                    <CancelIcon className="cart-cancel-icon" fontSize="large" />
                  </button>
                </td>
                <td className="cart-img">
                  <img src="./images/hot-sales/1.gif" alt="1" />
                </td>
                <td className="cart-title">Saporita</td>
                <td>$2.60</td>
                <td className="cart-qty">
                  <button>
                    <AddIcon fontSize="large" />
                  </button>
                  <p>1</p>
                  <button>
                    <RemoveIcon fontSize="large" />
                  </button>
                </td>
                <td>$2.60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shop__totals">
          <div className="shop__totals--box">
            <div className="shop__totals--cupon mb-2">
              <input placeholder="Cupon code" type="text" />
              <button>Submit</button>
            </div>
          </div>
          <div className="shop__totals--box">
            <h2>Order Summary</h2>
            <div className="shop__totals--item">
              <p>Items</p> <strong>$10.00</strong>
            </div>
            <div className="shop__totals--item">
              <p>Shipping</p> <strong>$10.00</strong>
            </div>{" "}
            <div className="shop__totals--item">
              <p>Tax</p> <strong>$10.00</strong>
            </div>{" "}
            <div className="shop__totals--item">
              <p>Bonus cupon</p> <strong>$10.00</strong>
            </div>{" "}
            <div className="shop__totals--item">
              <p>Total</p> <strong>$10.00</strong>
            </div>
            <Link>Place order</Link>
          </div>
        </div>
      </div>
    </>
  );
}
