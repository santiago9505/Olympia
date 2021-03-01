import React from "react";
import PopularProducts from "../Products/Products.js";
import Producto1 from "../../assets/static/producto1.jpg";

const Popular = () => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold underline m-2 text-center">
        Destacado
      </h1>
      <section className="flex overflow-x-auto scroll mt-4 m-2 gap-2">
        {PopularProducts.map((item, index) => {
          return (
            <article
              key={index}
              className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center"
            >
              <img
                className="h-20 bg-gray-300 rounded-t-3xl p-2"
                src={item.src}
                alt="Imagen"
              />
              <span className="block w-36 pt-3">{item.name}</span>
              <span>{item.precio}</span>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Popular;
