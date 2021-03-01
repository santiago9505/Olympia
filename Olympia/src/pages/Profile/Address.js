import React from "react";

const Address = () => {
  return (
    <div className="">
      <article className="h-28 flex items-end justify-center pb-4 border-b-8">
        <h1 className="text-3xl text-center">Dirección de residencia</h1>
      </article>
      <form className="mx-8 my-8" action="">
        <section className="text-xs">
          <label className="">Addres Nickname</label>
          <input className="block border-b-4 my-1 w-2/6" type="text" />
          <label className="">Address</label>
          <input className="block border-b-4 my-1 w-2/6" type="text" />
        </section>
        <section className="text-xs grid grid-cols-2">
          <article>
            <label htmlFor="">Address 1</label>
            <input className="block border-b-4 my-1" type="text" />
          </article>
          <article>
            <label htmlFor="">Address 2</label>
            <input className="block border-b-4 my-1" type="text" />
          </article>
          <article>
            <label htmlFor="">Ciudad</label>
            <input className="block border-b-4 my-1" type="text" />
          </article>
          <article>
            <label htmlFor="">ZIP</label>
            <input className="block border-b-4 my-1" type="text" />
          </article>
          <article className="flex flex-col gap-2">
            <label htmlFor="">Country</label>
            <select name="" id="">
              <option value="">Colombia</option>
            </select>
          </article>
          <article className="flex flex-col gap-2">
            <label htmlFor="">City</label>
            <select name="" id="">
              <option value="">Bucaramanga</option>
            </select>
          </article>
        </section>
        <article className="flex my-4 text-sm gap-1">
          <input type="checkbox" />
          <p>Make this my default shipping address</p>
        </article>
        <button className="bg-blue-500 text-white w-20 rounded-xl mt-4 mx-4">
          Save
        </button>
        <button className="bg-blue-500 text-white w-20 rounded-xl mt-4 mx-4">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Address;
