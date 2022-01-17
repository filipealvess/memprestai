import React from 'react';
import ClientsPageContent from './content';
import ClientsContext from '../../context/ClientsContext';
import LeasesContext from '../../context/LeasesContext';

export default function ClientsPage() {
  return (
    <LeasesContext>
      <ClientsContext>
        <ClientsPageContent />
      </ClientsContext>
    </LeasesContext>
  );
}
