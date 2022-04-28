import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h3 className="title">Profile</h3>
      <p>
        <strong>Username:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <strong>Roles:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role) => <li key={role._id}>{role.name}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
