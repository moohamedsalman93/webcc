import React from 'react';

function SecSidebar({children}) {
  return (
    <div className='border-r flex bg-white flex-col items-center'>
        {children}
    </div>
  )
}

export default SecSidebar
