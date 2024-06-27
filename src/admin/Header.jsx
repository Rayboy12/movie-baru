import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { RiUploadCloudLine } from "react-icons/ri";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
        <RiUploadCloudLine className="icon"/>
        </div>
    </header>
  )
}

export default Header