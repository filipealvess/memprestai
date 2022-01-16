import React from 'react';
import ListItem from '../ListItem';
import ListWrapper from './styles';

export default function List({ items }) {
  return (
    <ListWrapper>
      {items.map(({id, title, infos, alertInfo}) => (
        <ListItem
          key={id}
          title={title}
          infos={infos}
          alertInfo={alertInfo}
        />
      ))}
    </ListWrapper>
  );
}
