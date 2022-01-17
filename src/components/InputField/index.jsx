import React from 'react';
import InputFieldWrapper, { InputFieldContent, InputFieldLabel } from './styles';

export default function InputField({ label, type = 'text' }) {
  return (
    <InputFieldWrapper>
      <InputFieldLabel>{label}:</InputFieldLabel>
      <InputFieldContent placeholder={label} type={type} />
    </InputFieldWrapper>
  );
}
