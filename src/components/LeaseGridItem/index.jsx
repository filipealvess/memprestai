import React from 'react';
import { Edit3, Trash } from 'react-feather';
import LeaseGridItemWrapper, {
  Infos,
  Option,
  Options,
  OptionsDivider,
  Title
} from './styles';

export default function LeaseGridItem({
  start,
  end,
  movie,
  client,
  visible,
  onDelete
}) {
  return (
    <LeaseGridItemWrapper visible={visible}>
      <Title>
        De <span>{start}</span> até <span>{end}</span>
      </Title>

      <Infos>
        <p>Filme: {movie}</p>
        <p>Cliente: {client}</p>
      </Infos>

      <Options>
        <Option><Edit3 /></Option>
        <OptionsDivider />
        <Option onClick={onDelete}><Trash /></Option>
      </Options>
    </LeaseGridItemWrapper>
  );
}
