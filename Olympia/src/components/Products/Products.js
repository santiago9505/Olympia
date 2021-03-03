import Producto1 from "../../assets/static/producto1.jpg";
import axios from "axios";
import { API_URL } from "../../constants/index.js";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [state, setState] = useState({
    pk: 0,
    Name: "",
    price: "",
    description: "",
    stok: "",
    img_url: "",
    tag_use: "",
  });

  const fecthData = async () => {
    const { data } = await axios({
      url: API_URL,
      method: "get",
    });
    setState(data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  return <div>{console.log(state)}</div>;
};

export default Products;

// export const Products = [
//   {
//     name: "Cepillo de Bambú",
//     src: "../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: "../../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: "../../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: { Producto1 },
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: "../../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: "../../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
//   {
//     name: "Cepillo de Bambú",
//     src: "../../assets/static/producto1.jpg",
//     precio: "$10",
//     ventas: "4",
//   },
// ];

// export default Products;
