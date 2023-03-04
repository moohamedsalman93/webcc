import React from 'react';
import CardListData from '../Data/CardListData';
import { useNavigate } from "react-router-dom";


function Card({ post, onPostClick}) {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/Blog/${post.id}`);
  }

  return (
    <div className='shadow-lg border border-border p-2 my-3 w-56 rounded-md' onClick={handlePostClick}>
      <h2 className="text-lg font-medium text-darkblue truncate">{post.blogTitle}</h2>
      <p className="text-darkblue text-xs font-normal" style={{ height: '4em', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.blogShortDescription}</p>
      <div className="mt-2 flex items-center space-x-2">
        <img src={post.authorAvatar} alt={post.authorName} className='h-8 w-8'/>
        <p className="text-xs font-normal text-black">{post.authorName}</p>
      </div>
      <p className="text-xs font-medium text-black text-right">20/9/2001</p>
    </div>
  );
}


function CardList() {


  return (
    <div className="w-64 pl-2 pr-1">
      <div className="font-semibold text-xs my-2">List of Blogs</div>
      <div className='h-[29rem] overflow-y-scroll'>
        {
          CardListData.map(item => (
            <Card key={item.id}
              post={item}
            />
          ))
        }
      </div>
      
    </div>
  );
}

  export default CardList;