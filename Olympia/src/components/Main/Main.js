import React from "react";
import Associates from "./Associates.js";
import Categories from "./Categories.js";
import Popular from "./Popular.js";
import Others from "./Others";
import Publicity from "./Publicity";
import Categoria1 from "./Categoria1";
import Categoria2 from "./Categoria2";
import Categoria3 from "./Categoria3";
import Categoria4 from "./Categoria4";

const Main = () => {
  return (
    <div className="col-span-12 mb-20">
      <Publicity />
      <Categories />
      <Popular />
      <Categoria1 />
      <Categoria2 />
      <Categoria3 />
      <Categoria4 />
      <Associates />
      <Others />
    </div>
  );
};

export default Main;
