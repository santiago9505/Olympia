//React
import React from 'react';

//Libs
import { BsCircle } from 'react-icons/bs';

//Components
import MenuItem from './MenuItem';

const Categories = () => {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-4">
      <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
      <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
      <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
      <MenuItem Icon={BsCircle} text="Categoria" type="categories"/>
    </ul>
  );
}

export default Categories;