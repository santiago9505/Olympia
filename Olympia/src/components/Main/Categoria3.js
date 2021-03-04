import React from "react";

const Categoria3 = () => {
  return (
    <section className="hidden xl:block xl:h-11/12">
      <h1 className="text-3xl font-bold underline m-2 md:pl-5 xl:ml-20">
        Categoría 3
      </h1>
      <div className="flex items-center justify-center overflow-x-auto scroll mt-4 m-2 gap-2 md:h-80 xl:h-96 gap-8">
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 xl:h-80 w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32 "
            src=""
            alt="Imagen"
          />
          <div className="md:text-left pl-4 ">
            <span className="block w-52 pt-3 font-bold text-lg">Nombre</span>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 xl:h-80  w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src=""
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg">Nombre</span>
            <span className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 md:text-left md:max-w-md xl:h-80  w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src=""
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg">Nombre</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Categoria3;
