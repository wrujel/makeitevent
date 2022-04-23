import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Register.css";

import { register as actionRegister } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

const Register = () => {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    setSuccessful(false);

    dispatch(actionRegister(username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="col-md-12">
      <div className="card-login card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleSubmit(handleRegister)} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              onChange={onChangeUsername}
            />
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              onChange={onChangeEmail}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              onChange={onChangePassword}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className="form-group form-check check-terms">
            <input
              name="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>

          <div className="form-group register-buttons-wrapper">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!successful}
            >
              {!successful && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Register</span>
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="btn btn-warning float-right"
            >
              Reset
            </button>
          </div>

          {message && (
            <div className="form-group message-option">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
