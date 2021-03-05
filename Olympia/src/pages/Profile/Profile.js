//React
import React from "react";
import { Link } from "react-router-dom";

//Libs
import { MdModeEdit } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 mb-16 p-4 pb-20 items-center">
      <div className="text-center text-2xl border-b-2 pb-2 px-2 xl:text-4xl pb-6 font-bold">
        <h1>Personal Information</h1>
      </div>
      <div className="w-11/12 flex flex-col items-center">
        <span className="block text-right text-lg text-gray-500">
          <MdModeEdit className="inline" />
        </span>
        <form className="flex flex-col xl:w-full">
          <div className="flex mb-5 xl:w-6/12 xl:self-center">
            <figure className="w-24 h-24 rounded-full bg-gray-500 mr-4 xl:w-40 xl:h-40">
              <img className="" src="" alt="profile image" />
            </figure>
            <div className="flex-1 text-lg gap-10">
              <input
                type="text"
                name="name"
                defaultValue="Nombre Nombre"
                className="block w-full mb-3"
              />
              <input
                type="text"
                name="name"
                defaultValue="Rango semillero 1"
                className="block w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center w-full max-w-sm xl:text-2xl">
              <label
                htmlFor="email"
                className="text-xs text-center xl:text-2xl xl:my-2"
              >
                Email address *
              </label>
              <input
                type="text"
                id="email"
                defaultValue="name@name.com"
                className="border-b-2 border-gray-500 w-full mb-3 text-center"
              />
              <div className="flex flex-col items-center w-full max-w-sm xl:text-2xl xl:my-2">
                <label
                  htmlFor="password"
                  className="text-xs text-center xl:text-2xl"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  defaultValue="**********"
                  className="border-b-2 border-gray-500 w-full text-center"
                />
              </div>
            </div>
          </div>

          <span className="block text-right text-lg text-gray-500 mt-4">
            <MdModeEdit className="inline" />
          </span>

          <div className="text-2xl text-center mb-4 my-20 xl:text-4xl xl:font-semibold">
            <h2>Contact</h2>
          </div>

          <div className="flex flex-col mb-4 items-center">
            <div className="flex flex-col items-center w-full max-w-lg xl:text-xl">
              <label
                htmlFor="idNumber"
                className="block text-xs mb-1 text-center xl:text-2xl"
              >
                Identification number
              </label>
              <div className="relative flex border-b-2 border-gray-500 w-3/5 mb-3 ">
                <select
                  name="docType"
                  id="docType"
                  className="absolute -bottom-0.5 border-2 border-gray-500 rounded-full"
                >
                  <option value="cc">C.C</option>
                  <option value="ti">TI</option>
                </select>
                <input
                  type="number"
                  id="idNumber"
                  name="idNumber"
                  defaultValue="1010101010"
                  className="block ml-14 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full max-w-lg xl:text-xl">
              <label
                htmlFor="phoneNumber"
                className="block text-xs mb-1 xl:text-2xl"
              >
                Phone number
              </label>
              <div className="relative flex border-b-2 border-gray-500 w-3/5 mb-3">
                <select
                  name="numberCode"
                  id="numberCode"
                  className="absolute -bottom-0.5 border-2 border-gray-500 rounded-full"
                >
                  <option value="col">COL</option>
                  <option value="us">US</option>
                </select>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  defaultValue="3010101010"
                  className="block ml-16 w-full"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              value="Send"
              className="w-2/5 py-0.5 m-auto mb-1 rounded-full text-base border-2 border-gray-400 bg-white active:bg-gray-400"
            />
          </div>
        </form>
      </div>
      <div>
        <div className="flex justify-between">
          <button
            type="button"
            className="p-0.5 px-3 mb-1 rounded-full text-base border-2 border-gray-400 bg-white active:bg-gray-400 xl:hidden"
          >
            <Link to="/profile/address">Residence address</Link>
          </button>
          <button
            type="button"
            className="p-0.5 px-3 mb-1 rounded-full text-base border-2 border-gray-400 bg-white active:bg-gray-400 xl:hidden"
          >
            <Link to="/payment-method">Payment method</Link>
          </button>
        </div>
      </div>
      <div className="mb-20 relative hidden xl:flex xl:flex-col xl:justify-between w-full">
        <article className="h-28 flex items-end justify-center pb-4 border-b-8">
          <h1 className="text-4xl font-semibold">Residence address</h1>
        </article>
        <form className="mx-8 my-8" action="">
          <section className="text-xl">
            <label className="">Addres Nickname</label>
            <input className="block border-b-4 my-1 w-2/6" type="text" />
            <label className="">Address</label>
            <input className="block border-b-4 my-1 w-2/6" type="text" />
          </section>
          <section className="text-xl grid grid-cols-2">
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
          <article className="flex my-4 text-base gap-1">
            <input type="checkbox" />
            <p>Make this my default shipping address</p>
          </article>
          <div className="flex flex-row justify-center">
            <button className="bg-blue-500 text-white w-40 h-10 rounded-xl mt-4 mx-4">
              Save
            </button>
            <button className="bg-blue-500 text-white w-44 rounded-xl mt-4 mx-4">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
