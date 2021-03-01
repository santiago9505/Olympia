//React
import React from 'react';

//Libs
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';

//Components
import Input from '../Input/Input';
import Select from '../Select/Select';

const NewPaymentMethod = ({ toggle }) => {
  return (
    <div className={`${ toggle ? 'h-670' : 'h-0'} overflow-hidden transition-custom-all duration-custom-1000 custom-ease`}>
      <hr className="w-8/12 m-auto my-3 border-t-2 border-gray-400"/>
      <h2 className="text-sm text-center mb-1 md:text-left">"Name Ecommerce" accepts this credit and debit cards</h2>
      <div className="flex justify-between w-2/4 m-auto text-2xl mb-5">
        <span><FaCcVisa/></span>
        <span><FaCcMastercard/></span>
        <span><SiAmericanexpress/></span>
        <span><FaCcPaypal/></span>
        <span><FaCcApplePay/></span>
      </div>
      <form>
        <fieldset className="mb-5">
          <h2 className="text-center text-lg mb-4">Card data</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Input
              forText="cardName"
              labelText="Name on Card"
              idText="cardName"
              nameText="cardName"
              defaultText="Name Name"
            />
            <Input
              forText="cardNumber"
              labelText="Card number"
              typeText="number"
              idText="cardNumber"
              nameText="cardNumber"
              defaultText="101010101010"
            />
            <Input
              forText="MM/YY"
              labelText="MM/YY"
              patternDef="(?:0[1-9]|1[0-2])/[0-9]{2}"
              idText="expiration"
              nameText="expiration"
              defaultText="10/01"
            />
            <Input
              forText="cvc"
              labelText="CVC"
              patternDef="^[0-9]{3}$"
              idText="cvc"
              nameText="cvc"
              defaultText="101"
            />
            <Input
              forText="fullName"
              labelText="Full name"
              idText="fullName"
              name="fullName"
              defaultText="Name Name"
            />
          </div>
        </fieldset>
        <fieldset className="mb-5">
          <h2 className="text-center text-lg mb-4">Residence data</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Select
              forText="country"
              labelText="Country"
              idText="country"
              nameText="country"
            >
              <option value="argentina">Argentina</option>
              <option value="colombia">Colombia</option>
            </Select>
            <Input
              forText="address"
              labelText="Address"
              idText="address"
              nameText="address"
              defaultText="Name Name"
            />
            <Select
              forText="home"
              labelText="Apto, House, Etc"
              idText="home"
              nameText="home"
              defaultText="Name Name"
            >
              <option value="apto">Apto</option>
              <option value="house">House</option>
            </Select>
            <Input
              forText="city"
              labelText="Town City"
              idText="city"
              nameText="city"
              defaultText="Name Name"
            />
            <Select
              forText="state"
              labelText="State"
              idText="state"
              nameText="state"
            >
              <option value="texas">Texas</option>
              <option value="florida">Florida</option>
            </Select>
            <Input
              forText="zip"
              labelText="ZIP"
              idText="zip"
              nameText="zip"
              defaultText="Name Name"
            />
          </div>
        </fieldset>
        <fieldset>
          <h2 className="text-center text-lg mb-4">Additional information</h2>
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
        </fieldset>
      </form>
    </div>
  );
}

export default NewPaymentMethod;