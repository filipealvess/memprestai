import React from 'react';
import MoviesContext from '../../context/MoviesContext';
import MoviesPageContent from './content';

export default function MoviesPage() {
  return (
    <MoviesContext>
      <MoviesPageContent />
    </MoviesContext>
  );
}
