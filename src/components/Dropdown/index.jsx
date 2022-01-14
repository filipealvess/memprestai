import React from 'react';
import DropdownWrapper from './styles';

export default function Dropdown({ options }) {
  return (
    <DropdownWrapper>
      {
        options.map((optionText, index) => (
          <option key={index}>{optionText}</option>
        ))
      }
    </DropdownWrapper>
  );
}
