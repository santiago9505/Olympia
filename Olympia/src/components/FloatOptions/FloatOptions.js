//React
import React, { useState } from 'react';

//Libs
import { FaGifts, FaHeart, FaHistory, FaDollarSign } from "react-icons/fa";
import { CgOptions } from 'react-icons/cg';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { BsCircle, BsChevronDown } from 'react-icons/bs';
import { HiFire } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { FiShoppingCart } from 'react-icons/fi';
import { IoToggleSharp } from 'react-icons/io5'
import { BiHelpCircle, BiWorld } from 'react-icons/bi';

//Components
import MenuItem from '../Header/MenuItem';

const toggleOptions = {
  isOpen: false,
  showOption: 1
}

const FloatOptions = () => {
  const [state, setState] = useState({
    toggleOptions,
  });

  const handleToggleOptions = () => {
    setState({ toggleOptions: { ...state.toggleOptions, isOpen: !state.toggleOptions.isOpen } });
  }

  const handleNextOption = () => {
    switch(state.toggleOptions.showOption){
      case 1:
        setState({ toggleOptions: { ...state.toggleOptions, showOption: 2 } });
        break;

      case 2:
        setState({ toggleOptions: { ...state.toggleOptions, showOption: 3 } });
        break;

      case 3:
        setState({ toggleOptions: { ...state.toggleOptions, showOption: 1 } });
        break;

      default:
        setState({...state, toggleOptions: toggleOptions });
        break;
    }
  }

  return (
    <>
      <div className="hidden w-14 fixed bottom-4 right-4 z-20 cursor-pointer h-14 bg-gray-700 rounded-full justify-center items-center text-2xl md:flex xl:hidden" onClick={handleToggleOptions}>
        <CgOptions/>
      </div>
      <div className={`${state.toggleOptions.isOpen ? 'bottom-0 h-52' : '-bottom-full h-0'} transition-custom-all duration-custom-1000 custom-ease bg-gray-500 w-full fixed z-10 py-4 px-32 xl:hidden`}>
        <div className="flex absolute top-4 right-10">
          <span onClick={handleNextOption}>
            <GrNext/>
          </span>
        </div>
        <div className="flex h-full items-center">
          <ul className={`${state.toggleOptions.showOption === 1 ? 'block': 'hidden'} grid grid-cols-2 grid-rows-2 gap-4 w-full`}>
            <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
            <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
            <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
            <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
          </ul>
          <ul className={`${state.toggleOptions.showOption === 2 ? 'block': 'hidden'} text-sm grid grid-cols-2 grid-rows-3 gap-4 w-full`}>
            <MenuItem Icon={FaGifts} text="Tarjetas de regalo / cupones"/>
            <MenuItem Icon={FaHistory} text="Historial"/>
            <MenuItem Icon={HiFire} text="Ofertas"/>
            <MenuItem Icon={FiShoppingCart} text="Carrito de compras"/>
            <MenuItem Icon={FaHeart} text="Favoritos"/>
            <MenuItem Icon={MdHome} text="Home"/>
          </ul>
          <ul className={`${state.toggleOptions.showOption === 3 ? 'block': 'hidden'} grid grid-cols-2 grid-rows-2 gap-4 justify-items-center w-full`}>
            <MenuItem Icon={IoToggleSharp} text="Dark mode"/>
            <MenuItem Icon={FaDollarSign} Icon2={BsChevronDown} text="COP"/>
            <MenuItem Icon={BiHelpCircle} text="Centro de ayuda"/>
            <MenuItem Icon={BiWorld} Icon2={BsChevronDown} text="SP"/>
          </ul>
        </div>
      </div>
    </>
  );
}

export default FloatOptions;