//React
import React from 'react';

const Select = ({ forText, labelText, idText, nameText, children }) => {
  return (
    <div>
      <label
        htmlFor={ forText }
        className="block text-xs mb-1"
      >
        { labelText }
      </label>
      <select
        id={ idText }
        name={ nameText }
        className="block"
      >
        { children }
      </select>
    </div>
  );
}

export default Select;