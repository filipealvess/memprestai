import React from 'react';
import DisplayControl from '../../components/DisplayControl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import LeasesGrid from '../../components/LeasesGrid';
import ContentWrapper from '../../components/_styled/ContentWrapper';
import ClientsProvider from '../../context/ClientsContext';
import LeasesProvider from '../../context/LeasesContext';
import MoviesProvider from '../../context/MoviesContext';

export default function HomePage() {
  const sortOptions = ['Ordenar por', 'Mais antigas', 'Mais recentes'];
  const filterOptions = ['Filtrar por', 'Concluídas', 'Atrasadas'];

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
                sortOptions={sortOptions}
                filterOptions={filterOptions}
              />

              <LeasesGrid />
            </ContentWrapper>
          </MoviesProvider>
        </ClientsProvider>
      </LeasesProvider>
    </React.Fragment>
  );
}
