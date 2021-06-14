import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function UserRoute({ component: Component, ...rest }) {
  const authUser = useSelector(state => state.authUser);
  const { userInfo } = authUser;
  return (
    <Route
      {...rest}
      render={props =>
        userInfo ? <Component {...props}></Component> : <Redirect to="/" />
      }
    ></Route>
  );
}
