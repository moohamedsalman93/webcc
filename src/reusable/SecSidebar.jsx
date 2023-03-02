import React from 'react';

function SecSidebar({children}) {
  return (
    <div className='w-56 border-r flex flex-col items-center'>
        {children}
    </div>
  )
}

export default SecSidebar
