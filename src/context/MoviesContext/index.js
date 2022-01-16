import React, { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import api from '../../config/api';

const MoviesContext = createContext();

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const savedMovies = await axios(`${api.baseUrl}/movies`);
    
    setMovies(savedMovies.data);
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }

  const { movies, setMovies } = context;

  return { movies, setMovies };
}