import React from 'react';
import CardListData from '../Data/CardListData';


function Card({ post, onPostClick}) {
  const handlePostClick = () => {
    onPostClick(post.id);
  }

  return (
    <div className='border border-gray-400 p-2 w-48 rounded-lg' onClick={handlePostClick}>
      <h2 className="text-base font-medium truncate mb-1">{post.blogTitle}</h2>
      <p className="text-gray-600 text-sm mb-2" style={{ height: '4em', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.blogShortDescription}</p>
      <div className="card-image flex items-center space-x-2">
        <img src={post.authorAvatar} alt={post.authorName} className='h-10 w-10'/>
        <p className="text-sm text-gray-500">By {post.authorName}</p>
      </div>
    </div>
  );
}


function CardList({ onPostClick,setisopen }) {

  const handleCreateNewClick = () => {
    setisopen(false);
};

  return (
    <div className="space-y-3" onClick={handleCreateNewClick}>
      <div className="font-medium text-base">List of Blogs</div>
      {
        CardListData.map(item => (
          <Card key={item.id}
            post={item}
            onPostClick={onPostClick}
          />
        ))
      }
    </div>
  );
}

  export default CardList;