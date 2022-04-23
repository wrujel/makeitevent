import "./Portada.css";
import Portada from "../../images/event_portada.jpg";
import { ReactComponent as Textportada } from "../../images/text_portada.svg";

function Carousel() {
  return (
    <div className="container__portada">
      <div className="container__content">
        <Textportada className="text_portada" />
        <a className="btn_carousel btn btn-lg btn-primary" href="/">
          Find your next event
        </a>
      </div>
      <img className="img_portada" src={Portada} alt="Portada"></img>
    </div>
  );
}

export default Carousel;
