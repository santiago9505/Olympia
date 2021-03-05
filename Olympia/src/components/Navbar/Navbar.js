import React, { useState } from "react";
import { Link } from "react-router-dom";

//Libs
import ArbolIcon from "../../assets/static/arbol-icon.svg";
import LupaIcon from "../../assets/static/lupa.svg";
import { FiShoppingCart, FiMenu, FiSearch } from "react-icons/fi";
import { FaGifts, FaHeart } from "react-icons/fa";
import { HiFire } from "react-icons/hi";
import { BsPeopleCircle } from "react-icons/bs";

//Components
import LateralMenu from "../LateralMenu/LateralMenu";
import MenuItem from "../Header/MenuItem";

const toggleLateralMenu = {
  isOpen: false,
};

const Navbar = () => {
  const [state, setState] = useState({
    toggleLateralMenu,
  });

  const handleLateralMenu = () => {
    setState({
      toggleLateralMenu: { isOpen: !state.toggleLateralMenu.isOpen },
    });
  };

  return (
    <div>
      <div
        className={`${
          state.toggleLateralMenu.isOpen ? "sticky top-0" : "relative"
        } px-1 h-14 top-0 z-50 grid grid-cols-12 bg-background_principal w-full col-span-12 justify-items-center place-content-center pr-4 md:gap-2`}
      >
        <article className="col-span-2">
          <Link to="/home">
            <img className="w-4/6 mx-2" src={ArbolIcon} alt="Logo" />
          </Link>
        </article>
        <section className="relative flex col-span-10 w-full md:col-span-8 xl:col-span-7">
          <input
            className="w-full h-8 rounded-full px-3 focus:outline-none"
            type="text"
          />
          <FiSearch className="cursor-pointer border_green h-full absolute right-3 w-8 border-l-2 p-1 text-3xl"/>
        </section>
        <section className="hidden col-span-1 md:block">
          <div>
            <Link to="/checkout" className="border-none outline-none text-3xl">
              <FiShoppingCart />
            </Link>
          </div>
        </section>
        <section className="hidden xl:block xl:col-span-1">
          <div>
            <Link to="/profile" className="border-none outline-none text-3xl">
              <BsPeopleCircle />
            </Link>
          </div>
        </section>
        <section className="hidden col-span-1 md:block">
          <div>
            <button
              className="border-none outline-none text-3xl"
              onClick={handleLateralMenu}
            >
              <FiMenu />
            </button>
          </div>
        </section>
      </div>
      <section className="flex justify-center">
        <ul className="hidden xl:flex justify-between w-1/2 p-4">
          <MenuItem Icon={HiFire} text="Ofertas" />
          <MenuItem Icon={FaGifts} text="Tarjetas de regalo" />
          <MenuItem Icon={FaHeart} text="Favoritos" />
        </ul>
      </section>
      <LateralMenu isOpen={state.toggleLateralMenu.isOpen} />
    </div>
  );
};

export default Navbar;
