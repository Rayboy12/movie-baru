// src/GenreContext.js
import React, { createContext, useState } from 'react';

// Buat context untuk Genre
export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genreList, setGenreList] = useState([]);

  return (
    <GenreContext.Provider value={{ genreList, setGenreList }}>
      {children}
    </GenreContext.Provider>
  );
};
