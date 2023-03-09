import React, { useState } from "react";
import downarrow from '../assets/downarrow.png';
import eye from '../assets/eye.png';
import '../css/NewBlog.css';
import Form from './Form';
import formData from '../Data/formData';

function NewBlog() {

  const [formdata, setFormData] = useState(formData);


  return (

    <div className="w-[calc(100vw-360px)]">
      <div className='newblog-header'>
        <div className='newblog-header-title'>Add Blog</div>
        <div className='newblog-header-container'>
          <button className='newblog-header-container-button-draft'>
            <div className='button-label'>Draft</div>
            <img src={downarrow} alt="My" className='button-arrow' />
          </button>
          <button className='newblog-header-container-button-preview'>
            <div className='button-label'>Preview</div>
            <img src={eye} alt="My" className='button-eye' />
          </button>
        </div>
    </div>
    <div className="w-screen h-full flex flex-col pl-[2rem] pt-[1.5rem]">
       <div className="w-[28rem]">
          <Form formData={formdata} />
       </div>
    </div>
   
    </div>


  )
}

export default NewBlog
