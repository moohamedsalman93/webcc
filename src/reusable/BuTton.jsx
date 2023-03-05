import React from 'react';
import {Link} from "react-router-dom";
import '../css/Button.css'


function Button({children}) {
  return (
    <Link to="/Blog/newblog">  
      <div className='buttoncon'>
        <button className='contbutton'>
          {children}
        </button>
      </div>
    </Link>
  )
}

export default Button;
