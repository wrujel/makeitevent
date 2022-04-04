import Events from "../components/Events";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <Events />
      <Footer />
    </div>
  );
}

export default Home;
