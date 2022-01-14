import React from 'react';
import DisplayControl from '../../components/DisplayControl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import LeasesGrid from '../../components/LeasesGrid';
import ContentWrapper from '../../components/_styled/ContentWrapper';

export default function HomePage() {
  const sortOptions = ['Ordenar por', 'Mais antigas', 'Mais recentes'];
  const filterOptions = ['Filtrar por', 'Concluídas', 'Atrasadas'];

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
