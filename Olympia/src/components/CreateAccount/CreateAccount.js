import React from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <section className="col-span-12 my-8 mb-20 bg-white">
      <h1 className="text-3xl text-center mb-6 text-black">Create An Account</h1>
      <form className="mx-8" action="">
        <section className="text-xl">
          <input placeholder="Email Address*" className="block bg-white my-4 placeholder-principal_gray text-base" type="text" />
          <p className="relative bottom-4 border-b-4 rounded my-4 w-60 border-principal_blue"></p>
          <input placeholder="Password*" className="block bg-white my-4 placeholder-principal_gray text-base" type="password" />
          <p className="relative bottom-4 border-b-4 rounded my-4 w-60 border-principal_blue"></p>
        </section>
        <section className="my-4">
          <h2 className="text-black text-xl">Date of Birth</h2>
          <input type="date" className="pl-4 bg-white pb-1 border-2 border-principal_blue rounded-sm"/>
        </section>
        <section className="flex gap-10">
        <div>
          <input placeholder="First Name*" className="block bg-white my-4    placeholder-principal_gray w-28 text-base" type="text" />
          <p className="relative bottom-4 border-b-4 rounded my-4 w-28 border-principal_blue"></p>
        </div>
        <div>
          <input placeholder="Last Name*" className="block bg-white my-4 placeholder-principal_gray w-28 text-base" type="text" />
          <p className="relative bottom-4 border-b-4 rounded my-4 w-28 border-principal_blue"></p>
        </div>
        </section>
        <section className="text-xl">
          <h1 className="block mt-4 text-2xl text-black ">Gender</h1>
          <select
            className="border-2 bg-white border-principal_blue rounded-md text-sm"
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
                className="m-1 self-start"
                type="checkbox"
                name="terminos"
                value="1"
              />
              <p className="text-sm text-black">
              I wish to receive the latest news and exclusive discounts by receiving "name ecommerce" Marketing Emails
              </p>
            </section>

            <p className="mt-4 block text-justify text-black">
            By creating your account, your agree to our Terms and conditions for full details on how and why "name ecommerce" uses your personal data please see our Privacy Notice
            </p>
          </section>
        </section>
        <div className="w-full flex justify-center my-4">
          <button className="bg-white text-black border-principal_blue border-4 rounded-3xl w-40 h-8 text-base pb-7">
            Create Account
          </button>
        </div>
        <div className="flex justify-center my-6">
          <p className="text-xs text-principal_gray">
            Already registered?
            <Link to="/login" className="underline">Sign into your Account</Link>
          </p>
        </div>
      </form>
      <article className="mt-6 bg-gray-400 w-10/12 h-52 my-8 mx-auto rounded-2xl p-2">
        <img src="" alt="Promocion" />
      </article>
    </section>
  );
};

export default CreateAccount;
