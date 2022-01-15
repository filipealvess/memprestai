import React from 'react';
import { Edit3, Trash } from 'react-feather';
import appTheme from '../../styles/AppTheme';
import ListItemWrapper, {
  AlertInfo,
  InfoItem,
  Option,
  OptionsWrapper,
  Title
} from './styles';

export default function ListItem() {
  return (
    <ListItemWrapper>
      {/* TEMPORARY!!! */}
      <div>
        <Title>Item de exemplo</Title>
        <InfoItem>Informação: ???</InfoItem>
        <InfoItem>Informação: ???</InfoItem>
      </div>

      <AlertInfo>
        Alerta
      </AlertInfo>

      <OptionsWrapper>
        <Option><Edit3 color={appTheme.colors.yellow} size="20" /></Option>
        <Option><Trash color={appTheme.colors.red} size="20" /></Option>
      </OptionsWrapper>
    </ListItemWrapper>
  );
}
