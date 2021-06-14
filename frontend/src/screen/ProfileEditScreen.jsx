import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../layout/LoadingBox";
import ErrorBox from "../layout/ErrorBox";
import {
  userDetailsAction,
  userDetailsUpdate,
} from "../Redux/actions/UserAction";

import { USER_DETAILS_UPDATE_RESET } from "../Redux/constants/UserConsants";

export default function ProfileEditScreen(props) {
  const [editSuccess, setEditSuccess] = useState(false);

  const dispatch = useDispatch();
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success,
  } = userUpdateProfile;

  const userInfo = useSelector((state) => state.userDetails);
  const { loading, userDetails, error } = userInfo;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const errorFormHandler = () => {
    if (Object.keys(errors)[0] !== undefined) {
      return <ErrorBox error={`${Object.keys(errors)[0]} is empty`} />;
    }
    return null;
  };

  const onSubmit = (data) => {
    const { firstName, lastName, email, username } = data;
    dispatch(userDetailsUpdate({ firstName, lastName, email, username }));
  };

  useEffect(() => {
    dispatch(userDetailsAction());
    if (!loadingUpdate && success) {
      dispatch({ type: USER_DETAILS_UPDATE_RESET });
      setEditSuccess(true);
      setTimeout(() => {
        setEditSuccess(false);
        props.history.push("/profile");
      }, 1000);
    }
  }, [dispatch, loadingUpdate, props.history, success]);

  return (
    <>
      <Title title="Profile edit" />
      <div className="profile">
        {loading || editSuccess ? (
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
                <label>First name</label>
                <input
                  autoComplete="off"
                  placeholder="First Name"
                  type="text"
                  onLoad={setValue("firstName", userDetails.firstName)}
                  {...register("firstName", { required: true })}
                />
              </div>
              <div className="form-item profile-item-form">
                <label>Last name</label>
                <input
                  autoComplete="off"
                  placeholder="Last Name"
                  type="text"
                  onLoad={setValue("lastName", userDetails.lastName)}
                  {...register("lastName", { required: true })}
                />
              </div>
              <div className="form-item profile-item-form">
                <label>Email</label>
                <input
                  autoComplete="off"
                  placeholder="Your email"
                  type="email"
                  onLoad={setValue("email", userDetails.email)}
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-item profile-item-form">
                <label>Username</label>
                <input
                  autoComplete="off"
                  placeholder="Username"
                  type="text"
                  onLoad={setValue("username", userDetails.username)}
                  {...register("username", { required: true })}
                />
              </div>
              <div className="form-item profile-item-form ">
                <button type="submit">Save</button>
              </div>
            </form>
            <div style={{ marginBottom: "1rem" }} className="errors-edit">
              {errorUpdate && <ErrorBox error={errorUpdate} />}
              {errorFormHandler()}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
