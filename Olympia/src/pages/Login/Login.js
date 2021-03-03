//React
import React from "react";
import { Link } from "react-router-dom";

//Libs
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgImage } from "react-icons/cg";

const Login = () => {
  return (
    <div className="col-span-12 grid grid-cols-1 grid-rows-4-custom gap-4 items-center w-full mb-16 p-4">
      <div className="text-center text-2xl">
        <h1>
          Log into
          <br />
          "Name E-Commerce"
        </h1>
      </div>
      <div>
        <form className="flex flex-col mb-2 items-center md:grid md:grid-cols-1 md:justify-items-center md:gap-4 md:mt-8">
          <div className="md:flex md:gap-4">
            <label className="flex justify-center" htmlFor="email">
              Account
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email address or member ID"
              className="flex text-sm py-1 px-2 bg-gray-400 placeholder-gray-600 rounded-full mb-3 w-80"
            />
          </div>
          <div className="md:flex md:gap-3">
            <label className="flex justify-center" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="flex text-sm py-1 px-2 bg-gray-400 placeholder-gray-600 rounded-full mb-3 w-80"
            />
          </div>

          <label className="mb-3">
            <input type="checkbox" name="staySigned" className="mr-2" />
            Stay signed in
          </label>
          <input
            type="submit"
            value="Sign in"
            className="w-40 py-0.5 m-auto mb-1 rounded-full text-lg border-2 border-gray-400 bg-white active:bg-gray-400 md:w-52"
          />
          <p className="text-xs text-center underline">
            I've forgotten my password
          </p>
        </form>
        <div className="flex justify-between">
          <hr className="my-3 flex-grow border-t-2 border-gray-400" />
          <span className="w-8 text-center">o</span>
          <hr className="my-3 flex-grow border-t-2 border-gray-400" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-xl mb-2">Sign in with</h2>
        <div className="flex justify-center gap-2 text-3xl w-2/4 m-auto mb-5 md:gap-4 md:mt-3">
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <MdEmail />
          </span>
          <span>
            <FaLinkedin />
          </span>
        </div>
        <p className="text-xs">
          New to "name e-commerce"? &nbsp;
          <Link to="/signup" className="underline">
            Create an account
          </Link>
        </p>
      </div>
      <div className="flex justify-center text-9xl">
        <CgImage />
      </div>
    </div>
  );
};

export default Login;
