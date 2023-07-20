import React from 'react'
import { Link } from 'wouter'

function GeneralButton ({ route, buttonTitle }) {
  return (
    <Link href={route}>
      <a className='subscribe w-fit px-7 py-4 text-sm text-white font-semibold tracking-wide cursor-pointer rounded-lg bg-[#3483fa] hover:bg-[#2968c8]'>
        {buttonTitle}
      </a>
    </Link>
  )
}

export default GeneralButton
