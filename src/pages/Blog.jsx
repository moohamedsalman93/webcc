import React from 'react';
import SecSidebar from '../reusable/SecSidebar';
import Button from '../reusable/Button';
import CardList from '../components/Card';
import {Outlet} from "react-router-dom";
import '../css/Blog.css';

function Blog() {

  return (
    <div className='flex h-full w-full'>
      <SecSidebar>
          <Button>
              Create blog
          </Button>
          <CardList/>
      </SecSidebar>
      <Outlet />
    </div>
  )
}

export default Blog;

