import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import DeletePopup from '../../components/DeletePopup';
import { useClients } from '../../context/ClientsContext';
import { useLeases } from '../../context/LeasesContext';
import { clientsList } from '../../functions/conversion';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';

export default function ClientsPageContent() {
  const { clients, setClients } = useClients();
  const { leases } = useLeases();
  const [ localClients, setLocalClients ] = useState([]);
  const [ deletePopupIsVisible, setDeletePopupIsVisible ] = useState(false);
  const [ deleteFunction, setDeleteFunction ] = useState(null);

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

  function deleteClient(clientId) {
    const updatedClientList = clients.filter(client => client.ID_Cliente !== clientId);

    setClients(updatedClientList);
  }

  function handleDeleteClient(clientId) {
    const newDeleteFunction = () => {
      hideDeletePopup();
      deleteClient(clientId);
    };

    setDeletePopupIsVisible(true);
    setDeleteFunction(() => newDeleteFunction);
  }

  function hideDeletePopup() {
    setDeletePopupIsVisible(false);
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

        <List
          items={localClients}
          onDelete={handleDeleteClient}
        />
      </ContentWrapper>

      <DeletePopup
        visible={deletePopupIsVisible}
        message="Tem certeza que deseja excluir permanentemente esse cliente?"
        cancelFunction={hideDeletePopup}
        deleteFunction={deleteFunction}
      />
    </React.Fragment>
  );
}
