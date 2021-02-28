import Carousel from "../components/Carousel/Carousel.js";
import Main from "../components/Main/Main.js";

function Home() {
  return (
    <div className="grid grid-cols-12 relative">
      <Carousel />
      <Main />
    </div>
  );
}

export default Home;
