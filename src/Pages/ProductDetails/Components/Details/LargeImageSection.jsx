import React from 'react'

function LargeImageSection ({ image, title }) {
  return (
    // Pendiente por agregar la imagen con zoom
    <div className='w-auto'>
      <figure className='w-72 mt-10 p-4'>
        <img
          src={image}
          alt={title}
          className='w-full h-auto cursor-zoom-in object-contain'
        />
      </figure>
    </div>
  )
}

export default LargeImageSection
