import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import {
  userChangePassword,
  userDetailsAction,
} from "../Redux/actions/UserAction";
import LoadingBox from "../layout/LoadingBox";
import ErrorBox from "../layout/ErrorBox";

import { USER_CHANGE_PASSWORD_RESET } from "../Redux/constants/UserConsants";

export default function ProfileChangePasswordScreen(props) {
  const [passwordError, setPasswordError] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userDetails);
  const { loading, userDetails, error } = userInfo;

  const userChangePasswordStore = useSelector(
    (state) => state.userChangePassword
  );
  const {
    loading: loadingChangePassword,
    success: successChangePassword,
    error: errorChangePassword,
  } = userChangePasswordStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, newPassword, repeatPassword } = data;
    if (newPassword === repeatPassword) {
      dispatch(userChangePassword({ password, newPassword }));
    } else {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 2000);
    }
  };

  const errorFormHandler = () => {
    if (Object.keys(errors)[0] !== undefined) {
      return <ErrorBox error={`${Object.keys(errors)[0]} is empty`} />;
    }
    return null;
  };

  useEffect(() => {
    dispatch(userDetailsAction());
    if (!loadingChangePassword && successChangePassword) {
      dispatch({ type: USER_CHANGE_PASSWORD_RESET });
      setPasswordSuccess(true);
      setTimeout(() => {
        setPasswordSuccess(false);
        props.history.push("/profile");
      }, 1500);
    }
  }, [dispatch, loadingChangePassword, props.history, successChangePassword]);

  return (
    <>
      <Title title="Change password" />
      <div className="profile">
        {loading || passwordSuccess ? (
          <LoadingBox />
        ) : error ? (
          <ErrorBox error={error} />
        ) : (
          <div className="profile-box profile-edit-box">
            <div className="profile__image">
              <img
                src={`http://localhost:4000/${userDetails.avatar}`}
                alt={userDetails.avatar}
              />
            </div>

            <div className="profile__back">
              <Link to="/profile">
                <ArrowBackIcon />
              </Link>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-item profile-item-form">
                <label>Password</label>
                <input
                  autoComplete="off"
                  placeholder="Your password"
                  type="password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-item profile-item-form">
                <label>New Password</label>
                <input
                  autoComplete="off"
                  placeholder="New password"
                  type="password"
                  {...register("newPassword", { required: true })}
                />
              </div>
              <small>Minimum length 8</small>
              <div className="form-item profile-item-form">
                <label>Re-Password</label>
                <input
                  autoComplete="off"
                  placeholder="Repeat new password"
                  type="password"
                  {...register("repeatPassword", { required: true })}
                />
              </div>

              <div className="form-item profile-item-form ">
                <button type="submit">Save</button>
              </div>
            </form>
            {passwordError && (
              <ErrorBox
                style={{ marginBottom: "1rem" }}
                error="Password and confirm password does not match"
              />
            )}
            {errorChangePassword && (
              <ErrorBox
                style={{ marginBottom: "1rem" }}
                error={errorChangePassword}
              />
            )}

            {errorFormHandler()}
          </div>
        )}
      </div>
    </>
  );
}
