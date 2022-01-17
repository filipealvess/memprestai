import React, { useEffect, useState } from 'react';
import filterOptions from '../../functions/filter';
import sortOptions from '../../functions/sort';
import HomePageContent from './content';

export default function HomePage() {
  const [leases, setLeases] = useState([]);
  const [clients, setClients] = useState([]);
  const [movies, setMovies] = useState([]);
  const [clientOptionList, setClientOptionList] = useState([]);
  const [movieOptionList, setMovieOptionList] = useState([]);
  const [deletePopupIsVisible, setDeletePopupIsVisible] = useState(false);
  const [formDrawerIsVisible, setFormDrawerIsVisible] = useState(false);
  const [formDrawerTitle, setFormDrawerTitle] = useState('Criar locação');
  const [deleteFunction, setDeleteFunction] = useState(null);
  const [leaseDate, setLeaseDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    setClientOptionList(fillClientOptionList());
  }, [clients]);

  useEffect(() => {
    setMovieOptionList(fillMovieOptionList());
  }, [movies]);

  useEffect(() => {
    if (clientOptionList.length > 0) {
      setSelectedClient(clientOptionList[0].option);
    }
  }, [clientOptionList]);

  useEffect(() => {
    if (movieOptionList.length > 0) {
      setSelectedMovie(movieOptionList[0].option);
    }
  }, [movieOptionList]);
  
  function sortLeases(optionName) {
    sortOptions.leaseOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLeases(action(leases));
      }
    });
  }
  
  function filterLeases(optionName) {
    filterOptions.leaseOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLeases(action(leases));
      }
    });
  }

  function updateLeases(leases) {
    setLeases(leases);
  }

  function updateClients(clients) {
    setClients(clients);
  }

  function updateMovies(movies) {
    setMovies(movies);
  }

  function handleDeleteLease(deleteLeaseFunction) {
    const newDeleteFunction = () => {
      deleteLeaseFunction();
      hidePopup();
    }

    setDeleteFunction(() => newDeleteFunction);
    setDeletePopupIsVisible(true);
  }

  function hidePopup() {
    setDeletePopupIsVisible(false);
  }

  function fillMovieOptionList() {
    return movies.map(movie => {
      return { option: movie.title };
    })
  }

  function fillClientOptionList() {
    return clients.map(client => {
      return { option: client.title };
    })
  }

  function formatDate(date) {
    return date.split('-').reverse().join('/');
  }

  function handleFormSubmit() {
    const leaseIds = leases.map(lease => lease.id).sort((a, b) => a - b);
    const biggerId = leaseIds[leaseIds.length - 1];
    const newLease = {
      id: biggerId + 1,
      client: selectedClient,
      movie: selectedMovie,
      start: formatDate(leaseDate),
      end: formatDate(returnDate),
      visible: true
    };

    setLeases([newLease, ...leases]);
    closeFormDrawer();
  }

  function restoreDefaultState() {
    setFormDrawerTitle('Criar locação');
    setLeaseDate('');
    setReturnDate('');
    setClientOptionList(fillClientOptionList());
    setMovieOptionList(fillMovieOptionList());
  }

  function closeFormDrawer() {
    restoreDefaultState();
    setFormDrawerIsVisible(false);
  }

  return (
    <HomePageContent
      setFormDrawerIsVisible={setFormDrawerIsVisible}
      filterLeases={filterLeases}
      sortLeases={sortLeases}
      leases={leases}
      updateLeases={updateLeases}
      updateClients={updateClients}
      updateMovies={updateMovies}
      handleDeleteLease={handleDeleteLease}
      deletePopupIsVisible={deletePopupIsVisible}
      deleteFunction={deleteFunction}
      hidePopup={hidePopup}
      formDrawerIsVisible={formDrawerIsVisible}
      formDrawerTitle={formDrawerTitle}
      closeFormDrawer={closeFormDrawer}
      setLeaseDate={setLeaseDate}
      leaseDate={leaseDate}
      setReturnDate={setReturnDate}
      returnDate={returnDate}
      clientOptionList={clientOptionList}
      setSelectedClient={setSelectedClient}
      selectedClient={selectedClient}
      movieOptionList={movieOptionList}
      setSelectedMovie={setSelectedMovie}
      selectedMovie={selectedMovie}
      handleFormSubmit={handleFormSubmit}
      formDrawerTitle={formDrawerTitle}
      sortOptions={sortOptions}
      filterOptions={filterOptions}
    />
  );
}
