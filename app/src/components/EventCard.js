import { Component } from "react";
import "./EventCard.css";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
    };
  }

  render() {
    return (
      <div className="card" key={this.props.id}>
        <img src={this.props.image} className="card__img" alt="Evento" />
        <h2 className="card__title">{this.props.title}</h2>
        <div className="card__body">
          <p>by {this.props.creator}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
