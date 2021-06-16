import axios from 'axios';
import {
  PRODUCTS_BY_CATEGORY_FAIL,
  PRODUCTS_BY_CATEGORY_REQUEST,
  PRODUCTS_BY_CATEGORY_SUCCESS,
} from '../constants/ProductsConstants';

export const productsByCategoryAction = category => async dispatch => {
  dispatch({ type: PRODUCTS_BY_CATEGORY_REQUEST });
  try {
    const { data } = await axios.get(`/api/product/${category}`);
    dispatch({ type: PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.error
          : error.response,
    });
  }
};
