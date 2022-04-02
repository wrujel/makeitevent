import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import EditEvent from "./pages/EditEvent/EditEvent";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/event/create" element={<CreateEvent />} />
        <Route path="/event/edit/:id" element={<EditEvent />} />
      </Routes>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);
