import React from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';

const Header = () => {
    return (
      <div className=' h-14 bg-white-400  w-full px-5 py-2 justify-between overflow-y-none overflow-x-hidden flex border-b border-gray-400'>
        <img src={logo} alt="My" />
        <img src={user} alt="My" />
      </div>
    );
  }
  
  export default Header