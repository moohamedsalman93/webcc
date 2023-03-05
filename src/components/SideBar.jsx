import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItems from '../Data/SidebarItem';
import '../css/SideBar.css';


function SideBar({children}) {
  return (
    <div className="drawer"> 
        <div className='sidebar'>
            {
                SidebarItems.map((item,index)=>(
                    <NavLink to={item.path} key={index}>
                       <div className="icontile">
                            <img src={item.icon} alt="no img" className='icon-sidebar'/>
                            <div className="label-sidebar">{item.name}</div>
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