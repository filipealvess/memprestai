import React from 'react';
import HeroWrapper, { HeroCTA, HeroDescription, HeroTitle } from './styles';

export default function HeroSection({ onClick }) {
  return (
    <HeroWrapper>
      <HeroTitle>
        Memprestaí
      </HeroTitle>
      
      <HeroDescription>
        Sistema para locação de filmes
      </HeroDescription>

      <HeroCTA onClick={onClick}>
        Locar filme
      </HeroCTA>
    </HeroWrapper>
  );
}
