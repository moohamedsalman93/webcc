import CardListData from '../Data/CardListData';
import { useParams } from "react-router-dom";
import'../css/Blogpost.css';

function BlogPost() {
  const { id } = useParams();
  const post = CardListData.find((post) => post.id === Number(id));

  return (
        <div className='Blog-post'>
            <h1>{post.blogTitle}</h1>
            <img src={post.authorAvatar} alt={post.authorName} className='Blog-post-icon' />
            <p className='Blog-post-desc'>{post.blogShortDescription}</p>
      </div>
  );
}

export default BlogPost;