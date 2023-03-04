import React from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';
import '../css/Header.css';

const Header = () => {
    return (
      <div className='header'>
        <img src={logo} alt="My" />
        <img src={user} alt="My" />
      </div>
    );
  }
  
  export default Header