//React
import React from 'react';

//Libs
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CgImage } from 'react-icons/cg';

const Login = () => {
  return (
    <div className="col-span-12 grid grid-cols-1 grid-rows-4-custom gap-4 items-center w-full mb-16 p-4">
      <div className="text-center text-2xl">
        <h1>
          Log into
          <br/>
          "Name E-Commerce"
        </h1>
      </div>
      <div>
        <form className="flex flex-col mb-2">
          <label htmlFor="email">Account</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email address or member ID"
            className="text-sm py-1 px-2 bg-gray-400 placeholder-gray-600 rounded-full mb-3"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="text-sm py-1 px-2 bg-gray-400 placeholder-gray-600 rounded-full mb-3"
          />
          <label className="mb-3">
            <input
              type="checkbox"
              name="staySigned"
              className="mr-2"
            />
            Stay signed in
          </label>
          <input
            type="submit"
            value="Sign in"
            className="w-2/5 py-0.5 m-auto mb-1 rounded-full text-lg border-2 border-gray-400 bg-white active:bg-gray-400"
          />
          <p className="text-xs text-center underline">I've forgotten my password</p>
        </form>
        <div className="flex justify-between">
          <hr className="my-3 flex-grow border-t-2 border-gray-400"/>
          <span className="w-8 text-center">o</span>
          <hr className="my-3 flex-grow border-t-2 border-gray-400"/>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl mb-2">Sign in with</h2>
        <div className="flex justify-between text-3xl w-2/4 m-auto mb-5">
          <span><FaFacebookSquare/></span>
          <span><FaInstagram/></span>
          <span><MdEmail/></span>
          <span><FaLinkedin/></span>
        </div>
        <p className="text-xs">
          New to "name e-commerce"? &nbsp;
          <a href="#" className="underline">Create an account</a>
        </p>
      </div>
      <div className="flex justify-center text-9xl">
        <CgImage/>
      </div>
    </div>
  );
}

export default Login;