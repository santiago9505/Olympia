import React from "react";
import Imagen1 from "../../assets/static/imagen-1.jpg";
import Imagen2 from "../../assets/static/imagen-2.jpg";
import Imagen3 from "../../assets/static/imagen-3.jpg";

const Carousel = () => {
  return (
    <hero class="slider col-span-12 h-8/11">
      <ul>
        <li>
          <img src={Imagen1} alt="" />
        </li>
        <li>
          <img src={Imagen2} alt="" />
        </li>
        <li>
          <img src={Imagen3} alt="" />
        </li>
      </ul>
    </hero>
  );
};

export default Carousel;
