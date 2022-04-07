import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Navigation.css";
import { logout } from "../../actions/auth";

function Navigation() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  const register = () => {
    localStorage.setItem("isRegistered", false);
  };

  return (
    <div className="navigation-menu">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Makeitevent
          </Link>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/event/create"} className="nav-link">
                  Crear Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link" onClick={register}>
                  Signup
                </Link>
              </li>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
