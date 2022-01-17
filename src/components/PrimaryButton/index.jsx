import React from 'react';
import PrimaryButtonWrapper from './styles';

export default function PrimaryButton({ children, onClick }) {
  return (
    <PrimaryButtonWrapper onClick={onClick}>
      {children}
    </PrimaryButtonWrapper>
  );
}
