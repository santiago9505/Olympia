//React
import React from 'react';
import { Link } from 'react-router-dom';

//Libs
import { FaGifts, FaHeart, FaHistory, FaRegListAlt, FaDollarSign } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { HiFire } from "react-icons/hi";
import { BiHelpCircle, BiWorld } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { IoToggleSharp } from 'react-icons/io5';

//Components
import MenuItem from '../Header/MenuItem';

const LateralMenu = ({ isOpen }) => {
  const openMenu = `${isOpen ? ' right-0 xl-h-500' : '-right-full xl:h-0 xl:p-0'}`
  return (
    <aside className={`${openMenu} hidden md:flex flex-col transition-custom-all duration-custom-1000 ease-custom p-6 w-80 bg-gray-300 fixed top-20 bottom-0 z-50 xl:top-16 xl:bottom-auto xl:right-4 xl:overflow-hidden`}>
      <div className="flex justify-center xl:hidden">
        <figure className="w-24 h-24 rounded-full bg-gray-500 mr-4">
          <img src="" alt="" className="w-full h-full"/>
        </figure>
        <div className="flex-grow">
          <h2 className="block text-2xl mb-5">Hi you!</h2>
          <div className="grid grid-cols-2 grid-rows-1 gap-x-5">
            <Link
              to="/login"
              className="block outline-none text-center rounded-full bg-white p-1"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block outline-none text-center rounded-full bg-white p-1"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <ul className="text-left">
          <MenuItem Icon={IoToggleSharp} text="Dark mode" type="lateralMenu"/>
          <MenuItem Icon={FaDollarSign} Icon2={BsChevronDown} text="COP" type="lateralMenu"/>
          <MenuItem Icon={BiWorld} Icon2={BsChevronDown} text="SP" type="lateralMenu"/>
        </ul>
      </div>
      <hr className="m-3 border-t-2 border-gray-600"/>
      <div>
        <ul className="text-left">
          <MenuItem Icon={MdHome} text="Home" type="lateralMenu" url="/home"/>
          <MenuItem Icon={FaHistory} text="Historial" type="lateralMenu"/>
          <MenuItem Icon={FaHeart} text="Favoritos" type="lateralMenu"/>
        </ul>
      </div>
      <hr className="m-3 border-t-2 border-gray-600"/>
      <div>
        <ul className="text-left">
          <MenuItem Icon={FaRegListAlt} text="Categorias" type="lateralMenu"/>
          <MenuItem Icon={HiFire} text="Ofertas" type="lateralMenu"/>
          <MenuItem Icon={FaGifts} text="Tarjetas de regalo" type="lateralMenu"/>
          <MenuItem Icon={BiHelpCircle} text="Centro de ayuda" type="lateralMenu"/>
        </ul>
      </div>
    </aside>
  );
}

export default LateralMenu;