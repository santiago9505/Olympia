import React from "react";

const CreateAccount = () => {
  return (
    <div className="col-span-12 h-screen mt-6">
      <h1 className="text-3xl text-center mb-6">Create An Account</h1>
      <form className="mx-8" action="">
        <section className="text-xl">
          <label className="absolute">Email Address*</label>
          <input className="block border-b-4 my-4" type="text" />
          <label className="absolute">Password*</label>
          <input className="block border-b-4 my-4" type="text" />
        </section>
        <section className="my-4">
          <h2 className="text-xl">Date of Birth</h2>
          <input type="date" />
        </section>
        <section className="text-xl">
          <label className="border-b-4 absolute my-4" htmlFor="">
            First Name*
          </label>
          <input className="my-4" type="text" />
          <label className="border-b-4 absolute my-4" htmlFor="">
            Last Name*
          </label>
          <input type="text my-4" />
          <h1 className="block mt-4 text-2xl my-1">Gender</h1>
          <select
            className="border-2 border-gray-400 rounded-md text-sm"
            name=""
            id=""
          >
            <option className="text-xs" disabled selected>
              Choose Gender
            </option>

            <option className="text-xs" value="">
              Female
            </option>
            <option className="text-xs" value="">
              Male
            </option>
            <option className="text-xs">Preffer not say</option>
          </select>
          <section className="my-4 text-sm text-start">
            <section className="flex">
              <input
                className="m-1"
                type="checkbox"
                name="terminos"
                value="1"
              />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                qui autem asdasdasdasdasdas asdasdasdsadas elit. Quaerat qui
                autem asdasdasdasdasdas asdasdasdsadas
              </p>
            </section>

            <p className="my-4 block text-justify mx-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repellat consectetur iure. Sapiente nulla dignissimos eligendi eum
              magnam et de
            </p>
          </section>
        </section>
        <button className="bg-blue-500 text-white rounded-xl w-40 text-center">
          Create Account
        </button>
        <p>
          Already registered?{" "}
          <a className="underline">Sign into your Account</a>
        </p>
      </form>
      <article className="mt-6 bg-gray-400 w-72 h-52 mx-auto rounded-2xl p-2">
        <img src="" alt="Promocion" />
      </article>
    </div>
  );
};

export default CreateAccount;
