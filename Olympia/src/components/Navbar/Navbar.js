import React from "react";
import ArbolIcon from "../../assets/static/arbol-icon.svg";
import LupaIcon from "../../assets/static/lupa.svg";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 bg-gray-400 w-full col-span-12 h-20 justify-items-center place-content-center pr-4">
      <article className="col-span-2">
        <img className="w-4/6 mx-2" src={ArbolIcon} alt="Logo" />
      </article>
      <section className="flex col-span-10 w-full">
        <input
          className="w-full h-8 rounded-full px-3 focus:outline-none"
          type="text"
        />
        <img
          className="absolute right-6 w-8 border-l-2 p-1"
          src={LupaIcon}
          alt="Hojita"
        />
      </section>
    </div>
  );
};

export default Navbar;
