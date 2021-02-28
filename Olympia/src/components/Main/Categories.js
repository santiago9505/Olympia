import React from "react";

const Categories = () => {
  return (
    <div className="col-span-12 mt-6">
      <h1 className="text-3xl font-bold underline m-2">Categorías</h1>
      <section className="grid grid-cols-2 justify-items-center gap-4 mt-6 mx-4 font-bold">
        <article className="border-2 w-44 border-black p-1 rounded-lg">
          <input className="m-1" type="checkbox" name="transporte" value="1" />
          Nombre Categoría
        </article>
        <article className="border-2 w-44 border-black p-1 rounded-lg">
          <input className="m-1" type="checkbox" name="transporte" value="1" />
          Nombre Categoría
        </article>
        <article className="border-2 w-44 border-black p-1 rounded-lg">
          <input className="m-1" type="checkbox" name="transporte" value="1" />
          Nombre Categoría
        </article>
        <article className="border-2 w-44 border-black p-1 rounded-lg">
          <input className="m-1" type="checkbox" name="transporte" value="1" />
          Nombre Categoría
        </article>
      </section>
    </div>
  );
};

export default Categories;
