//React
import React from "react";
import { categories } from "../../constants/categories";

//Libs
import { BsCircle } from "react-icons/bs";

//Components
import MenuItem from "./MenuItem";

const Categories = () => {
  return (
    <ul className=" grid grid-cols-2 grid-rows-2 gap-4">
      {categories.map((item) => (
        <MenuItem
          Icon={BsCircle}
          text={item.category}
          type="categories"
          url={`/products/${item.category}`}
        />
      ))}
    </ul>
  );
};

export default Categories;
