import React from 'react'
import './style.css'

function BenefitsPoster ({ posterTitle, posterDescription, imagePath, altImagePath }) {
  return (
    <div className='w-[368px] max-h-[96px] flex items-center justify-between bg-[#FFCE52] rounded-md'>
      <div className='p-4 flex flex-col gap-y-3'>
        <p className='posterTitle text-sm font-semibold'>{posterTitle}</p>
        <p className='posterDescription text-xs'>{posterDescription}</p>
      </div>
      <figure className='container-freeShipping relative'>
        <img
          src={imagePath}
          alt={altImagePath}
          className='w-32 h-24'
        />
      </figure>
    </div>
  )
}

export default BenefitsPoster
