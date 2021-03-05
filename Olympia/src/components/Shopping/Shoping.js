import React, { useState, useEffect } from "react";

//Libs
import md5 from "md5";
import { paymentData, apiKey } from "../../constants/paymentData";

const Shopping = () => {
  const referenceCode = "7";

  const [state, setState] = useState({
    products: [
      {
        name: "Cepillo de dientes de bambú",
        price: "200",
      },
      {
        name: "Crema dental ecológica",
        price: "200",
      },
    ],
    payment: paymentData,
    user: {
      name: "Juan Camilo Molina",
      email: "josedanielmolina323@gmail.com",
      address: "carrera 13a #23-05",
      city: "Candelaria - villagorgona",
      zipCode: "763579",
      telephone: "3185676175",
    },
  });

  const setPaymentData = () => {
    const amount = state.products.reduce((acum, { price }) => {
      return acum + parseInt(price);
    }, 0);

    const signature = md5(
      `${apiKey}~${paymentData.merchantId}~${referenceCode}~${amount}~${paymentData.currency}`
    );

    const description = state.products.reduce((acum, { name }, i) => {
      acum += name + ", ";
      return i === state.products.length - 1 ? acum.trim() : acum;
    }, "");

    setState({
      ...state,
      payment: {
        ...state.payment,
        description: description,
        referenceCode,
        amount,
        signature,
        buyerFullName: state.user.name,
        buyerEmail: state.user.email,
        shippingAddress: state.user.address,
        shippingCity: state.user.city,
        zipCode: state.user.zipCode,
        telephone: state.user.telephone,
      },
    });
  };

  useEffect(() => {
    setPaymentData();
  }, []);

  return (
    <section className="p-4">
      <article className="text-center text-2xl font-bold md:pt-10 md:border-b-4 md:pb-8 xl:text-4xl xl:border-b-6">
        <h1>Carrito de compras</h1>
      </article>
      <div className="xl:flex xl:justify-between px-12 xl:mt-10">
        <div className="xl:block ">
          <div className="grid grid-cols-4 my-16 gap-2 border-b-4 p-4 md:flex md:justify-center md:gap-10 xl:border-b-4 ">
            <div className="">
              <article className="rounded-2xl w-24 h-24 xl:w-auto">
                <img
                  className="border-2 rounded-xl rounded-xl p-1 w-20 h-20 xl:w-40 xl:h-40"
                  src=""
                  alt="prod"
                />
                <label
                  className="flex justify-start gap-2 xl:justify-center"
                  htmlFor=""
                >
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">-</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">5</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">+</button>
                </label>
              </article>
            </div>
            <div className="col-span-3 md:w-5/12 md:mb-4 xl:h-60 ">
              <article className="text-xl flex gap-24 md:block xl:text-3xl xl:mb-6">
                <h2 className="">Name Name</h2>
                <h2 className="self-end">$200</h2>
              </article>
              <article className="text-xs w-11/12 md:w-9/12 xl:text-base">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quis omnis sit
                </h2>
              </article>
              <article className="flex justify-end mt-4 xl:mt-10">
                <img src="" alt="##" />
                <h2>Remove</h2>
              </article>
            </div>
          </div>

          <div className="grid grid-cols-4 my-16 gap-2 border-b-4 p-4 md:flex md:justify-center md:gap-10 xl:border-b-4 ">
            <div className="">
              <article className="rounded-2xl w-24 h-24 xl:w-auto">
                <img
                  className="border-2 rounded-xl rounded-xl p-1 w-20 h-20 xl:w-40 xl:h-40"
                  src=""
                  alt="prod"
                />
                <label
                  className="flex justify-start gap-2 xl:justify-center"
                  htmlFor=""
                >
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">-</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">5</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">+</button>
                </label>
              </article>
            </div>
            <div className="col-span-3 md:w-5/12 md:mb-4 xl:h-60 ">
              <article className="text-xl flex gap-24 md:block xl:text-3xl xl:mb-6">
                <h2 className="">Name Name</h2>
                <h2 className="self-end">$200</h2>
              </article>
              <article className="text-xs w-11/12 md:w-9/12 xl:text-base">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quis omnis sit
                </h2>
              </article>
              <article className="flex justify-end mt-4 xl:mt-10">
                <img src="" alt="##" />
                <h2>Remove</h2>
              </article>
            </div>
          </div>
          <div className="grid grid-cols-4 my-16 gap-2 border-b-4 p-4 md:flex md:justify-center md:gap-10 xl:border-b-4 ">
            <div className="">
              <article className="rounded-2xl w-24 h-24 xl:w-auto">
                <img
                  className="border-2 rounded-xl rounded-xl p-1 w-20 h-20 xl:w-40 xl:h-40"
                  src=""
                  alt="prod"
                />
                <label
                  className="flex justify-start gap-2 xl:justify-center"
                  htmlFor=""
                >
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">-</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">5</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">+</button>
                </label>
              </article>
            </div>
            <div className="col-span-3 md:w-5/12 md:mb-4 xl:h-60 ">
              <article className="text-xl flex gap-24 md:block xl:text-3xl xl:mb-6">
                <h2 className="">Name Name</h2>
                <h2 className="self-end">$200</h2>
              </article>
              <article className="text-xs w-11/12 md:w-9/12 xl:text-base">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quis omnis sit
                </h2>
              </article>
              <article className="flex justify-end mt-4 xl:mt-10">
                <img src="" alt="##" />
                <h2>Remove</h2>
              </article>
            </div>
          </div>
          <div className="grid grid-cols-4 my-16 gap-2 border-b-4 p-4 md:flex md:justify-center md:gap-10 xl:border-b-4 ">
            <div className="">
              <article className="rounded-2xl w-24 h-24 xl:w-auto">
                <img
                  className="border-2 rounded-xl rounded-xl p-1 w-20 h-20 xl:w-40 xl:h-40"
                  src=""
                  alt="prod"
                />
                <label
                  className="flex justify-start gap-2 xl:justify-center"
                  htmlFor=""
                >
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">-</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">5</button>
                  <button className="border-2 w-5 h-5 xl:w-8 xl:h-8">+</button>
                </label>
              </article>
            </div>
            <div className="col-span-3 md:w-5/12 md:mb-4 xl:h-60 ">
              <article className="text-xl flex gap-24 md:block xl:text-3xl xl:mb-6">
                <h2 className="">Name Name</h2>
                <h2 className="self-end">$200</h2>
              </article>
              <article className="text-xs w-11/12 md:w-9/12 xl:text-base">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur quis omnis sit
                </h2>
              </article>
              <article className="flex justify-end mt-4 xl:mt-10">
                <img src="" alt="##" />
                <h2>Remove</h2>
              </article>
            </div>
          </div>
        </div>
        <div className="mb-20 md:py-8">
          <div className="border-2">
            <article className="text-center text-2xl border-b-2 pb-4 md:pb-14 ">
              <h1>Recibo del pedido</h1>
            </article>
            <article className="flex text-2xl justify-between px-4 my-4 md:my-6 md:justify-center md:gap-80">
              <h3>Subtotal:</h3>
              <h3>$400</h3>
            </article>
            <article className="flex text-2xl items-center justify-between gap-10 px-4 my-4 md:justify-center md:gap-72 md:my-8">
              <h3>Estimated tax:</h3>
              <h3>$20</h3>
            </article>
            <article className="flex justify-center p-1 my-4">
              <button className="border-4 rounded-2xl w-52 h-8 md:w-80 md:h-12">
                Redimir tarjeta regalo
              </button>
            </article>
            <article className="flex text-2xl items-center justify-between gap-10 px-4 pb-4 my-4 md:my-6 md:justify-center md:gap-72 xl:justify-between">
              <h3>Descuentos</h3>
              <h3>$42</h3>
            </article>
            <article className="flex text-2xl items-center justify-between gap-10 px-4 pb-4 my-4 md:my-6 md:justify-center md:gap-80 xl:justify-between">
              <h3>Total</h3>
              <h3>$420</h3>
            </article>
            <article className="flex justify-center p-1 text-white border-b-4 pb-4">
              {console.log(state.payment)}
              <form method="post" action={state.payment.url}>
                <input
                  name="merchantId"
                  type="hidden"
                  value={state.payment.merchantId}
                />
                <input
                  name="accountId"
                  type="hidden"
                  value={state.payment.accountId}
                />
                <input
                  name="description"
                  type="hidden"
                  value={state.payment.description}
                />
                <input
                  name="referenceCode"
                  type="hidden"
                  value={state.payment.referenceCode}
                />
                <input
                  name="amount"
                  type="hidden"
                  value={state.payment.amount}
                />
                <input name="tax" type="hidden" value="" />
                <input name="taxReturnBase" type="hidden" value="" />
                <input
                  name="currency"
                  type="hidden"
                  value={state.payment.currency}
                />
                <input
                  name="signature"
                  type="hidden"
                  value={state.payment.signature}
                />
                <input
                  name="algorithmSignature"
                  type="hidden"
                  value={state.payment.algorithmSignature}
                />
                <input name="test" type="hidden" value={state.payment.test} />
                <input
                  name="buyerFullName"
                  type="hidden"
                  value={state.user.name}
                />
                <input
                  name="buyerEmail"
                  type="hidden"
                  value={state.user.email}
                />
                <input
                  name="shippingAddress"
                  type="hidden"
                  value={state.user.address}
                />
                <input
                  name="shippingCity"
                  type="hidden"
                  value={state.user.city}
                />
                <input
                  name="zipCode"
                  type="hidden"
                  value={state.user.zipCode}
                />
                <input
                  name="telephone"
                  type="hidden"
                  value={state.user.telephone}
                />
                <input
                  name="responseUrl"
                  type="hidden"
                  value={state.payment.responseUrl}
                />
                <input
                  name="Submit"
                  type="submit"
                  value="Checkout"
                  className="bg-green-600 rounded-2xl w-52 h-8 cursor-pointer md:w-80 md:h-12"
                />
              </form>
            </article>
          </div>

          <div className="">
            <article className="h-96 flex justify-center pb-10">
              <img
                className="bg-red-500 mt-8 w-96 h-full rounded-3xl p-2"
                src=""
                alt="Publicidad"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
