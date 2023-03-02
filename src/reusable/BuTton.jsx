import React from 'react';

function BuTton({setisopen,isopen,children}) {

  const handleCreateNewClick = () => {
    setisopen(!isopen);
};

  return (
    <button className='py-2 my-2 w-48 rounded-md bg-green' onClick={handleCreateNewClick}>
      {children}
    </button>
  )
}

export default BuTton
