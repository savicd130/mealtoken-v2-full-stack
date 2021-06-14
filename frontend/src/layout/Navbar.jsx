import React, { useState } from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../Redux/actions/LoginAuthAction";
import PeopleIcon from "@material-ui/icons/People";
import DescriptionIcon from "@material-ui/icons/Description";
import LoadingBoxFullScreen from "./LoadingBoxFullScreen";

export default function Navbar() {
  const [loadingLogout, setLoadingLogout] = useState(false);

  const authUser = useSelector((state) => state.authUser);

  const { loading, userInfo } = authUser;
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
    setLoadingLogout(true);
    setTimeout(() => {
      setLoadingLogout(false);
    }, 500);
  };

  return (
    <>
      {(loadingLogout || loading) && <LoadingBoxFullScreen />}

      <nav className="navigation">
        <div className="nav">
          {userInfo ? (
            <div className="nav__user">
              <div className="nav__user--menu">
                <div className="account-menu">
                  <img
                    src={`http://localhost:4000/${
                      userInfo.avatar
                    }?${new Date().getTime()}`}
                    alt={userInfo.avatar}
                  />
                </div>
                <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                <ExpandMoreIcon fontSize="large" />
                <ul className="user__dropdown">
                  <li>
                    <Link to="/profile">
                      <PersonIcon fontSize="large" /> <p>Profile</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders">
                      <LocalShippingIcon fontSize="large" /> <p>Orders</p>
                    </Link>
                  </li>
                  {userInfo.admin && (
                    <>
                      <li>
                        <Link to="/users">
                          <PeopleIcon fontSize="large" /> <p>Users</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/users">
                          <DescriptionIcon fontSize="large" /> <p>Products</p>
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link onClick={() => logout()} to="#">
                      <ExitToAppIcon fontSize="large" /> <p>Sign Out</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="nav__phone">
              <PhoneAndroidIcon className="phone-icon" />
              <div>
                <p>+0 123 45 67</p>
                <p>8:00 am – 11:30 pm</p>
              </div>
            </div>
          )}

          <div className="nav__logo col-2">
            <img src="/images/logoMeal.png" alt="logo" />
          </div>
          <div className="nav__cart">
            <Link to="/shop" className="nav__cart--box">
              <div>
                <p>$0.00</p>
                <p>0 items</p>
              </div>
              <Badge badgeContent={4}>
                {false ? (
                  <ShoppingCartOutlinedIcon className="cart-icon" />
                ) : (
                  <ShoppingCartIcon className="cart-icon" />
                )}
              </Badge>
            </Link>
          </div>
        </div>
        <div className="tabs">
          <ul>
            <li>
              <Link to="/" className="btn">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="btn">
                Menu
              </Link>
            </li>
            <li>
              <Link to="about" className="btn">
                About
              </Link>
            </li>
            <li>
              <Link to="shop" className="btn">
                Shop
              </Link>
            </li>
            <li>
              <Link to="contact" className="btn">
                Contact
              </Link>
            </li>
          </ul>
          {!loading && userInfo ? null : (
            <div className="tabs__signin">
              <Login />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
