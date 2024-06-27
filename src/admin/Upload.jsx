// src/admin/Upload.jsx
import React, { useContext } from 'react';
import { GenreContext } from './GenreContext'; // Import context

const Upload = () => {
  const { genreList } = useContext(GenreContext); // Gunakan context

  return (
    <div>
      <h2>Upload Film</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Genre</th>
            <th>Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          {genreList.map((genre, index) => (
            <tr key={index}>
              <td>{genre.judulFilm}</td>
              <td>{genre.genre}</td>
              <td>{genre.deskripsiFilm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upload;
