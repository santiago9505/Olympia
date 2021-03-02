//React
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ Icon, Icon2, text, type, url }) => {
  let classList;

  switch(type){
    case 'categories':
      classList = 'justify-center bg-white rounded-md p-2';
      break;

    case 'options':
      classList = 'justify-self-center'
      break;

    default:
      classList = '';
      break;
  }

  return (
    <li className={`${classList} text-lg`}>
      <Link to={url} className="block w-full flex items-center">
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
      </Link>
    </li>
  )
};

export default MenuItem;