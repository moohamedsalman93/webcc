import {React, useState } from 'react';
import SecSidebar from '../reusable/SecSidebar';
import BuTton from '../reusable/BuTton';
import CardList from '../components/Card';
import BlogPost from '../components/BlogPost';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isopen, setisopen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  }

  return (
    <div className='flex h-screen'>
      <SecSidebar>
        <div className='space-y-3'>
         <BuTton setisopen={setisopen} isopen={isopen}>
            Create blog
         </BuTton>
         <CardList onPostClick={handlePostClick} setisopen={setisopen}/>
        </div>
      </SecSidebar>
      {isopen ?<div>New blog section</div>:(selectedPost ? <BlogPost id={selectedPost} /> : <div>No Blog Selected</div>)}
    </div>
  )
}

export default Blog;

