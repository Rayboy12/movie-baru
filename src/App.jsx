// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './admin/Header';
import Sidebar from './admin/Sidebar';
import Dashboard from './admin/Dashboard'; // Mengganti Home menjadi Dashboard
import Anggota from './admin/Anggota'; // Menambahkan impor untuk Anggota
import Genre from './admin/Genre'; 
import Upload from './admin/Upload';
import { GenreProvider } from './admin/GenreContext'; // Tambahkan impor GenreProvider

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  // const [anggota, setAnggota] = useState([]);
  // const [genres, setGenres] = useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  useEffect(() => {
    document.title = "ADMIN MOVIX"; // Judul baru halaman
  }, []);

  return (
    <GenreProvider>
      <Router>
        <div className='grid-container'>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/anggota" element={<Anggota />} />
            <Route path="/genres" element={<Genre />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </Router>
    </GenreProvider>
  );
}

export default App;
