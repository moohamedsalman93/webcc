import React from 'react'
import downarrow from '../assets/downarrow.png';
import eye from '../assets/eye.png';

function NewBlog() {
  return (
    
        <div>
          <div className=' h-[60px] border-b flex justify-between items-center p-5'>
            <div className=' font-roboto font-semibold'>Add Blog</div>
            <div className='flex justify-between items-center space-x-2'>
              <button className='px-5 py-1 bg-primary rounded-lg flex items-center space-x-1'>
                <div className='text-white font-roboto text-base'>Draft</div>
                <img src={downarrow} alt="My" className='h-[6px]'/>
              </button>
              <button className='px-2 py-1 bg-primary rounded-lg flex items-center space-x-1'>
                <div className='text-white font-roboto text-base'>Preview</div>
                <img src={eye} alt="My" className='h-[20px]'/>
              </button>

            </div>
          </div>
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus ipsum numquam libero illo quisquam culpa perspiciatis earum, optio, aut eos hic vero nesciunt ullam, error voluptatem itaque? Sint, odio?</div>
        </div>
        
        
  )
}

export default NewBlog
