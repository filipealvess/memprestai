import React from 'react';
import HeroWrapper, { HeroCTA, HeroDescription, HeroTitle } from './styles';

export default function HeroSection(props) {
  return (
    <HeroWrapper>
      <HeroTitle>
        Memprestaí
      </HeroTitle>
      
      <HeroDescription>
        Sistema para locação de filmes
      </HeroDescription>

      <HeroCTA>
        Locar filme
      </HeroCTA>
    </HeroWrapper>
  );
}
