import React from 'react';
import nodata from '../assets/nodata.png';

function NoBlog() {
  return (
   
        <div className=' w-screen justify-center items-center bg-black'>
            <img src={nodata} alt="no data" className='w-40'/>
            <div>No Blogs Selected or Create New Blog djiaojod</div>
        </div>
        
    
    
  )
}

export default NoBlog
