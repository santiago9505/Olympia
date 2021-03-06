import React from "react";
import Frutas from "../../assets/static/frutas.PNG";
import Regadera from "../../assets/static/regadera.PNG";
import Tasa from "../../assets/static/tasa de cafe.PNG";

const Categoria1 = () => {
  return (
    <section className="hidden xl:block xl:h-11/12 xl:mt-10">
      <h1 className="text-3xl font-bold underline m-2 md:pl-5 xl:ml-20">
        Categoría 1
      </h1>
      <div className="flex items-center justify-center overflow-x-auto scroll mt-4 m-2 gap-2 md:h-80 xl:h-96 gap-8">
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 xl:h-80 w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32 "
            src={Frutas}
            alt="Imagen"
          />
          <div className="md:text-left pl-4 ">
            <span className="block w-52 pt-3 font-bold text-lg">
              Vajilla de madera
            </span>
            <span className="">
              Es probable que te guste organizar cenas y comidas con amigos y
              amigas, ¿pero qué tal si utilizas una vajilla de madera?
            </span>
          </div>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 xl:h-80  w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={Regadera}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg">
              Regadera Ahorradora
            </span>
            <span className="">
              Un cabezal de ducha que resulta fácil de instalar, además de ser
              práctico por sus pequeñas medidas.
            </span>
          </div>
        </article>
        <article className="border-2 border-gray-300 rounded-3xl h-60 text-center md:h-72 md:text-left md:max-w-md xl:h-80  w-80">
          <img
            className="h-24 bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={Tasa}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg">
              Taza de café que se planta
            </span>
            <span>
              Quien más quien menos ha pedido alguna vez un café para llevar y
              nos lo han servido en un recipiente de cartón o plástico que
              termina en alguna papelera.
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Categoria1;
