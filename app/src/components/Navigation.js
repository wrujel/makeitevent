import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="navigation-menu">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Makeitevent
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <NavLink className="nav-link" to="/event/create">
                    Crear Eventos
                  </NavLink>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <button className="nav-link" onClick={() => logout()}>
                    Logout
                  </button>
                ) : (
                  <button
                    className="nav-link"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
