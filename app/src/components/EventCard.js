import react from "react";
import "./EventCard.css";

class EventCard extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
    };
  }

  render() {
    return (
      <div className="card" key="1">
        <img
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F237905649%2F215986123110%2F1%2Foriginal.20220228-140544?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=3d2130e4702d8470a90e348fbc2764cc"
          className="card__img"
          alt="Evento"
        />
        <h2 className="card__title">
          Leading Through Innovation: Attitude for Success
        </h2>
        <div className="card__body">
          <div className="card__row">
            <button className="card__btn">Go To Detail</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
