import React, { useEffect, useState } from 'react';
import LeasesGridWrapper from './styles';
import LeaseGridItem from '../LeaseGridItem';
import { useLeases } from '../../context/LeasesContext';
import { leasesList } from '../../functions/conversion';
import { useClients } from '../../context/ClientsContext';
import { useMovies } from '../../context/MoviesContext';

export default function LeasesGrid({ manipulatedLeases, updateLeases, showPopup }) {
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
    updateLeases(leasesList(leases, clients, movies));
  }, [leases]);

  function deleteLease(leaseId) {
    const updatedLeaseList = leases.filter(lease => lease.ID_Locacao !== leaseId);
    setLeases(updatedLeaseList);
  }

  function handleDeleteLease(leaseId) {
    showPopup(() => deleteLease(leaseId));
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
          />
        ))
      }
    </LeasesGridWrapper>
  );
}
