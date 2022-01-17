import React, { useState } from 'react';
import DisplayControl from '../../components/DisplayControl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import LeasesGrid from '../../components/LeasesGrid';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import ClientsProvider from '../../context/ClientsContext';
import LeasesProvider from '../../context/LeasesContext';
import MoviesProvider from '../../context/MoviesContext';
import sortOptions from '../../functions/sort';
import filterOptions from '../../functions/filter';

export default function HomePage() {
  const [leases, setLeases] = useState([]);
  
  function sortLeases(optionName) {
    sortOptions.leaseOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLeases(action(leases));
      }
    });
  }
  
  function filterLeases(optionName) {
    filterOptions.leaseOptions.forEach(({option, action}) => {
      if (optionName === option) {
        setLeases(action(leases));
      }
    });
  }

  function updateLeases(leases) {
    setLeases(leases);
  }

  return (
    <React.Fragment>
      <LeasesProvider>
        <ClientsProvider>
          <MoviesProvider>
            <Header />
            
            <ContentWrapper>
              <HeroSection />

              <DisplayControl
                title="Todas as locações"
                sortOptions={sortOptions.leaseOptions}
                filterOptions={filterOptions.leaseOptions}
                filterFunction={filterLeases}
                sortFunction={sortLeases}
              />

              <LeasesGrid manipulatedLeases={leases} updateLeases={updateLeases} />
            </ContentWrapper>
          </MoviesProvider>
        </ClientsProvider>
      </LeasesProvider>
    </React.Fragment>
  );
}
