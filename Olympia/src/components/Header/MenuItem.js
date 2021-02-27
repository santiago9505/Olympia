//React
import React from 'react';

const MenuItem = ({ Icon, Icon2, text, type }) => {
  let classList;

  switch(type){
    case 'categories':
      classList = 'justify-center bg-white rounded-md h-8 p-2';
      break;

    case 'options':
      classList = 'justify-self-center'
      break;

    default:
      classList = '';
      break;
  }

  return (
    <li className={`${classList} text-lg flex items-center`}>
      <span className="inline-block mr-2 text-xl">
        <Icon/>
      </span>
      <span className="flex-grow">
        {text}
      </span>
      {
        Icon2 &&
        <span className="inline-block">
          <Icon2/>
        </span>
      }
    </li>
  )
};

export default MenuItem;