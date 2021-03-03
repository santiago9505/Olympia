import React from "react";
import Associates from "./Associates.js";
import Categories from "./Categories.js";
import Popular from "./Popular.js";
import Others from "./Others";

const Main = () => {
  return (
    <div className="col-span-12 mb-20">
      <Categories />
      <Popular />
      <Associates />
      <Others />
    </div>
  );
};

export default Main;
