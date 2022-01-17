import React from 'react';
import AddButton from '../AddButton';
import Dropdown from '../Dropdown';
import DisplayControlWrapper, { DisplayControlTitle, DropdownsWrapper } from './styles';

export default function DisplayControl({
  title,
  addButton = false,
  sortOptions,
  filterOptions,
  filterFunction,
  sortFunction,
  onAdd
}) {
  return (
    <DisplayControlWrapper>
      <DisplayControlTitle>
        {title}
        {addButton && <AddButton onAdd={onAdd} />}
      </DisplayControlTitle>

      <DropdownsWrapper>
        <Dropdown
          text="Ordenar por"
          options={sortOptions}
          onChange={sortFunction}
        />

        <Dropdown
          text="Filtrar por"
          options={filterOptions}
          onChange={filterFunction}
        />
      </DropdownsWrapper>
    </DisplayControlWrapper>
  );
}
