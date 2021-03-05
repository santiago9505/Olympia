//React
import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: '1',
    name: 'Toallitas Húmedas Biodegradables',
    price: '144900',
    description: 'Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo',
    stok: '2',
    img_url: 'https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp',
    tag_use: 'Limpieza',
  },
  {
    id: '2',
    name: 'Toallitas Húmedas Biodegradables',
    price: '144900',
    description: 'Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo',
    stok: '2',
    img_url: 'https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp',
    tag_use: 'Limpieza',
  },
  {
    id: '3',
    name: 'Toallitas Húmedas Biodegradables',
    price: '144900',
    description: 'Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo',
    stok: '2',
    img_url: 'https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp',
    tag_use: 'Limpieza',
  },
  {
    id: '4',
    name: 'Toallitas Húmedas Biodegradables',
    price: '144900',
    description: 'Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo',
    stok: '2',
    img_url: 'https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp',
    tag_use: 'Limpieza',
  },
  {
    id: '5',
    name: 'Toallitas Húmedas Biodegradables',
    price: '144900',
    description: 'Paquete de 4 toallitas de ducha grandes sin enjuague para después del entrenamiento, camping, mochilero, al aire libre y senderismo',
    stok: '2',
    img_url: 'https://http2.mlstatic.com/D_NQ_NP_920698-MCO43961669942_102020-O.webp',
    tag_use: 'Limpieza',
  },
];

// Aqui se filtran los productos por medio del parametro pasado por params
const Products = ({ match: { params: { category } } }) => {
  return (
    <div className="mb-20 p-4">
      <div className="text-2xl underline mb-8">
        <h1>{category}</h1>
      </div>
      <section className="grid grid-cols-2 auto-rows-auto gap-4 md:grid-cols-3 md:w-3/5 md:m-auto">
        {
          data.map((item, i) => (
            <article key={i} className="flex flex-col p-2 border border-gray-400 rounded-md h-44 md:h-52">
              <figure className="h-1/2 border border-gray-400 rounded-md overflow-hidden mb-3">
                <img src={item.img_url} alt="product image" className="w-full h-full object-cover"/>
              </figure>
              <div className="flex-grow text-xs">
                <p className=" mb-3">
                  {item.name}
                </p>
                <p>
                  ${item.price}
                </p>
                <div className="text-right">
                  <Link to={{ pathname: '/product', state: { item } }} className="inline-block bg-gray-400 p-1 rounded-sm">
                    Comprar
                  </Link>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    </div>
  );
}

export default Products;