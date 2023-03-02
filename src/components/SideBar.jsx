import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItems from '../reusable/SidebarItem';
import '../custom.css';

function SideBar({children}) {
  return (
    <div className='flex'>
        <div className='h-screen border-r border-grey-400 space-y-5'>
            {
                SidebarItems.map((item,index)=>(
                    <NavLink to={item.path} key={index}>
                       <div className="p-2   flex flex-col items-center justify-center border-l">
                            <img src={item.icon} alt="no img" className='w-8'/>
                            <div className="text-black text-sm">{item.name}</div>
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
