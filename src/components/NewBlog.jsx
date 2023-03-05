import React from 'react'
import downarrow from '../assets/downarrow.png';
import eye from '../assets/eye.png';
import '../css/NewBlog.css';

function NewBlog() {
  return (
    
        <div>
          <div className='newblog-header'>
            <div className='newblog-header-title'>Add Blog</div>
            <div className='newblog-header-container '>
              <button className='newblog-header-container-button-draft'>
                <div className='button-label'>Draft</div>
                <img src={downarrow} alt="My" className='button-arrow'/>
              </button>
              <button className='newblog-header-container-button-preview'>
                <div className='button-label'>Preview</div>
                <img src={eye} alt="My" className='button-eye'/>
              </button>

            </div>
          </div>
          <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minus ipsum numquam libero illo quisquam culpa perspiciatis earum, optio, aut eos hic vero nesciunt ullam, error voluptatem itaque? Sint, odio?</div>
        </div>
        
        
  )
}

export default NewBlog
