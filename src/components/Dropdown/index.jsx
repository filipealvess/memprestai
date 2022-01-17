import React from 'react';
import DropdownWrapper from './styles';

export default function Dropdown({ options, onChange }) {
  function handleOptionSelect({ target }) {
    onChange(target.value);
  }

  return (
    <DropdownWrapper onInput={handleOptionSelect}>
      {
        options.map(({ option }, index) => (
          <option
            key={index}
            value={option}
          >
            {option}
          </option>
        ))
      }
    </DropdownWrapper>
  );
}
