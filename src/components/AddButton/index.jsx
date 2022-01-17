import React from 'react';
import { Plus } from 'react-feather';
import AddButtonWrapper, { AddButtonText } from './styles';
import appTheme from '../../styles/AppTheme';

export default function AddButton({ onAdd }) {
  return (
    <AddButtonWrapper onClick={onAdd}>
      <Plus size={16} color={appTheme.colors.blue} />
      <AddButtonText>Novo</AddButtonText>
    </AddButtonWrapper>
  );
}
