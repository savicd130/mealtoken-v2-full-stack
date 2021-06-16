import {
  PRODUCTS_BY_CATEGORY_FAIL,
  PRODUCTS_BY_CATEGORY_REQUEST,
  PRODUCTS_BY_CATEGORY_RESET,
  PRODUCTS_BY_CATEGORY_SUCCESS,
} from '../constants/ProductsConstants';

export const productsByCategoryReducer = (
  state = { loading: true },
  action
) => {
  switch (action.type) {
    case PRODUCTS_BY_CATEGORY_REQUEST:
      return { loading: true };
    case PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
        products: action.payload,
      };
    case PRODUCTS_BY_CATEGORY_RESET:
      return {};
    case PRODUCTS_BY_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
