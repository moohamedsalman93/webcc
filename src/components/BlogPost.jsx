import CardListData from '../Data/CardListData';

function BlogPost({id}) {
  
  const post = CardListData.find((post) => post.id === Number(id));

  return (
    <div className='flex flex-col space-y-5 justify-center items-center w-full'>
      <h1>{post.blogTitle}</h1>
      <img src={post.authorAvatar} alt={post.authorName} className='w-24 h-24' />
      <p>{post.blogShortDescription}</p>
    </div>
  );
}

export default BlogPost;