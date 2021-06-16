import axios from "axios";
import { USER_LOGIN_SUCCESS } from "../constants/LoginAuthConstants";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_AVATAR_UPDATE_REQUEST,
  USER_AVATAR_UPDATE_SUCCESS,
  USER_AVATAR_UPDATE_FAIL,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
} from "../constants/UserConsants";

export const registerAction =
  ({ firstName, lastName, password, username, email }) =>
  async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: { firstName, lastName, password, username, email },
    });

    try {
      const { data } = await axios.post(
        "http://127.0.0.1:4000/api/user/register",
        {
          firstName,
          lastName,
          password,
          username,
          email,
        }
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("authUser", JSON.stringify(data));
    } catch (error) {
      console.log(error.response.data.data);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.response,
      });
    }
  };

export const userDetailsAction = () => async (dispatch, getState) => {
  dispatch({ type: USER_DETAILS_REQUEST });
  const {
    authUser: { userInfo },
  } = getState();

  try {
    const { data } = await axios.get(`/api/user/me`, {
      headers: {
        authorization: userInfo.token,
      },
    });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.error
          : error.response,
    });
  }
};

export const userDetailsUpdate =
  (updateDetails) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_UPDATE_REQUEST });
    const {
      authUser: { userInfo },
    } = getState();

    try {
      const { data } = await axios.put(`/api/user/me/update`, updateDetails, {
        headers: {
          authorization: userInfo.token,
        },
      });

      dispatch({ type: USER_DETAILS_UPDATE_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("authUser", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_DETAILS_UPDATE_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.error
            : error.response,
      });
    }
  };

export const userAvatarUpdate = (avatarFile) => async (dispatch, getState) => {
  dispatch({ type: USER_AVATAR_UPDATE_REQUEST });
  const {
    authUser: { userInfo },
  } = getState();

  try {
    const { data } = await axios.post(`/api/user/me/avatar`, avatarFile, {
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: userInfo.token,
      },
    });

    dispatch({ type: USER_AVATAR_UPDATE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("authUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_AVATAR_UPDATE_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.error
          : error.response,
    });
  }
};

export const userChangePassword = (passwords) => async (dispatch, getState) => {
  dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });
  const {
    authUser: { userInfo },
  } = getState();

  try {
    const { data } = await axios.put(`/api/user/me/changepassword`, passwords, {
      headers: {
        authorization: userInfo.token,
      },
    });
    dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("authUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_CHANGE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.error
          : error.response,
    });
  }
};
