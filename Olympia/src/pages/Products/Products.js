import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    name: "Toallitas Húmedas Biodegradables",
    price: "144900",
    description:
      "Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo",
    stok: "2",
    img_url:
      "https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp",
    tag_use: "Limpieza",
  },
  {
    id: "2",
    name: "Toallitas Húmedas Biodegradables",
    price: "144900",
    description:
      "Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo",
    stok: "2",
    img_url:
      "https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp",
    tag_use: "Limpieza",
  },
  {
    id: "3",
    name: "Toallitas Húmedas Biodegradables",
    price: "144900",
    description:
      "Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo",
    stok: "2",
    img_url:
      "https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp",
    tag_use: "Limpieza",
  },
  {
    id: "4",
    name: "Toallitas Húmedas Biodegradables",
    price: "144900",
    description:
      "Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo",
    stok: "2",
    img_url:
      "https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp",
    tag_use: "Limpieza",
  },
  {
    id: "5",
    name: "Toallitas Húmedas Biodegradables",
    price: "144900",
    description:
      "Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo",
    stok: "2",
    img_url:
      "https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp",
    tag_use: "Limpieza",
  },
];

// Aqui se filtran los productos por medio del parametro pasado por params
const Products = ({
  match: {
    params: { category },
  },
}) => {
  return (
    <div className="mb-20 p-4">
      <div className="text-4xl mt-8 font-bold text-black mb-8">
        <h1>{category}</h1>
        <p className="relative bottom-4 border-b-4 rounded my-4 w-28 border-principal_blue"></p>
      </div>
      <section className="grid grid-cols-2 auto-rows-auto gap-4 md:grid-cols-3 md:w-3/5 md:m-auto">
        {data.map((item, i) => (
          <article
            key={i}
            className="flex flex-col items-center p-2.5 shadow-products rounded-2xl h-auto md:h-52"
          >
            <figure className="flex justify-center">
              <img
                src={item.img_url}
                alt="product image"
                className="w-2/4 self-center h-full object-cover"
              />
            </figure>
            <div className="flex-grow text-black text-base">
              <p className="text-black text-base mb-3">{item.name}</p>
              <p className="mb-3">${item.price}</p>
              <div className="text-center">
                <Link
                  to={{ pathname: "/product", state: { item } }}
                  className="inline-block text-white rounded-xl px-2.5 pb-2  bg-principal_blue p-1"
                >
                  Comprar
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Products;
