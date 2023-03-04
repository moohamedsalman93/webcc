import React from 'react';

function SecSidebar({children}) {
  return (
    <div className='border-r min-w-[40vh] max-w-[40vh] max-h-full min-h-full flex bg-white flex-col items-center'>
        {children}
    </div>
  )
}

export default SecSidebar
