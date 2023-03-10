import React, { useState,useEffect } from "react";
import downarrow from '../assets/downarrow.png';
import uparrow from '../assets/uparrow.png';
import eye from '../assets/eye.png';
import '../css/NewBlog.css';
import Form from './Form';
import formData from '../Data/formData';


function NewBlog() {

  const [formdata] = useState(formData);
  const [isOpen,setOpen]=useState(false);
  const [value, setValue] = useState({
    BlogTitle: "",
    ShortDescription: "",
  });

  const [content, setContent] = useState("");

  const handleBlogIconClick = () => {
    setOpen(!isOpen);
    console.log(value);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setValue(storedData);
    }
    const storedContent = JSON.parse(localStorage.getItem("content"));
    if (storedContent) {
      setContent(storedContent);
    }
  }, []);


  return (

    <div className="w-[calc(100vw-360px)]">
      <div className='newblog-header'>
        <div className='newblog-header-title'>Add Blog</div>
        <div className='newblog-header-container'>
          <div className="fex flex-col">
          <button className='newblog-header-container-button-draft' onClick={handleBlogIconClick}>
            <div className='button-label'>Draft</div>
            {
              !isOpen ? ( <img src={downarrow} alt="My" className='button-arrow' />) : ( <img src={uparrow} alt="My" className='button-arrow' />)
            }
          </button>
          {
            isOpen && <div className=" absolute top-12 right-6 rounded-lg  bg-white border h-52 w-80 ">
              <div className="mx-2 mt-2 p-2 rounded bg-grey">
                  <div className="flex">
                    <div>{value.BlogTitle}</div>
                    <div>{}</div>
                  </div>
                  <div>{value.ShortDescription}</div>
              </div>
            </div>
          }
          
          </div>
          <button className='newblog-header-container-button-preview'>
            <div className='button-label'>Preview</div>
            <img src={eye} alt="My" className='button-eye' />
          </button>
        </div>
    </div>
    <div className="w-screen h-full flex flex-col pl-[2rem] pt-[1.5rem]">
       <div className="w-[32rem]">
          <Form formData={formdata} />
       </div>
    </div>
   
    </div>


  )
}

export default NewBlog
