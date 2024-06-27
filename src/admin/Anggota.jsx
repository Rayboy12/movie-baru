import React, { useState, useEffect } from 'react';
import '../File CSS/Anggota.css';

const Anggota = () => {
  const [anggotaList, setAnggotaList] = useState([]);
  const [nama, setNama] = useState('');
  const [nomorHp, setNomorHp] = useState('');
  const [email, setEmail] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // Ambil data dari Local Storage saat komponen dimuat
  useEffect(() => {
    const storedAnggotaList = localStorage.getItem('anggotaList');
    if (storedAnggotaList) {
      setAnggotaList(JSON.parse(storedAnggotaList));
    }
  }, []);

  // Simpan data ke Local Storage setiap kali anggotaList berubah
  useEffect(() => {
    localStorage.setItem('anggotaList', JSON.stringify(anggotaList));
  }, [anggotaList]);

  const handleAddAnggota = (e) => {
    e.preventDefault();
    const newAnggota = {
      id: anggotaList.length + 1,
      nama,
      nomorHp,
      email,
    };
    setAnggotaList([...anggotaList, newAnggota]);
    setNama('');
    setNomorHp('');
    setEmail('');
  };

  const handleDelete = (id) => {
    const updatedAnggotaList = anggotaList.filter(anggota => anggota.id !== id);
    setAnggotaList(updatedAnggotaList);
  };

  const handleUpdate = (id) => {
    const anggotaToUpdate = anggotaList.find(anggota => anggota.id === id);
    if (anggotaToUpdate) {
      setNama(anggotaToUpdate.nama);
      setNomorHp(anggotaToUpdate.nomorHp);
      setEmail(anggotaToUpdate.email);
      setSelectedId(id);
    }
  };

  const handleUpdateAnggota = (e) => {
    e.preventDefault();
    const updatedAnggotaList = anggotaList.map(anggota => {
      if (anggota.id === selectedId) {
        return {
          ...anggota,
          nama,
          nomorHp,
          email,
        };
      }
      return anggota;
    });
    setAnggotaList(updatedAnggotaList);
    setNama('');
    setNomorHp('');
    setEmail('');
    setSelectedId(null);
  };

  return (
    <div>
      <h2>Tambah Anggota</h2>
      <form onSubmit={selectedId !== null ? handleUpdateAnggota : handleAddAnggota}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nomor HP:</label>
          <input
            type="text"
            value={nomorHp}
            onChange={(e) => setNomorHp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={selectedId !== null ? 'updateButton' : 'addButton'}>
          {selectedId !== null ? 'Update' : 'Tambah'}
        </button>
      </form>

      <h2>Daftar Anggota</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Nomor HP</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {anggotaList.map((anggota) => (
            <tr key={anggota.id}>
              <td>{anggota.id}</td>
              <td>{anggota.nama}</td>
              <td>{anggota.nomorHp}</td>
              <td>{anggota.email}</td>
              <td>
                <button className="updateButton" onClick={() => handleUpdate(anggota.id)}>Update</button>
                <button className="deleteButton" onClick={() => handleDelete(anggota.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Anggota;
