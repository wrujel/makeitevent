import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import EditEvent from "./pages/EditEvent";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/create" element={<CreateEvent />} />
      <Route path="/event/edit/:id" element={<EditEvent />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
