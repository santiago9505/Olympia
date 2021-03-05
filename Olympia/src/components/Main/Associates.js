import React from "react";

//Assets
import aliado1 from '../../assets/static/aliado1.png';
import aliado2 from '../../assets/static/aliado2.png';
import aliado3 from '../../assets/static/aliado3.png';
import aliado4 from '../../assets/static/aliado4.png';

const Associates = () => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold underline m-2 text-center text-black">
        Aliados
      </h1>
      <section className="flex overflow-x-auto scroll mt-4 m-2 gap-2 md:h-80">
        <article className="border-4 border-principal_blue rounded-3xl h-60 text-center md:h-72 md:max-w-md bg-white">
          <img
            className="h-24 w-full object-cover bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={aliado1}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg text-black">
              Nombre
            </span>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
        <article className="border-4 border-principal_blue rounded-3xl h-60 text-center md:h-72 md:max-w-md">
          <img
            className="h-24 w-full object-cover bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={aliado2}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg text-black">
              Nombre
            </span>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
        <article className="border-4 border-principal_blue rounded-3xl h-60 text-center md:h-72 md:text-left md:max-w-md">
          <img
            className="h-24 w-full object-cover bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={aliado3}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg text-black">
              Nombre
            </span>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
        <article className="border-4 border-principal_blue rounded-3xl h-60 text-center md:h-72 md:text-left md:max-w-md">
          <img
            className="h-24 w-full object-cover bg-gray-300 rounded-t-3xl p-2 md:w-full md:h-32"
            src={aliado4}
            alt="Imagen"
          />
          <div className="md:text-left pl-4">
            <span className="block w-52 pt-3 font-bold text-lg text-black">
              Nombre
            </span>
            <span className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa repellendus
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Associates;
