import React from 'react';
import SecSidebar from '../reusable/SecSidebar';
import Button from '../reusable/Button';
import CardList from '../components/Card';
import {Outlet} from "react-router-dom";
import '../css/Blog.css';
import createblog from '../assets/createblog.png';

function Blog() {

  return (
    <div className='content'>
      <SecSidebar>
          <Button>
            <div className='text-white font-normal font-roboto text-base'>Create Blog</div>
            <img src={createblog} alt="createblog" className='h-5' />
          </Button>
          <CardList/>
      </SecSidebar>
      <Outlet />
    </div>
  )
}

export default Blog;

