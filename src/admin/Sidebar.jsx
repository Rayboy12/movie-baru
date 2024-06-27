import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { RiMovie2Fill } from "react-icons/ri";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate(); // Gunakan navigate untuk navigasi programatik

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <RiMovie2Fill className='icon_header' /> MOVIX
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => navigate('/')}>
          <BsGrid1X2Fill className='icon' /> Dashboard
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/upload')}>
          <BsFillArchiveFill className='icon' /> Upload
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/genres')}>
          <BsFillGrid3X3GapFill className='icon' /> Genre
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/anggota')}>
          <BsPeopleFill className='icon' /> Anggota
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
