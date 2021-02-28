import React from "react";
import Product1 from "../../assets/static/producto1.jpg";

const Popular = () => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold underline m-2 text-center">
        Destacado
      </h1>
      <section className="flex overflow-x-auto scroll mt-4 m-2 gap-2">
        <article className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center">
          <img
            className="h-20 bg-gray-300 rounded-t-3xl p-2"
            src=""
            alt="Imagen"
          />
          <span className="block w-36 pt-3">Nombre</span>
          <span>Precio</span>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center">
          <img
            className="h-20 bg-gray-300 rounded-t-3xl p-2"
            src=""
            alt="Imagen"
          />
          <span className="block w-36 pt-3">Nombre</span>
          <span>Precio</span>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center">
          <img
            className="h-20 bg-gray-300 rounded-t-3xl p-2"
            src=""
            alt="Imagen"
          />
          <span className="block w-36 pt-3">Nombre</span>
          <span>Precio</span>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center">
          <img
            className="h-20 bg-gray-300 rounded-t-3xl p-2"
            src=""
            alt="Imagen"
          />
          <span className="block w-36 pt-3">Nombre</span>
          <span>Precio</span>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-40 w-60 text-center">
          <img
            className="h-20 bg-gray-300 rounded-t-3xl p-2"
            src=""
            alt="Imagen"
          />
          <span className="block w-36 pt-3">Nombre</span>
          <span>Precio</span>
        </article>
      </section>
    </div>
  );
};

export default Popular;
