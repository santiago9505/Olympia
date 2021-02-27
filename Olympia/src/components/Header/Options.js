//React
import React from 'react';

//Libs
import { IoToggleSharp } from 'react-icons/io5';
import { BiHelpCircle,BiWorld } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';

//Components
import MenuItem from './MenuItem';

const Options = () => {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-4">
      <MenuItem Icon={IoToggleSharp} text="Dark Mode"/>
      <MenuItem Icon={FaDollarSign} Icon2={BsChevronDown} text="COP" type="options"/>
      <MenuItem Icon={BiHelpCircle} text="Centro de ayuda"/>
      <MenuItem Icon={BiWorld} Icon2={BsChevronDown} text="SP" type="options"/>
    </ul>
  );
}

export default Options;