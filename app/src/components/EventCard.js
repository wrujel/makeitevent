import React from "react";
import { Link } from "react-router-dom";
import "./EventCard.css";

function EventCard(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.image} className="card__img" alt="Evento" />
      <h2 className="card__title">{props.title}</h2>
      <div className="card__body">
        <p>by {props.creator}</p>
        <div className="card__links">
          <Link className="btn btn-link" to={`/event/edit/${props.id}`}>
            Edit
          </Link>
          <button className="btn btn-link">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
