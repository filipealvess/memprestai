import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import { moviesList } from '../../functions/conversion';
import { useMovies } from '../../context/MoviesContext';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';

export default function MoviesPageContent() {
  const { movies, setMovies } = useMovies();
  const [ localMovies, setLocalMovies ] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      setLocalMovies(moviesList(movies));
    }
  }, [movies]);

  function sortMovies(optionName) {
    sortOptions.movieOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLocalMovies(action(localMovies));
      }
    });
  }
  
  function filterMovies(optionName) {
    filterOptions.movieOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLocalMovies(action(localMovies));
      }
    });
  }

  return (
    <React.Fragment>
      <Header />

      <ContentWrapper>
        <DisplayControl
          title="Todos os filmes"
          addButton
          sortOptions={sortOptions.movieOptions}
          filterOptions={filterOptions.movieOptions}
          sortFunction={sortMovies}
          filterFunction={filterMovies}
        />

        <List items={localMovies} />
      </ContentWrapper>
    </React.Fragment>
  );
}
