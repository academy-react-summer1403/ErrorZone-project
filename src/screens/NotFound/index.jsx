import React, { useEffect } from 'react'
import notfoundImage from '../../assets/images/NotFound404/404.jpg'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='grid place-content-center place-items-center bg-blackPanel'>
      <img src={notfoundImage} alt="" />
    </div>
  )
}

export default NotFound