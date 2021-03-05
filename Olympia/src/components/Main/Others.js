import React from "react";

//Assets
import publicidad_1 from '../../assets/static/publicidad1.jpg';
import publicidad_2 from '../../assets/static/publicidad2.jpg';

const Others = () => {
  return (
    <div className="col-span-12">
      <h1 className="text-3xl font-bold underline m-2 text-center text-black">
        Conoce más
      </h1>
      <article className="w-10/12 mx-auto h-96 rounded-md mt-4 max-w-xl overflow-hidden">
        <img src={publicidad_1} alt="Publicidad" className="m-auto"/>
      </article>
      <article className="w-10/12 mx-auto h-96 rounded-md mt-4 max-w-xl overflow-hidden">
        <img src={publicidad_2} alt="Publicidad"/>
      </article>
    </div>
  );
};

export default Others;
