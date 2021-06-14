import React, { useEffect } from "react";
import Title from "../components/Title";
import { useForm } from "react-hook-form";
import Newsletter from "../components/Newsletter";
import ErrorBox from "../layout/ErrorBox";
import LoadingBox from "../layout/LoadingBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../Redux/actions/UserAction";
import LoadingBoxFullScreen from "../layout/LoadingBoxFullScreen";

export default function RegisterScreen(props) {
  const [passwordError, setPasswordError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const registerUser = useSelector((state) => state.registerUser);

  const { loading, userInfo, error } = registerUser;

  const onSubmit = (data) => {
    if (data.password === data.repeatPassword) {
      dispatch(registerAction({ ...data }));
    } else {
      setPasswordError(true);
      setTimeout(() => {
        setPasswordError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!loading && userInfo) {
      setRegisterSuccess(true);
      setTimeout(() => {
        setRegisterSuccess(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        props.history.push("/");
      }, 2000);
    }
  }, [loading, props.history, userInfo]);

  return (
    <>
      <Title title="register" />
      <div className="register">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {registerSuccess && <LoadingBoxFullScreen />}
          <h3>Create account</h3>
          <div className="form-item">
            <label>First name</label>
            <input
              autoComplete="off"
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="First name is required"
              />
            )}
          </div>
          <div className="form-item">
            <label>Last name</label>
            <input
              autoComplete="off"
              placeholder="Last Name"
              type="text"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="Last name is required"
              />
            )}
          </div>
          <div className="form-item">
            <label>Email</label>
            <input
              autoComplete="off"
              placeholder="Your email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="Email is required"
              />
            )}
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              autoComplete="off"
              placeholder="Your password"
              type="password"
              {...register("password", { required: true })}
            />
            <small>Minimum length 8</small>

            {errors.password && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="Password is required"
              />
            )}
          </div>
          <div className="form-item">
            <label>Re-Password</label>
            <input
              autoComplete="off"
              placeholder="Repeat password"
              type="password"
              {...register("repeatPassword", { required: true })}
            />
            {errors.repeatPassword && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="Re-Password is required"
              />
            )}
          </div>
          <div className="form-item">
            <label>Username</label>
            <input
              autoComplete="off"
              placeholder="Username"
              type="text"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <ErrorBox
                style={{ marginTop: "1rem" }}
                error="Username is required"
              />
            )}
          </div>
          <div className="form-item">
            <button type="submit">SIGN UP</button>
          </div>
          {passwordError && (
            <ErrorBox
              style={{ marginTop: "1rem" }}
              error="Password and confirm password does not match"
            />
          )}
          {loading && <LoadingBox size="5rem" />}
          {error && <ErrorBox style={{ marginTop: "1rem" }} error={error} />}
        </form>
      </div>
      <Newsletter />
    </>
  );
}
