import React from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';

export default function ClientsPage() {
  const sortOptions = ['Ordenar por', 'Nome', 'Nascimento'];
  const filterOptions = ['Filtrar por', 'Com locação', 'Sem locação'];

  return (
    <React.Fragment>
      <Header />
      
      <ContentWrapper>
        <DisplayControl
          title="Todos os clientes"
          addButton
          sortOptions={sortOptions}
          filterOptions={filterOptions}
        />

        <List />
      </ContentWrapper>
    </React.Fragment>
  );
}
