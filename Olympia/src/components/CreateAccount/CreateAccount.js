import React from "react";

const CreateAccount = () => {
  return (
    <div className="text-4xl col-span-12 bg-green-500 mt-10 mx-auto">
      <h1>Create An Account</h1>
      <form
        className="flex flex-col border rounded-b-lg px-8 w-11/12 bg-white gap-3 pt-3 pb-3 font-body font-medium text-sm md:w-5/6 md:max-w-xs lg:pt-2 2xl:max-w-sm 2xl:h-full 2xl:text-xl"
        action=""
      >
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">Email-address</span>
          <input
            placeholder="graphene@gmail.com"
            className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">Password</span>
          <input
            placeholder="graphene123"
            className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
            type="text"
            name="password"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">Date Of Birth</span>
          <input
            placeholder="psicoanalista@gmail.com"
            className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
            type="date"
            name="date"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">First Name</span>
          <input
            placeholder="Graphene"
            className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
            type="text"
            name="first-name"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">Last Name</span>
          <input
            placeholder="Graphene"
            className="bg-gray-100 text-sm px-1 text-softblue-500 font-body font-medium"
            type="text"
            name="last-name"
          />
        </label>
        <label htmlFor="" className="flex flex-col">
          <span className="p-1">Gender</span>
          <select name="OS">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Preffer not to say</option>
          </select>
        </label>

        <button
          placeholder="Send"
          className="bg-red-500 rounded-md self-end h-20 w-24 text-white font-body font-semibold"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
