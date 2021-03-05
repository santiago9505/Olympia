//React
import React from "react";
import { Link } from 'react-router-dom';

//Libs
import { FaGifts, FaHeart, FaHistory } from "react-icons/fa";
import { HiFire } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { MdHome } from "react-icons/md";

//Components
import MenuItem from "./MenuItem";

const ProfileOptions = () => {
  return (
    <>
      <ul className="grid grid-cols-1 grid-rows-5">
        <MenuItem
          Icon={FaGifts}
          text="Tarjetas de regalo / cupones"
          type="profileOptions"
        />
        <MenuItem Icon={HiFire} text="Ofertas"/>
        <MenuItem Icon={FaHeart} text="Favoritos"/>
        <MenuItem Icon={FaHistory} text="Historial"/>
        <MenuItem Icon={RiProfileLine} text="my profile" url="/profile"/>
        <MenuItem Icon={MdHome} text="Home" url="/home"/>
      </ul>
      <hr className="my-3 mx-auto w-3/4 border-t-2 border-gray-700" />
      <div className="grid grid-cols-2 grid-rows-1 gap-x-5">
        <Link
          to="/login"
          className="block outline-none font-bold text-xl text-white text-center rounded-full bg-background_principal p-1"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block outline-none font-bold text-xl text-white text-center rounded-full bg-background_principal p-1"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default ProfileOptions;
