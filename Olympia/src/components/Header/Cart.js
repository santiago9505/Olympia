//React
import React from 'react';

//Libs
import { FaGifts, FaHeart } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

//Components
import MenuItem from './MenuItem';

const Cart = () => {
  return (
    <ul className="grid grid-cols-1 grid-rows-3">
      <MenuItem Icon={FaGifts} text="Mis compras"/>
      <MenuItem Icon={FiShoppingCart} text="Carrito de compras" url="/checkout"/>
      <MenuItem Icon={FaHeart} text="Favoritos"/>
    </ul>
  );
}

export default Cart;