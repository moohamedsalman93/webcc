import React from 'react'
import user from '../assets/user.png';
import logo from '../assets/logo.png';


const Header = () => {
    return (
      <div className='h-14 w-full flex justify-between items-center border-b pl-4 pr-7'>
        <img src={logo} alt="My" className='h-10'/>
        <img src={user} alt="My" className='h-14'/>
      </div>
    );
  }
  
  export default Header