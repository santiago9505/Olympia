//React
import React from 'react';

const Menu = ({ toggle, children, selector }) => {
  let selectorClass;

  switch(selector) {
    case 'categories':
      selectorClass = 'left-4';
      break;

    case 'profileOptions':
      selectorClass = 'left-44';
      break;

    case 'cart':
      selectorClass = 'left-64'
      break;

    case 'options':
      selectorClass = 'right-5'
      break;

    default:
      break;
  }

  return (
    <div id="menu" className={`${ toggle ? 'block' : 'hidden' } animate-fadeIn absolute bottom-full left-0 right-0 bg-gray-600 p-2 z-50`}>
      { children }
      <div className={`${selectorClass} absolute -bottom-1.5 rounded-br-md rounded-tl-3xl
          transform rotate-45 w-3 h-3 bg-gray-600`}
      ></div>
    </div>
  );
}

export default Menu;