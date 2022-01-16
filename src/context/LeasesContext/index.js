import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import api from '../../config/api';

const LeasesContext = createContext();

export default function LeasesProvider({ children }) {
  const [leases, setLeases] = useState([]);

  useEffect(async () => {
    const savedLeases = await axios(`${api.baseUrl}/leases`);
    
    setLeases(savedLeases.data);
  }, []);

  return (
    <LeasesContext.Provider
      value={{
        leases,
        setLeases
      }}
    >
      {children}
    </LeasesContext.Provider>
  );
}

export function useLeases() {
  const context = useContext(LeasesContext);

  if (!context) {
    throw new Error("useLeases must be used within a LeasesProvider");
  }

  const { leases, setLeases } = context;

  return { leases, setLeases };
}