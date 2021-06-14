import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_UPDATE_REQUEST,
  USER_DETAILS_UPDATE_SUCCESS,
  USER_DETAILS_UPDATE_FAIL,
  USER_AVATAR_UPDATE_REQUEST,
  USER_AVATAR_UPDATE_SUCCESS,
  USER_AVATAR_UPDATE_FAIL,
  USER_AVATAR_UPDATE_RESET,
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  USER_CHANGE_PASSWORD_RESET,
  USER_DETAILS_UPDATE_RESET,
} from "../constants/UserConsants";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, userDetails: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsUpdateReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_DETAILS_UPDATE_REQUEST:
      return { loading: true };
    case USER_DETAILS_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userUpdateDetails: action.payload,
      };
    case USER_DETAILS_UPDATE_RESET:
      return {};
    case USER_DETAILS_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAvatarUpdateReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case USER_AVATAR_UPDATE_REQUEST:
      return { loading: true };
    case USER_AVATAR_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userUpdateDetails: action.payload,
      };
    case USER_AVATAR_UPDATE_RESET:
      return {};
    case USER_AVATAR_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userChangePasswordReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case USER_CHANGE_PASSWORD_REQUEST:
      return { loading: true };
    case USER_CHANGE_PASSWORD_SUCCESS:
      return {
        loading: false,
        success: true,
        userChangePassword: action.payload,
      };
    case USER_CHANGE_PASSWORD_RESET:
      return {};
    case USER_CHANGE_PASSWORD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
