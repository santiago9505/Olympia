import React from "react";
//import PopularProducts from "../Products/Products.js";
import Producto1 from "../../assets/static/producto1.jpg";

const Popular = () => {
  return (
    <div className="mt-6 xl:mt-20">
      <h1 className="text-3xl font-bold m-2 text-start xl:text-left xl:ml-24 text-black">
        Destacado
      </h1>
      <p className="relative bottom-2 left-2 border-b-4 rounded w-40 border-principal_blue"></p>
      <section className="flex overflow-x-auto scroll mt-4 m-2 gap-2"></section>
    </div>
  );
};

export default Popular;
