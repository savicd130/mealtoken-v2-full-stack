import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../layout/loading.gif";
import {
  userAvatarUpdate,
  userDetailsAction,
} from "../Redux/actions/UserAction";
import { USER_AVATAR_UPDATE_RESET } from "../Redux/constants/UserConsants";

import ErrorBox from "../layout/ErrorBox";
import LoadingBox from "../layout/LoadingBox";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

export default function ProfileScreen() {
  const [changeProfileImg, setChangeProfileImg] = useState(false);
  const [avatarErrorState, setAvatarErrorState] = useState(false);
  const [avatarSuccessState, setAvatarSuccessState] = useState(false);
  const [avatarFile, setAvatarFile] = useState([]);
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userDetails);
  const { loading, userDetails, error } = userInfo;

  const userAvatarRed = useSelector((state) => state.userAvatarUpdate);

  const {
    loading: loadingUpdateAvatar,
    success: successUpdateAvatar,
    error: errorUpdateAvatar,
  } = userAvatarRed;

  let formData = new FormData();
  formData.append("avatar", avatarFile[0]);

  const changeAvatarHandler = (e) => {
    e.preventDefault();
    if (avatarFile.length === 0) {
      setAvatarErrorState(true);
      return;
    }
    dispatch(userAvatarUpdate(formData));
  };

  useEffect(() => {
    if (!loadingUpdateAvatar && successUpdateAvatar) {
      setAvatarSuccessState(true);
      setChangeProfileImg(false);

      setTimeout(() => {
        setAvatarSuccessState(false);
        dispatch({ type: USER_AVATAR_UPDATE_RESET });
      }, 1000);
    }
    dispatch(userDetailsAction());
  }, [dispatch, loadingUpdateAvatar, successUpdateAvatar]);

  return (
    <>
      <Title title="Profile" />
      <div className="profile">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <ErrorBox error={error} />
        ) : (
          <div className="profile-box">
            <div className="profile__image">
              <img
                src={
                  avatarSuccessState
                    ? loadingGif
                    : `http://localhost:4000/${
                        userDetails.avatar
                      }?${new Date().getTime()}`
                }
                alt={userDetails.avatar}
              />

              {!changeProfileImg && (
                <button
                  onClick={() => setChangeProfileImg(true)}
                  className="profile-upload"
                >
                  Change Photo
                </button>
              )}
            </div>

            {changeProfileImg && (
              <form onSubmit={changeAvatarHandler} className="profile__change">
                <Button label="My Label">
                  <input
                    type="file"
                    onChange={(e) => setAvatarFile(e.target.files)}
                  />
                </Button>
                <p>*Image must be .jpg format and size max 1mb</p>
                <div className="profile__change-btn">
                  <button
                    type="button"
                    onClick={() => {
                      setAvatarErrorState(false);
                      setChangeProfileImg(false);
                    }}
                    className="profile__change-btn-no"
                  >
                    <CloseIcon />
                  </button>
                  <button
                    type="submit"
                    onSubmit={changeAvatarHandler}
                    className="profile__change-btn-yes"
                  >
                    <CheckIcon />
                  </button>
                </div>
                {avatarErrorState && <ErrorBox error="Empty Field Picture" />}
                {errorUpdateAvatar && <ErrorBox error={errorUpdateAvatar} />}
              </form>
            )}

            <div className="profile__info">
              <h3>First name:</h3>
              <h3>
                <strong>{userDetails.firstName}</strong>
              </h3>
            </div>
            <div className="profile__info">
              <h3>Last name:</h3>
              <h3>
                <strong>{userDetails.lastName}</strong>
              </h3>
            </div>
            <div className="profile__info">
              <h3>Email:</h3>
              <h3>
                <strong>{userDetails.email}</strong>
              </h3>
            </div>
            <div className="profile__info">
              <h3>Username:</h3>
              <h3>
                <strong>{userDetails.username}</strong>
              </h3>
            </div>
            <div className="profile__buttons">
              <Link to="/profile/changepassword" className="btn-secondary">
                Change password
              </Link>
              <Link to="/profile/edit" className="btn-primary">
                Edit profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
