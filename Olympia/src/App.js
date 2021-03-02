import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Carousel from "./components/Carousel/Carousel.js";

function App() {
  return (

    <div className="grid grid-cols-12">
      <Navbar />
      <Carousel />
      <Header />

    </div>
  );
}

export default App;
