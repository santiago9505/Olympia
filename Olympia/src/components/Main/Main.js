import React from "react";
import Categories from "./Categories.js";
import Popular from "./Popular.js";

const Main = () => {
  return (
    <div className="col-span-12">
      <Categories />
      <Popular />
    </div>
  );
};

export default Main;
