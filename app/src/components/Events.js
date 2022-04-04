import "./Events.css";
import EventCard from "./EventCard";
import { ReactComponent as Arrowsvg } from "../images/arrow.svg";
import axios from "axios";
import { Component } from "react";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://makeitevent.herokuapp.com//events`
    );
    const json = await response.data;
    this.setState({ data: json });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <p className="popular">
          Popular in
          <span>
            <Arrowsvg className="arrow" />
            <input
              className="input_city"
              defaultValue={"Lima"}
              type="text"
              size="4"
            />
          </span>
        </p>
        <ul className="categorias nav">
          <li className="nav-item nav-item__first mb-2">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                All
              </span>
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                For you
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Online
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Today
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                This weekend
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Women's History Month
              </span>
            </button>
          </li>
          <li className="nav-item mb-2">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Free
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Music
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Food {"&"} Drink
              </span>
            </button>
          </li>
          <li className="nav-item mb-2 ">
            <button className="nav-item__button">
              <span href="#" className="nav-item_link">
                Charity {"&"} Causes
              </span>
            </button>
          </li>
        </ul>
        <p className="events_location">Events in Lima</p>

        <div className="events_wrapper">
          {data.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              date={event.date}
              creator={event.creator}
              followers={event.followers}
              about={event.about}
              time_start={event.time_start}
              time_end={event.time_end}
              location={event.location}
              image={event.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
