import React from 'react'

function SmallImageSection ({ image }) {
  return (
    <div>
      <div className='w-[50px] h-[50px] p-1 flex items-center justify-center border-2 border-[#3483fa] rounded-md hover:cursor-pointer'>
        <img
          className='w-[28px] object-cover'
          src={image}
        />
      </div>
    </div>
  )
}

export default SmallImageSection
