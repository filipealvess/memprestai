import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import { moviesList } from '../../functions/conversion';
import { useMovies } from '../../context/MoviesContext';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';
import DeletePopup from '../../components/DeletePopup';
import CheckBox from '../../components/CheckBox';
import FormDrawer from '../../components/FormDrawer';
import InputField from '../../components/InputField';
import PrimaryButton from '../../components/PrimaryButton';

export default function MoviesPageContent() {
  const { movies, setMovies } = useMovies();
  const [ localMovies, setLocalMovies ] = useState([]);
  const [ deletePopupIsVisible, setDeletePopupIsVisible ] = useState(false);
  const [ deleteFunction, setDeleteFunction ] = useState(null);
  const [ formDrawerIsVisible, setFormDrawerIsVisible ] = useState(false);
  const [ formDrawerTitle, setFormDrawerTitle ] = useState('Adicionar filme');
  const [ savedMovieId, setSavedMovieId ] = useState(null);
  const [ movieTitle, setMovieTitle] = useState('');
  const [ movieRating, setMovieRating] = useState('');
  const [ movieReleased, setMovieReleased] = useState(false);

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

  function deleteMovie(movieId) {
    const updatedMovieList = localMovies.filter(movie => movie.id !== movieId);

    setMovies(updatedMovieList.map(({id, title, parentalRating, alertInfo}) => ({
      Id: id,
      Titulo: title,
      Classificacao_Indicativa: parentalRating,
      Lancamento: alertInfo === '' ? 1 : 0
    })));
  }

  function handleDeleteMovie(movieId) {
    const newDeleteFunction = () => {
      hideDeletePopup();
      deleteMovie(movieId);
    };

    setDeletePopupIsVisible(true);
    setDeleteFunction(() => newDeleteFunction);
  }

  function addMovie() {
    const movieIds = localMovies.map(movie => movie.id).sort((a, b) => a - b);
    const biggerId = movieIds[movieIds.length - 1];

    const newMovie = {
      id: biggerId + 1,
      title: movieTitle,
      parentalRating: movieRating,
      alertInfo: movieReleased ? '' : 'Ainda n??o foi lan??ado',
      infos: [`Classifica????o: ${movieRating}`],
      visible: true
    };
    
    const updatedMovieList = [newMovie, ...localMovies];

    setMovies(updatedMovieList.map(({id, title, parentalRating, alertInfo}) => ({
      Id: id,
      Titulo: title,
      Classificacao_Indicativa: parentalRating,
      Lancamento: alertInfo === '' ? 1 : 0
    })));
  }
  
  function updateMovie() {
    const updatedMovie = {
      id: savedMovieId,
      title: movieTitle,
      alertInfo: movieReleased ? '' : 'Ainda n??o foi lan??ado',
      infos: [`Classifica????o: ${movieRating}`],
      parentalRating: movieRating,
      visible: true
    };

    localMovies.forEach((movie, index) => {
      if (movie.id === savedMovieId) {
        localMovies[index] = updatedMovie;
      }
    });

    setMovies(localMovies.map(({id, title, parentalRating, alertInfo}) => ({
      Id: id,
      Titulo: title,
      Classificacao_Indicativa: parentalRating,
      Lancamento: alertInfo === '' ? 1 : 0
    })));
  }

  function handleFormSubmit() {
    if (formDrawerTitle === 'Adicionar filme') {
      addMovie();
    } else if (formDrawerTitle === 'Atualizar filme') {
      updateMovie();
    }

    hideFormDrawer();
  }

  function handleMovieAdd() {
    showFormDrawer();
  }

  function handleUpdateMovie(movieId) {
    const foundMovie = localMovies.filter(({id}) => movieId === id)[0];
    const { title, parentalRating, alertInfo } = foundMovie;

    setMovieRating(parentalRating);
    setMovieReleased(alertInfo === '');
    setMovieTitle(title);
    setSavedMovieId(movieId);
    setFormDrawerTitle('Atualizar filme');
    showFormDrawer();
  }

  function restoreDefaultState() {
    setFormDrawerTitle('Adicionar filme');
    setMovieRating('');
    setSavedMovieId(null);
    setMovieReleased(false);
    setMovieTitle('');
  }

  function hideDeletePopup() {
    setDeletePopupIsVisible(false);
  }

  function showFormDrawer() {
    setFormDrawerIsVisible(true);
  }

  function hideFormDrawer() {
    restoreDefaultState();
    setFormDrawerIsVisible(false);
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
          onAdd={handleMovieAdd}
        />

        <List
          items={localMovies}
          onDelete={handleDeleteMovie}
          onUpdate={handleUpdateMovie}
        />
      </ContentWrapper>

      <DeletePopup
        visible={deletePopupIsVisible}
        message="Tem certeza que deseja excluir permanentemente esse filme?"
        cancelFunction={hideDeletePopup}
        deleteFunction={deleteFunction}
      />

      <FormDrawer
        title={formDrawerTitle}
        visible={formDrawerIsVisible}
        close={hideFormDrawer}
      >
        <InputField
          label="T??tulo"
          onChange={setMovieTitle}
          value={movieTitle}
        />

        <InputField
          label="Classifica????o"
          onChange={setMovieRating}
          value={movieRating}
          type="number"
        />

        <CheckBox label="Foi lan??ado" checked={movieReleased} onChange={setMovieReleased} />

        <PrimaryButton onClick={handleFormSubmit}>
          {formDrawerTitle}
        </PrimaryButton>
      </FormDrawer>
    </React.Fragment>
  );
}
