import React, { useEffect, useState } from 'react';
import LeasesGridWrapper from './styles';
import LeaseGridItem from '../LeaseGridItem';
import { useLeases } from '../../context/LeasesContext';
import { clientsList, leasesList, moviesList } from '../../functions/conversion';
import { useClients } from '../../context/ClientsContext';
import { useMovies } from '../../context/MoviesContext';
import { findClientId, findMovieId } from '../../functions/find';

export default function LeasesGrid({
  manipulatedLeases,
  updateLeases,
  updateClients,
  updateMovies,
  showDeletePopup,
  handleUpdateLease,
  updatedLease,
  addedLease
}) {
  const { leases, setLeases } = useLeases();
  const { clients } = useClients();
  const { movies } = useMovies();
  const [ localLeases, setLocalLeases ] = useState([]);

  useEffect(() => {
    if (manipulatedLeases.length > 0) {
      setLocalLeases(manipulatedLeases);
    }
  }, [manipulatedLeases]);

  useEffect(() => {
    if (updatedLease) {
      setLeases(leases.map(lease => {
        if (lease.ID_Locacao === updatedLease.id) {
          return {
            ID_Locacao: updatedLease.id,
            ID_Cliente: findClientId(updatedLease.client, clients),
            Id_Filme: findMovieId(updatedLease.movie, movies),
            Data_Locacao: new Date(updatedLease.start.split('/').reverse()),
            Data_Devolucao: new Date(updatedLease.end.split('/').reverse())
          };
        } else {
          return lease;
        }
      }));
    }
  }, [updatedLease]);

  useEffect(() => {
    if (addedLease) {
      setLeases([
        {
          ID_Locacao: addedLease.id,
          ID_Cliente: findClientId(addedLease.client, clients),
          Id_Filme: findMovieId(addedLease.movie, movies),
          Data_Locacao: new Date(addedLease.start.split('/').reverse()),
          Data_Devolucao: new Date(addedLease.end.split('/').reverse())
        },
        ...leases
      ]);
    }
  }, [addedLease]);

  useEffect(() => {
    updateLeases(leasesList(leases, clients, movies));
  }, [leases]);

  useEffect(() => {
    updateClients(clientsList(clients));
  }, [clients]);

  useEffect(() => {
    updateMovies(moviesList(movies));
  }, [movies]);

  function deleteLease(leaseId) {
    const updatedLeaseList = leases.filter(lease => lease.ID_Locacao !== leaseId);
    setLeases(updatedLeaseList);
  }

  function handleDeleteLease(leaseId) {
    showDeletePopup(() => deleteLease(leaseId));
  }

  return (
    <LeasesGridWrapper>
      {
        localLeases.map(({ id, client, movie, start, end, visible }) => (
          <LeaseGridItem
            key={id}
            client={client}
            movie={movie}
            start={start}
            end={end}
            visible={visible}
            onDelete={() => handleDeleteLease(id)}
            onUpdate={() => handleUpdateLease(id)}
          />
        ))
      }
    </LeasesGridWrapper>
  );
}
