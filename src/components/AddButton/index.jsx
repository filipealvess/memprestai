import React from 'react';
import { Plus } from 'react-feather';
import AddButtonWrapper, { AddButtonText } from './styles';
import appTheme from '../../styles/AppTheme';

export default function AddButton({ link }) {
  return (
    <AddButtonWrapper to={link}>
      <Plus size={16} color={appTheme.colors.blue} />
      <AddButtonText>Novo</AddButtonText>
    </AddButtonWrapper>
  );
}
