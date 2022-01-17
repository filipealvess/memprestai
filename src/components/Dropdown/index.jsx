import React from 'react';
import DropdownContent, { DropdownWrapper, Label } from './styles';

export default function Dropdown({ options, onChange, big = false, label }) {
  function handleOptionSelect({ target }) {
    onChange(target.value);
  }

  return (
    <DropdownWrapper>
      {label && <Label>{label}:</Label>}

      <DropdownContent onInput={handleOptionSelect} big={big}>
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
      </DropdownContent>
    </DropdownWrapper>
  );
}
