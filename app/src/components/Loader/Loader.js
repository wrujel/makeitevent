import React from "react";
import "./Loader.css";

const Loader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className="container container-loader">
      <div className="loader">
        <img src={loadingImg} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
