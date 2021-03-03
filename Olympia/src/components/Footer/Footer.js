//React
import React from 'react';
import { Link } from 'react-router-dom';

//Libs
import { FaFacebookF, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { SiAmericanexpress } from 'react-icons/si';

//Components
import MenuItem from '../Header/MenuItem';

const Footer = () => {
  return(
    <footer className="hidden col-span-12 bg-gray-300 p-4 md:block">
      <div className="flex justify-between m-auto text-2xl w-1/4">
        <Link to="/">
          <FaFacebookF/>
        </Link>
        <Link to="/">
          <FaInstagram/>
        </Link>
        <Link  to="/">
          <FaYoutube/>
        </Link>
      </div>
      <hr className="my-3 border-t-2 border-gray-400"/>
      <div className="hidden lg:block">
        <h2 className="text-lg text-center mb-5">Medios de pago aceptados</h2>
        <div className="flex justify-between w-2/4 m-auto text-2xl mb-5">
          <span><FaCcVisa/></span>
          <span><FaCcMastercard/></span>
          <span><SiAmericanexpress/></span>
          <span><FaCcPaypal/></span>
          <span><FaCcApplePay/></span>
        </div>
        <hr className="my-3 border-t-2 border-gray-400"/>
      </div>
      <div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-4 w-max justify-items-end m-auto">
          <MenuItem Icon2={BsChevronDown} text="Terminos y condiciones"/>
          <MenuItem Icon2={BsChevronDown} text="Centro de ayuda"/>
          <MenuItem Icon2={BsChevronDown} text="Sobre nosotros"/>
          <MenuItem Icon2={BsChevronDown} text="Politica"/>
          <MenuItem Icon2={BsChevronDown} text="Servicios"/>
          <MenuItem Icon2={BsChevronDown} text="Contacto"/>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;