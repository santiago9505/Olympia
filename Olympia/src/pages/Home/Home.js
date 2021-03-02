import Carousel from "../../components/Carousel/Carousel.js";
import Main from "../../components/Main/Main.js";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="grid grid-cols-12 relative">
      <Carousel />
      <Main />
      <Footer/>
    </div>
  );
}

export default Home;
