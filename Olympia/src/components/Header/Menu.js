//React
import React from 'react';

//Components
import MenuItem from './MenuItem';

const Menu = ({ toggle, children }) => {
  return (
    <div className={`${ toggle ? 'block' : 'hidden' } absolute bottom-full left-0 right-0 bg-gray-400 p-2`}>
      { children }
    </div>
  );
}

export default Menu;