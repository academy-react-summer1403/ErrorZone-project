import React, { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='bg-black w-96 h-96 text-rose-400'>Login</div>
  )
}

export default Login