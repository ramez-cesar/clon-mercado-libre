import React from 'react'
import { Link } from 'wouter'
import { HeaderLogin } from '../Header'

function NotFound () {
  return (
    <>
      <HeaderLogin />
      <main className='w-full h-[calc(100dvh-55px)] flex items-center justify-center'>
        <div className='flex flex-col justify-center text-center'>
          <span className='text-5xl font-semibold'>☹</span>
          <h1 className='mb-2 text-4xl font-bold'>
            <span className='text-red-600'>404 </span>
            - Page Not Found
          </h1>
          <p className='text-sm text-[#33333399]'>La página no fue encontrada o se encuentra en construcción... Por favor, inténtelo más tarde.</p>
          <Link href='./'>
            <a className='text-sm text-[#068FFF] font-semibold cursor-pointer'>Regresar a inicio.</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFound
