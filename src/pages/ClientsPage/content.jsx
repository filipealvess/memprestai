import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import { useClients } from '../../context/ClientsContext';
import { clientsList } from '../../functions/conversion';

export default function ClientsPageContent() {
  const { clients, setClients } = useClients();
  const [ localClients, setLocalClients ] = useState([]);
  const sortOptions = ['Ordenar por', 'Nome', 'Nascimento'];
  const filterOptions = ['Filtrar por', 'Com locação', 'Sem locação'];

  useEffect(() => {
    if (clients.length > 0) {
      setLocalClients(clientsList(clients));
    }
  }, [clients]);

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

        <List items={localClients} />
      </ContentWrapper>
    </React.Fragment>
  );
}
