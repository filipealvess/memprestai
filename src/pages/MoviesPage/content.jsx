import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import { moviesList } from '../../functions/conversion';
import { useMovies } from '../../context/MoviesContext';

export default function MoviesPageContent() {
  const { movies, setMovies } = useMovies();
  const [ localMovies, setLocalMovies ] = useState([]);
  const sortOptions = ['Ordenar por', 'Título', 'Classificação'];
  const filterOptions = ['Filtrar por', 'Lançados', 'Em espera'];

  useEffect(() => {
    if (movies.length > 0) {
      setLocalMovies(moviesList(movies));
    }
  }, [movies]);

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

        <List items={localMovies} />
      </ContentWrapper>
    </React.Fragment>
  );
}
