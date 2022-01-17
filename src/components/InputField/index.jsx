import React from 'react';
import InputFieldWrapper, { InputFieldContent, InputFieldLabel } from './styles';

export default function InputField({ label, type = 'text', onChange, value }) {
  function handleInputChange({ target }) {
    onChange(target.value);
  }

  return (
    <InputFieldWrapper>
      <InputFieldLabel>{label}:</InputFieldLabel>
      <InputFieldContent
        placeholder={label}
        type={type}
        required
        onChange={handleInputChange}
        value={value}
      />
    </InputFieldWrapper>
  );
}
