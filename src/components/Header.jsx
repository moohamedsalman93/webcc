import React from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';
import '../css/Header.css';


const Header = () => {
    return (
      <div className='header-all'>
        <img src={logo} alt="My" className='h-10'/>
        <img src={user} alt="My" className='h-14'/>
      </div>
    );
  }
  
  export default Header