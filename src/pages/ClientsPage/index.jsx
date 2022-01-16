import React from 'react';
import ClientsPageContent from './content';
import ClientsContext from '../../context/ClientsContext';

export default function ClientsPage() {
  return (
    <ClientsContext>
      <ClientsPageContent />
    </ClientsContext>
  );
}
