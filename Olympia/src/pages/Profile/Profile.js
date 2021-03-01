//React
import React from 'react';

//Libs
import { MdModeEdit } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3-custom gap-4 mb-16 p-4">
      <div className="text-center text-2xl">
        <h1>Personal Information</h1>
      </div>
      <div>
        <span className="block text-right text-lg text-gray-500">
          <MdModeEdit className="inline"/>
        </span>
        <form className="flex flex-col">
          <div className="flex mb-5">
            <figure className="w-24 h-24 rounded-full bg-gray-500 mr-4">
              <img src="" alt="profile image"/>
            </figure>
            <div className="flex-1 text-lg">
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
          <div className="flex flex-col">
            <div>
              <label htmlFor="email" className="text-xs block">Email address *</label>
              <input
                type="text"
                id="email"
                defaultValue="name@name.com"
                className="border-b-2 border-gray-500 w-3/5 mb-3 block"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-xs block">Password *</label>
              <input
                type="password"
                id="password"
                defaultValue="**********"
                className="border-b-2 border-gray-500 w-3/5 block"
              />
            </div>
          </div>

          <span className="block text-right text-lg text-gray-500 mt-4">
            <MdModeEdit className="inline"/>
          </span>

          <div className="text-2xl text-center mb-4">
            <h2>Contact</h2>
          </div>

          <div className="flex flex-col mb-4">
            <div>
              <label htmlFor="idNumber" className="block text-xs mb-1">Identification number</label>
              <div className="relative flex border-b-2 border-gray-500 w-3/5 mb-3">
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
            <div>
              <label htmlFor="phoneNumber" className="block text-xs mb-1">Phone number</label>
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
          <button type="button" className="p-0.5 px-3 mb-1 rounded-full text-base border-2 border-gray-400 bg-white active:bg-gray-400">
            <a href="#">Residence address</a>
          </button>
          <button type="button" className="p-0.5 px-3 mb-1 rounded-full text-base border-2 border-gray-400 bg-white active:bg-gray-400">
            <a href="#">Payment method</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;