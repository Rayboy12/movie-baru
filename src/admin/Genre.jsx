// src/admin/Genre.jsx
import React, { useState, useContext } from 'react';
import { GenreContext } from './GenreContext'; // Import context

const Genre = () => {
  const { genreList, setGenreList } = useContext(GenreContext); // Gunakan context
  const [judulFilm, setJudulFilm] = useState('');
  const [deskripsiFilm, setDeskripsiFilm] = useState('');
  const [genre, setGenre] = useState(''); // State untuk genre film
  const [selectedId, setSelectedId] = useState(null); // Tambahkan state untuk menyimpan ID yang sedang diperbarui

  const handleAddGenre = (e) => {
    e.preventDefault();
    // Membuat objek genre baru
    const newGenre = {
      id: genreList.length + 1,
      judulFilm,
      deskripsiFilm,
      genre, // Menambahkan genre ke objek genre baru
    };
    // Menambahkan genre baru ke dalam daftar
    setGenreList([...genreList, newGenre]);
    // Reset form fields
    setJudulFilm('');
    setDeskripsiFilm('');
    setGenre('');
  };

  const handleDelete = (id) => {
    const updatedGenreList = genreList.filter(genre => genre.id !== id);
    setGenreList(updatedGenreList);
  };

  const handleUpdate = (id) => {
    const genreToUpdate = genreList.find(genre => genre.id === id);
    if (genreToUpdate) {
      setJudulFilm(genreToUpdate.judulFilm); // Memperbaiki penulisan properti
      setDeskripsiFilm(genreToUpdate.deskripsiFilm);
      setGenre(genreToUpdate.genre); // Pastikan nilai genre juga di-set
      setSelectedId(id); // Set ID genre yang sedang diupdate
    }
  };

  const handleUpdateGenre = (e) => {
    e.preventDefault();
    const updatedGenreList = genreList.map(genre => {
      if (genre.id === selectedId) {
        return {
          ...genre,
          judulFilm,
          deskripsiFilm,
          genre, // Update nilai genre
        };
      }
      return genre;
    });

    setGenreList(updatedGenreList);
    // Reset form fields
    setJudulFilm('');
    setDeskripsiFilm('');
    setGenre('');
    setSelectedId(null);
  };

  return (
    <div>
      <h2>Tambah Genre Film</h2>
      <form onSubmit={selectedId ? handleUpdateGenre : handleAddGenre}>
        <div>
          <label>Judul Film:</label>
          <input
            type="text"
            value={judulFilm}
            onChange={(e) => setJudulFilm(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Deskripsi Film:</label>
          <textarea
            value={deskripsiFilm}
            onChange={(e) => setDeskripsiFilm(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Genre Film:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button type="submit">{selectedId ? 'Update' : 'Tambah'}</button>
      </form>

      <h2>Daftar Genre Film</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul Film</th>
            <th>Deskripsi Film</th>
            <th>Genre Film</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {genreList.map((genre) => (
            <tr key={genre.id}>
          <td>{genre.id}</td>
             <td>{genre.judulFilm}</td>
         <td>{genre.deskripsiFilm}</td>
         <td>{genre.genre}</td>
         <td>
        <button onClick={() => handleUpdate(genre.id)}>Update</button>
        <button onClick={() => handleDelete(genre.id)}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default Genre;
