import React from 'react';
import ListItem from '../ListItem';
import ListWrapper from './styles';

export default function List({ items, onDelete }) {
  return (
    <ListWrapper>
      {items.map(({id, title, infos, alertInfo, visible}) => (
        <ListItem
          key={id}
          title={title}
          infos={infos}
          alertInfo={alertInfo}
          visible={visible}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ListWrapper>
  );
}
