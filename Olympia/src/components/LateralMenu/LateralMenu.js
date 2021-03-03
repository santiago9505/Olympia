//React
import React from 'react';

const LateralMenu = ({ isOpen }) => {
  const openMenu = `${isOpen ? ' right-0' : '-right-full'}`
  return (
    <aside className={`${openMenu} hidden md:block transition-custom-all duration-custom-1000 ease-custom p-4 w-96 bg-blue-400 fixed top-20 bottom-0 z-50`}>
      <h1>Hola putos</h1>
    </aside>
  );
}

export default LateralMenu;