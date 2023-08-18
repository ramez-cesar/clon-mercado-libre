import React from 'react'
import { HeaderLogin } from '../../Components/Header'
import LandscapeLeft from './Components/FormLogin/Landscape'
import FormLogin from './Components/FormLogin'

function Login () {
  return (
    <>
      <HeaderLogin />
      <main className='w-full h-[calc(100vh-55px)] flex items-start justify-center bg-white'>
        <div className='mt-16 flex justify-center'>
          <LandscapeLeft />
          <FormLogin />
        </div>
      </main>
    </>
  )
}

export default Login
