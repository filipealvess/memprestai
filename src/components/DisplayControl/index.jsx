import React from 'react';
import AddButton from '../AddButton';
import Dropdown from '../Dropdown';
import DisplayControlWrapper, { DisplayControlTitle, DropdownsWrapper } from './styles';

export default function DisplayControl(props) {
  const { title, addButton = false, sortOptions, filterOptions } = props;

  return (
    <DisplayControlWrapper>
      <DisplayControlTitle>
        {title}
        {addButton && <AddButton link="/" />}
      </DisplayControlTitle>

      <DropdownsWrapper>
        <Dropdown text="Ordenar por" options={sortOptions} />
        <Dropdown text="Filtrar por" options={filterOptions} />
      </DropdownsWrapper>
    </DisplayControlWrapper>
  );
}
