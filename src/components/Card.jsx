import React from 'react';
import CardListData from '../Data/CardListData';
import { useNavigate } from "react-router-dom";
import '../css/Card.css';


function Card({ post, onPostClick}) {
  const navigate = useNavigate();
  const handlePostClick = () => {
    navigate(`/Blog/${post.id}`);
  }

  return (
    <div className='card' onClick={handlePostClick}>
      <h2 className="card-title">{post.blogTitle}</h2>
      <p className="card-desc">{post.blogShortDescription}</p>
      <div className="card-image-label">
        <img src={post.authorAvatar} alt={post.authorName} className='card-image'/>
        <p className="card-label">{post.authorName}</p>
      </div>
      <p className="card-date">Jan 9,2001</p>
    </div>
  );
}


function CardList() {


  return (
    <div className="card-container">
      <div className="listofblog-name">List of Blogs</div>
      <div className='cardlist'>
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