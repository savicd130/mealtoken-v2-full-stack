import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/LoginAuthConstants';
import { USER_REGISTER_RESET } from '../constants/UserConsants';

export const loginAction =
  ({ username, password }) =>
  async dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { username, password } });
    try {
      const { data } = await axios.post('/api/auth/login', {
        username,
        password,
      });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem('authUser', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response,
      });
    }
  };

export const logoutAction = () => dispatch => {
  localStorage.removeItem('authUser');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_REGISTER_RESET });
};
