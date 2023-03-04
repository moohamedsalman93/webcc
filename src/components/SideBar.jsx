import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItems from '../Data/SidebarItem';
import '../css/SideBar.css';


function SideBar({children}) {
  return (
    <div className="drawer"> 
        <div className='min-w-[70px] max-w-[70px] border-r'>
            {
                SidebarItems.map((item,index)=>(
                    <NavLink to={item.path} key={index}>
                       <div className=" h-[66px] pt-[3px]  flex flex-col items-center justify-center">
                            <img src={item.icon} alt="no img" className='w-[20px] h-[24px]'/>
                            <div className="text-black font-roboto  text-[14px]">{item.name}</div>
                        </div>
                    </NavLink>
                ))
            }
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default SideBar