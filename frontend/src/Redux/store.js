import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/LoginAuthReducer';
import { productsByCategoryReducer } from './reducers/ProductsReducer';
import {
  registerReducer,
  userAvatarUpdateReducer,
  userChangePasswordReducer,
  userDetailsReducer,
  userDetailsUpdateReducer,
} from './reducers/UserReducer';

const initalState = {
  authUser: {
    userInfo: localStorage.getItem('authUser')
      ? JSON.parse(localStorage.getItem('authUser'))
      : null,
  },
};
const reducer = combineReducers({
  authUser: loginReducer,
  registerUser: registerReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userDetailsUpdateReducer,
  userAvatarUpdate: userAvatarUpdateReducer,
  userChangePassword: userChangePasswordReducer,
  productsByCategory: productsByCategoryReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initalState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
