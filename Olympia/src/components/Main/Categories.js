import React from "react";
import { Link } from 'react-router-dom';

//Libs
import { categories } from '../../constants/categories';


const Categories = () => {
  return (
    <div className="col-span-12">
      <h1 className="text-3xl font-bold underline m-2 md:pl-5 xl:ml-20">
        Categorías
      </h1>
      <section className="grid grid-cols-2 justify-items-center gap-4 mt-6 mx-4 font-bold xl:text-2xl xl:text-center xl:gap-20 xl:mt-14">
        {
         categories.map(({ category }, i) => (
          <article key={i} className="border-2 w-11/12 max-w-sm border-black p-1 rounded-lg">
            <Link to={`/products/${category}`} className="block w-full">
              {category}
            </Link>
          </article>
         ))
        }
      </section>
    </div>
  );
};

export default Categories;
