import React from 'react';
import {Link} from "react-router-dom";


function Button({children}) {
  return (
    <Link to="/Blog/newblog">  
      <div className='flex flex-col items-center'>
        <button className=' py-2 my-2 w-40 rounded-[10px] bg-primary font-roboto font-normal text-white'>
          {children}
        </button>
      </div>
    </Link>
  )
}

export default Button;
