import React from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';

export default function MoviesPage() {
  const sortOptions = ['Ordenar por', 'Título', 'Classificação'];
  const filterOptions = ['Filtrar por', 'Lançados', 'Em espera'];

  return (
    <React.Fragment>
      <Header />

      <ContentWrapper>
        <DisplayControl
          title="Todos os filmes"
          addButton
          sortOptions={sortOptions}
          filterOptions={filterOptions}
        />

        <List />
      </ContentWrapper>
    </React.Fragment>
  );
}
