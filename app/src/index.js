import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Menu />

    <Carousel />
    <Events />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
