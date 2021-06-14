import React from 'react';
import Modal from 'react-modal';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginAction } from '../Redux/actions/LoginAuthAction';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ErrorBox from '../layout/ErrorBox';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

Modal.setAppElement('#login');

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorHandler, setErrorHandler] = useState('');
  const authUser = useSelector(state => state.authUser);
  const { error, userInfo, loading } = authUser;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginAction(data));
  };

  useEffect(() => {
    setErrorHandler(error);
    setTimeout(() => {
      setErrorHandler('');
    }, 3000);

    if (!loading && userInfo) {
      closeModal();
    }
  }, [error, loading, userInfo]);

  return (
    <>
      <button type="button" onClick={openModal}>
        <AccountBoxIcon fontSize="large" /> <p>Sign In</p>
      </button>
      <Modal
        className="loginForm"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Sign In</h3>
          </div>
          <div className="loginForm__box">
            <PersonIcon fontSize="large" className="iconInput" />
            <input
              placeholder="Username"
              autoComplete="off"
              {...register('username', { required: true, maxLength: 20 })}
            />
          </div>
          <div className="loginForm__box">
            <LockIcon fontSize="large" className="iconInput" />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register('password', { required: true, minLength: 6 })}
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
          {errors.username && <ErrorBox error="Username is required" />}
          {errors.password && <ErrorBox error="Password is required" />}
          {errorHandler && <ErrorBox error={errorHandler} />}
          <div className="loginForm__create">
            <p>Don't have an account?</p>{' '}
            <Link onClick={closeModal} to="/register">
              Create one
            </Link>
          </div>
        </form>
      </Modal>
    </>
  );
}
