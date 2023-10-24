
import React, { useState } from 'react';

function Autocomplete({ suggestions}) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    onSelect(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Saisissez une valeur"
      />
      <ul>
        {suggestions
          .filter((suggestion) => suggestion.includes(inputValue))
          .map((suggestion, index) => (
            <li key={index} onClick={() => handleSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Autocomplete;
