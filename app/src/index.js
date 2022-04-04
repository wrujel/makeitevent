import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import EditEvent from "./pages/EditEvent/EditEvent";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/event/create"
          element={<ProtectedRoute component={CreateEvent} />}
        />
        <Route
          path="/event/edit/:id"
          element={<ProtectedRoute component={EditEvent} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);
