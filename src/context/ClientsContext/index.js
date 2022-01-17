import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import api from '../../config/api';

const ClientsContext = createContext();

export default function ClientsProvider({ children }) {
  const [clients, setClients] = useState([]);

  useEffect(async () => {
    const localClients = JSON.parse(localStorage.getItem('memprestai_clients'));

    if (localClients) {
      setClients(localClients.map(client => {
        client.visible = true;
        return client;
      }));
    } else {
      const savedClients = await axios(`${api.baseUrl}/clients`);
      setClients(savedClients.data);
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('memprestai_clients', JSON.stringify(clients));
  }, [clients]);

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientsContext);

  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }

  const { clients, setClients } = context;

  return { clients, setClients };
}
