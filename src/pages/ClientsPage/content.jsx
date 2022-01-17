import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import Header from '../../components/Header';
import DisplayControl from '../../components/DisplayControl';
import List from '../../components/List';
import DeletePopup from '../../components/DeletePopup';
import FormDrawer from '../../components/FormDrawer';
import InputField from '../../components/InputField';
import PrimaryButton from '../../components/PrimaryButton';
import { useClients } from '../../context/ClientsContext';
import { useLeases } from '../../context/LeasesContext';
import { clientsList } from '../../functions/conversion';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';
import { formatDate, formatCPF } from '../../functions/format';

export default function ClientsPageContent() {
  const { clients, setClients } = useClients();
  const { leases } = useLeases();
  const [ localClients, setLocalClients ] = useState([]);
  const [ deletePopupIsVisible, setDeletePopupIsVisible ] = useState(false);
  const [ deleteFunction, setDeleteFunction ] = useState(null);
  const [ formDrawerIsVisible, setFormDrawerIsVisible ] = useState(false);
  const [ formDrawerTitle, setFormDrawerTitle ] = useState('Adicionar cliente');
  const [ clientName, setClientName ] = useState('');
  const [ clientCPF, setClientCPF ] = useState('');
  const [ clientBirthDate, setClientBirthDate ] = useState('');
  const [ savedClientId, setSavedClientId ] = useState(null);

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
    const updatedClientList = localClients.filter(client => client.id !== clientId);

    setClients(updatedClientList.map(({id, title, cpf, birthDate}) => ({
      ID_Cliente: id,
      Nome: title,
      CPF: cpf,
      Data_Nascimento: new Date(birthDate.split('/').reverse())
    })));
  }

  function handleClientDelete(clientId) {
    const newDeleteFunction = () => {
      hideDeletePopup();
      deleteClient(clientId);
    };

    setDeletePopupIsVisible(true);
    setDeleteFunction(() => newDeleteFunction);
  }

  function handleClientAdd() {
    showFormDrawer();
  }

  function addClient() {
    const clientIds = localClients.map(client => client.id).sort((a, b) => a - b);
    const biggerId = clientIds[clientIds.length - 1];

    const newClient = {
      id: biggerId + 1,
      title: clientName,
      birthDate: formatDate(clientBirthDate, 'd/m/y'),
      cpf: clientCPF,
      infos: [
        `CPF: ${clientCPF}`,
        `Nascimento: ${formatDate(clientBirthDate, 'd/m/y')}`
      ],
      alertInfo: '',
      visible: true
    };

    const updatedClientList = [newClient, ...localClients];
    setClients(updatedClientList.map(({id, title, cpf, birthDate}) => ({
      ID_Cliente: id,
      Nome: title,
      CPF: cpf,
      Data_Nascimento: new Date(birthDate.split('/').reverse())
    })));
  }

  function updateClient() {
    const updatedClient = {
      id: savedClientId,
      title: clientName,
      birthDate: formatDate(clientBirthDate, 'd/m/y'),
      infos: [
        `CPF: ${clientCPF}`,
        `Nascimento: ${formatDate(clientBirthDate, 'd/m/y')}`
      ],
      alertInfo: '',
      cpf: clientCPF,
      visible: true
    };

    localClients.forEach((client, index) => {
      if (client.id === savedClientId) {
        localClients[index] = updatedClient;
      }
    });

    setClients(localClients.map(({id, title, cpf, birthDate}) => ({
      ID_Cliente: id,
      Nome: title,
      CPF: cpf,
      Data_Nascimento: new Date(birthDate.split('/').reverse())
    })));
  }

  function handleClientUpdate(clientId) {
    const foundClient = localClients.filter(({id}) => clientId === id)[0];
    const { title, birthDate, cpf } = foundClient;

    setClientBirthDate(formatDate(birthDate));
    setClientCPF(cpf);
    setClientName(title);
    setSavedClientId(clientId);
    setFormDrawerTitle('Atualizar cliente');
    showFormDrawer();
  }

  function handleCpfChange(cpf) {
    setClientCPF(formatCPF(cpf));
  }

  function hideDeletePopup() {
    setDeletePopupIsVisible(false);
  }

  function showFormDrawer() {
    setFormDrawerIsVisible(true);
  }

  function restoreDefaultState() {
    setClientBirthDate('');
    setClientCPF('');
    setClientName('');
    setFormDrawerTitle('Adicionar cliente');
  }

  function hideFormDrawer() {
    restoreDefaultState();
    setFormDrawerIsVisible(false);
  }

  function handleFormSubmit() {
    if (formDrawerTitle === 'Adicionar cliente') {
      addClient();
    } else if (formDrawerTitle === 'Atualizar cliente') {
      updateClient();
    }

    hideFormDrawer();
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
          onAdd={handleClientAdd}
        />

        <List
          items={localClients}
          onDelete={handleClientDelete}
          onUpdate={handleClientUpdate}
        />
      </ContentWrapper>

      <DeletePopup
        visible={deletePopupIsVisible}
        message="Tem certeza que deseja excluir permanentemente esse cliente?"
        cancelFunction={hideDeletePopup}
        deleteFunction={deleteFunction}
      />

      <FormDrawer
        title={formDrawerTitle}
        visible={formDrawerIsVisible}
        close={hideFormDrawer}
      >
        <InputField
          label="Nome"
          onChange={setClientName}
          value={clientName}
        />

        <InputField
          label="CPF"
          onChange={handleCpfChange}
          value={clientCPF}
        />

        <InputField
          label="Data de nascimento"
          onChange={setClientBirthDate}
          value={clientBirthDate}
          type="date"
        />

        <PrimaryButton onClick={handleFormSubmit}>
          {formDrawerTitle}
        </PrimaryButton>
      </FormDrawer>
    </React.Fragment>
  );
}
