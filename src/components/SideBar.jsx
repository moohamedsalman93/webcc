import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItems from '../Data/SidebarItem';


function SideBar({children}) {
  return (
    <div className='flex'>
        <div className='h-screen w-[6rem] pt-14 border-r'>
            {
                SidebarItems.map((item,index)=>(
                    <NavLink to={item.path} key={index}>
                       <div className=" border w-[6rem] h-24 flex flex-col items-center justify-center border-l">
                            <img src={item.icon} alt="no img" className='w-[1.875rem] h-[2rem]'/>
                            <div className="text-black text-[1rem]">{item.name}</div>
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