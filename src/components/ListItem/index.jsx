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

export default function ListItem({ title, infos, alertInfo }) {
  return (
    <ListItemWrapper>
      <div>
        <Title>{title}</Title>
        {infos.map((info, index) => <InfoItem key={index}>{info}</InfoItem>)}
      </div>

      {alertInfo && <AlertInfo>{alertInfo}</AlertInfo>}

      <OptionsWrapper>
        <Option><Edit3 color={appTheme.colors.yellow} size="20" /></Option>
        <Option><Trash color={appTheme.colors.red} size="20" /></Option>
      </OptionsWrapper>
    </ListItemWrapper>
  );
}
