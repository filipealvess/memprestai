import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import api from '../../config/api';

const ClientsContext = createContext();

export default function ClientsProvider({ children }) {
  const [clients, setClients] = useState([]);

  useEffect(async () => {
    const savedClients = await axios(`${api.baseUrl}/clients`);
    
    setClients(savedClients.data);
  }, []);

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
