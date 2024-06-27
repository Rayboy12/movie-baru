// Dashboard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

const Dashboard = () => {
  const navigate = useNavigate(); // Mendapatkan fungsi navigate dari useNavigate

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card' onClick={() => navigate('/movies')}>
          <div className='card-inner'>
            <h3>MOVIE</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>20 Film</h1>
        </div>
        <div className='card' onClick={() => navigate('/genres')}>
          <div className='card-inner'>
            <h3>GENRE</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>5 Genre</h1>
        </div>
        <div className='card' onClick={() => navigate('/anggota')}>
          <div className='card-inner'>
            <h3>ANGGOTA</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>5 Anggota</h1>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
