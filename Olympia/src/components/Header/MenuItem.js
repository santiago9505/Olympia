//React
import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ Icon, Icon2, text, type, url }) => {
  let classList;

  switch (type) {
    case "categories":
      classList =
        " justify-center items-center bg-background_principal rounded-md p-2 font-bold text-white";
      break;

    case "options":
      classList = "justify-self-center";
      break;

    case "lateralMenu":
      classList = "text-sm mb-3";
      break;

    default:
      classList = "";
      break;
  }

  return (
    <li className={`${classList} text-sm `}>
      <Link to={url ? url : "/"} className="block w-full flex items-center ">
        {Icon && (
          <span className="inline-block mr-2 text-2xl icons-color">
            <Icon />
          </span>
        )}
        <span className="text-2xl">{text}</span>
        {Icon2 && (
          <span className="inline-block ml-1 icons-color">
            <Icon2 />
          </span>
        )}
      </Link>
    </li>
  );
};

export default MenuItem;
