import React,{useState} from 'react';
import SecSidebar from '../reusable/SecSidebar';
import Button from '../reusable/Button';
import CardList from '../components/Card';
import {Outlet} from "react-router-dom";
import '../css/Blog.css';
import createblog from '../assets/createblog.png';
import searchicon from '../assets/searchicon.png';



function Blog() {

  const[query,setquery]=useState("");

  return (
    <div className='content'>
      <SecSidebar>
          <Button>
            <div className='text-white font-normal font-roboto text-base'>Create Blog</div>
            <img src={createblog} alt="createblog" className='h-5' />
          </Button>
          <div  className='flex  m-1 items-center border rounded-lg p-1'>
            <input type="text" placeholder='Search by Category' className='focus:outline-none h-7 placeholder:text-sm text-darkblue w-56 pl-1' onChange={(e)=>setquery(e.target.value)} />
            <img src={searchicon} alt="searchicon" className='h-7 w-7'/>
          </div>
          <CardList query={query}/>
      </SecSidebar>
      <Outlet />
    </div>
  )
}

export default Blog;

