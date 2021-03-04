import React from "react";
//import PopularProducts from "../Products/Products.js";
import Producto1 from "../../assets/static/producto1.jpg";

const Popular = () => {
  return (
    <div className="mt-6 xl:mt-20">
      <h1 className="text-3xl font-bold underline m-2 text-center xl:text-left xl:ml-24">
        Destacado
      </h1>
      <section className="flex overflow-x-auto scroll mt-4 m-2 gap-2"></section>
    </div>
  );
};

export default Popular;
