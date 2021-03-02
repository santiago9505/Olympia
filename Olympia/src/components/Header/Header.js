// React
import React, { useState } from "react";

//Libs
import { BsListUl, BsPeopleCircle, BsThreeDotsVertical } from 'react-icons/bs';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';

//Components
import Menu from './Menu';
import Categories from './Categories';
import ProfileOptions from './ProfileOptions';
import Cart from './Cart';
import Options from './Options';

const toggle = {
  categories: false,
  profile: false,
  cart: false,
  options: false,
}

const Header = () => {
  const [state, setState] = useState({
    toggle,
  });

  const toggleMenu = (reference) => {
    let toggleOptions;

    switch(reference) {
      case 'categories':
        toggleOptions = { categories: !state.toggle.categories }
        break;

      case 'profile':
        toggleOptions = { profile: !state.toggle.profile }
        break;

      case 'cart':
        toggleOptions = { cart: !state.toggle.cart }
        break;

      case 'options':
        toggleOptions = { options: !state.toggle.options }
        break;

      default:
        toggleOptions = toggle
        break;
    }

    setState({ toggle: toggleOptions });
  }

  return (
    <header className="block absolute bottom-0 z-50 w-full shadow-custom bg-gray-400 md:hidden">
      <div className="flex flex-row justify-between items-center p-2">
        <div>
          <div role="button" className="text-4xl" onClick={() => { toggleMenu('categories') }}>
            <BsListUl/>
          </div>
          <Menu toggle={state.toggle.categories} selector="categories">
            <Categories/>
          </Menu>
        </div>
        <div>
          <div role="button" className="text-4xl">
            <FiSearch/>
          </div>
          <Menu toggle={false}>
            <ul className="grid grid-cols-2 grid-rows-2 gap-4">
              <li>Text</li>
            </ul>
          </Menu>
        </div>
        <div>
          <div role="button" className="text-4xl" onClick={() => { toggleMenu('profile') }}>
            <BsPeopleCircle/>
          </div>
          <Menu toggle={state.toggle.profile} selector="profileOptions">
            <ProfileOptions/>
          </Menu>
        </div>
        <div>
          <div role="button" className="text-4xl" onClick={() => { toggleMenu('cart') }}>
            <FiShoppingCart/>
          </div>
          <Menu toggle={state.toggle.cart} selector="cart">
            <Cart/>
          </Menu>
        </div>
        <div>
          <div role="button" className="text-4xl" onClick={() => { toggleMenu('options') }}>
            <BsThreeDotsVertical/>
          </div>
          <Menu toggle={state.toggle.options} selector="options">
            <Options/>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
