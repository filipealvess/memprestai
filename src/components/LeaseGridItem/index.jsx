import React from 'react';
import { Edit3, Trash } from 'react-feather';
import LeaseGridItemWrapper, { Option, Options, OptionsDivider, Title } from './styles';

export default function LeaseGridItem() {
  return (
    <LeaseGridItemWrapper>
      {/* TEMPORARY!!! */}
      <Title>
        De <span>???</span> até <span>???</span>
      </Title>

      <p>Filme: ???</p>

      <p>Cliente: ???</p>

      <Options>
        <Option><Edit3 /></Option>
        <OptionsDivider />
        <Option><Trash /></Option>
      </Options>
    </LeaseGridItemWrapper>
  );
}
