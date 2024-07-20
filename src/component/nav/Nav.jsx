import React, { useState } from 'react'
import './nav.css';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

const Nav = () => {
    const [activeNav,setActiveNav]=useState("#")

  return (
    <div>
      <nav>
        <a href="#home" onClick={()=>setActiveNav("#")} className={activeNav=="#"?'active':''}><HouseOutlinedIcon/></a>
        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav=="#about"?'active':''}><PersonOutlineOutlinedIcon/></a>
        <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav=="#experience"?'active':''}><NoteOutlinedIcon/></a>
        <a href="#service" onClick={()=>setActiveNav("#service")} className={activeNav=="#service"?'active':''}><MiscellaneousServicesOutlinedIcon/></a>
        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav=="#contact"?'active':''}><AddIcCallOutlinedIcon/></a>
      </nav>
    </div>
  )
}


export default Nav