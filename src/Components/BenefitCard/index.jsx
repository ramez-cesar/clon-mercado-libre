import React from 'react'

function BenefitCard ({
  routeImagePoster,
  altImagePoster,
  routeImageBenefits,
  altImageBenefits,
  benefits,
  addClassName
}) {
  return (
    <div className='w-[132px] h-[334px]'>
      <figure>
        <img
          className='w-full object-cover rounded-tl-md rounded-tr-md'
          src={routeImagePoster}
          alt={altImagePoster}
        />
      </figure>
      <div className={`${addClassName} w-full h-[78px] p-2 flex flex-col items-center justify-start gap-y-1 rounded-bl-md rounded-br-md`}>
        <figure>
          <img
            className='w-auto h-[28px]'
            src={routeImageBenefits}
            alt={altImageBenefits}
          />
        </figure>
        <p className='text-[11px] font-semibold text-white text-center leading-[15px] flex items-center flex-grow'>{benefits}</p>
      </div>
    </div>
  )
}

export default BenefitCard
