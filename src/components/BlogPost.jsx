import CardListData from '../Data/CardListData';
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const post = CardListData.find((post) => post.id === Number(id));

  return (
    <div className='flex flex-col space-y-5 justify-center items-center w-4/5 bg-lightgreen'>
      <h1>{post.blogTitle}</h1>
      <img src={post.authorAvatar} alt={post.authorName} className='w-24 h-24' />
      <p>{post.blogShortDescription}</p>
    </div>
  );
}

export default BlogPost;