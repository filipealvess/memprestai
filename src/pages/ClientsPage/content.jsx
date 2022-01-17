import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import { useClients } from '../../context/ClientsContext';
import { useLeases } from '../../context/LeasesContext';
import { clientsList } from '../../functions/conversion';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';

export default function ClientsPageContent() {
  const { clients, setClients } = useClients();
  const { leases } = useLeases();
  const [ localClients, setLocalClients ] = useState([]);

  useEffect(() => {
    if (clients.length > 0) {
      setLocalClients(clientsList(clients));
    }
  }, [clients]);

  function sortClients(optionName) {
    sortOptions.clientOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLocalClients(action(localClients));
      }
    });
  }
  
  function filterClients(optionName) {
    filterOptions.clientOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLocalClients(action(localClients, leases));
      }
    });
  }

  return (
    <React.Fragment>
      <Header />
      
      <ContentWrapper>
        <DisplayControl
          title="Todos os clientes"
          addButton
          sortOptions={sortOptions.clientOptions}
          filterOptions={filterOptions.clientOptions}
          filterFunction={filterClients}
          sortFunction={sortClients}
        />

        <List items={localClients} />
      </ContentWrapper>
    </React.Fragment>
  );
}
