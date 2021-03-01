//React
import React from 'react';

const Input = ({ forText, labelText, typeText, patternDef, idText, nameText, defaultText }) => {
  return (
    <div>
      <label
        htmlFor={ forText }
        className="block text-xs mb-1"
      >
        { labelText }
      </label>
      <input
        type={ !typeText ? 'text' : typeText }
        pattern={ patternDef && patternDef }
        id={ idText }
        name={ nameText }
        defaultValue={ defaultText }
        className="block border-b-2 border-gray-400 w-full"
      />
    </div>
  );
}

export default Input;