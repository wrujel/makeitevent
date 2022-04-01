import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./EventCard.css";
import { useAuth0 } from "@auth0/auth0-react";

function EventCard(props) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/events/delete/${id}`, {
      method: "DELETE",
    });

    navigate("/");
  }

  return (
    <div className="card" key={props.id}>
      <img src={props.image} className="card__img" alt="Evento" />
      <h2 className="card__title">{props.title}</h2>
      <div className="card__body">
        <p>by {props.creator}</p>
        <div className="card__links">
          {isAuthenticated && user.name === props.creator ? (
            <div>
              <Link className="btn btn-link" to={`/event/edit/${props.id}`}>
                Edit
              </Link>
              <button
                className="btn btn-link"
                onClick={() => {
                  deleteRecord(props.id);
                }}
              >
                Delete
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
