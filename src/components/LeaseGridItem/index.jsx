import React from 'react';
import { Edit3, Trash } from 'react-feather';
import LeaseGridItemWrapper, { Option, Options, OptionsDivider, Title } from './styles';

export default function LeaseGridItem({ start, end, movie, client }) {
  return (
    <LeaseGridItemWrapper>
      <Title>
        De <span>{start}</span> até <span>{end}</span>
      </Title>

      <p>Filme: {movie}</p>

      <p>Cliente: {client}</p>

      <Options>
        <Option><Edit3 /></Option>
        <OptionsDivider />
        <Option><Trash /></Option>
      </Options>
    </LeaseGridItemWrapper>
  );
}
