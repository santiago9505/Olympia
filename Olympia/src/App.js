import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Carousel from "./components/Carousel/Carousel.js";
import Main from "./components/Main/Main.js";
import Login from "./components/Login/Login.js";

function App() {
  return (
    <div className="grid grid-cols-12 relative">
      <Navbar />
      {/* <Carousel />
      <Main /> */}
      <Login/>
      <Header />
    </div>
  );
}

export default App;
