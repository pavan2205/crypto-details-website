import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import './Navbar.css'

const Navbar =()=>{

  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);

  return(
  <div className='header' id='header'>
    <div className='container'>
      <h1>Cr<span className='primary'>ypt</span></h1>
      <ul className={click?'nav-menu active' :'nav-menu'}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='#featured'>Feature</a>
        </li>
        <li>
          <a href='#signup'>Earn</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='btn-group'>
        <button className='btn'>Connect Wallet</button>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color:'#333'}}/>):(<FaBars size={20} style={{color:'#333'}} />)}
      </div>
    </div>
  </div>
  )}

export default Navbar
