//React
import React, { useState } from "react";

//Libs
import { FiShoppingCart, FiShoppingBag, FiMinus } from "react-icons/fi";
import { GrFormAdd } from "react-icons/gr";
import { addToCart } from "../../constants/Cart";

//Components
import Associates from '../../components/Main/Associates';

const ProductDetails = ({
  history: {
    location: {
      state: { item },
    },
  },
}) => {

  const [state, setState] = useState({
    item: {
      ...item,
      cantidad: item.stok,
    }
  });

  const handleAddToCart = () => {
    addToCart(state.item);
  };

  return (
    <div className="mb-20 w-full">
      <figure className="w-full h-48 overflow-hidden md:h-60">
        <img
          src={state.item.img_url}
          alt=""
          className="w-full h-full object-cover md:w-3/5 md:m-auto"
        />
      </figure>
      <section className="p-4">
        <div className="text-lg mb-3">
          <p className="mb-3">{state.item.name}</p>
          <div className="flex flex-row items-center">
            <p className="mr-3">${state.item.price}</p>
            <div className="flex border border-gray-400 p-1 text-sm rounded-md mr-3">
              <button className="border border-gray-500 rounded-tl-md rounded-bl-md mr-1">
                <GrFormAdd />
              </button>
              <p className="mx-1">{state.item.stok}</p>
              <button className="border border-gray-500 rounded-tr-md rounded-br-md ml-1">
                <FiMinus />
              </button>
            </div>
            <button
              className="flex border border-gray-400 p-1 rounded-md mr-3"
              onClick={handleAddToCart}
            >
              <span className="text-sm mr-1">Cart</span>
              <FiShoppingCart />
            </button>
            <button className="flex border border-gray-400 p-1 rounded-md">
              <span className="text-sm mr-1">Buy</span>
              <FiShoppingBag />
            </button>
          </div>
        </div>
        <div className="max-w-2xl mb-12">
          <h2 className="text-xl underline mb-2">Description</h2>
          {state.item.description}
        </div>
        <Associates title="Destacados"/>
      </section>
    </div>
  );
};

export default ProductDetails;
