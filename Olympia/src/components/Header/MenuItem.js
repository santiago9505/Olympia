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

    case 'lateralMenu':
      classList = 'text-sm mb-3'
      break;

    default:
      classList = '';
      break;
  }

  return (
    <li className={`${classList} text-sm`}>
      <Link to={url ? url : '/'} className="block w-full flex items-center">
        {
          Icon &&
          <span className="inline-block mr-2 text-xl">
            <Icon/>
          </span>
        }
        <span>
          {text}
        </span>
        {
          Icon2 &&
          <span className="inline-block ml-1">
            <Icon2/>
          </span>
          }
      </Link>
    </li>
  )
};

export default MenuItem;