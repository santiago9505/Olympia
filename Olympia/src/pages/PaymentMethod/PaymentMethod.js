//React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Libs
import { BsCircle } from 'react-icons/bs';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

//Components
import NewPaymentMethod from '../../components/NewPaymentMethod/NewPaymentMethod';

const toggle = {
  method_1: false,
  method_2: false,
  method_2: false,
}

const PaymentMethod = () => {
  const [state, setState] = useState({
    toggle,
  });

  const handleToggle = (e) => {
    switch(e.target.id){
      case '1':
        setState({ toggle: { method_1: !state.toggle.method_1 }});
        break;

      case '2':
        setState({ toggle: { method_2: !state.toggle.method_2 }});
        break;

      case '3':
        setState({ toggle: { method_3: !state.toggle.method_3 }});
        break;

      default:
        setState({ toggle: toggle });
        break;
    }
  }

  return(
    <div className="grid grid-cols-1 grid-rows-3-custom gap-4 mb-20 p-4">
      <div>
        <Link to="/profile" className="inline-block text-3xl cursor-pointer">
          <IoArrowBackCircleOutline/>
        </Link>
      </div>
      <div className="text-2xl text-center">
        <h1>Payment method</h1>
      </div>
      <div className="flex flex-col text-sm mt-4">
        <div>
          <button type="button" id="1" className="flex items-center text-sm cursor-pointer" onClick={handleToggle}>
            <span className="mr-1 text-xs"><BsCircle/></span>
            Add a credit or debit card
          </button>
          <NewPaymentMethod toggle={state.toggle.method_1}/>
        </div>
        <div>
          <button type="button" id="2" className="flex items-center text-sm cursor-pointer" onClick={handleToggle}>
            <span className="mr-1 text-xs"><BsCircle/></span>
            Add a credit or debit card
          </button>
          <NewPaymentMethod toggle={state.toggle.method_2}/>
        </div>
        <div>
          <button type="button" id="3" className="flex items-center text-sm cursor-pointer" onClick={handleToggle}>
            <span className="mr-1 text-xs"><BsCircle/></span>
            Add a credit or debit card
          </button>
          <NewPaymentMethod toggle={state.toggle.method_3}/>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;