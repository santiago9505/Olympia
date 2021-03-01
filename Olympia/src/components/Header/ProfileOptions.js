//React
import React from 'react';

//Libs
import { FaGifts, FaHeart, FaHistory } from 'react-icons/fa';
import { HiFire } from 'react-icons/hi';
import { MdHome } from 'react-icons/md';

//Components
import MenuItem from './MenuItem';

const ProfileOptions = () => {
  return (
    <>
      <ul className="grid grid-cols-1 grid-rows-5">
        <MenuItem Icon={FaGifts} text="Tarjetas de regalo / cupones" type="profileOptions"/>
        <MenuItem Icon={HiFire} text="Ofertas" type="profileOptions"/>
        <MenuItem Icon={FaHeart} text="Favoritos" type="profileOptions"/>
        <MenuItem Icon={FaHistory} text="Historial" type="profileOptions"/>
        <MenuItem Icon={MdHome} text="Home" type="profileOptions"/>
      </ul>
      <hr className="my-3 mx-auto w-3/4 border-t-2 border-gray-700"/>
      <div className="grid grid-cols-2 grid-rows-1 gap-x-5">
        {/* Replace with Link tag */}
        <a href="#" className="block outline-none text-center rounded-full bg-white p-1">Login</a>
        <a href="#" className="block outline-none text-center rounded-full bg-white p-1">Register</a>
      </div>
    </>
  );
}

export default ProfileOptions;