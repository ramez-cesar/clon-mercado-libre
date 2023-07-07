import React from 'react'

function Card ({ image, title, price, rating, description }) {
  return (
    <article className='w-[222px] h-[330px] bg-white rounded-md shadow'>
      <div>
        <figure className='p-[15px] flex items-center justify-center'>
          <img
            className='w-[150px] h-[150px] object-contain'
            src={image}
            alt={title}
          />
        </figure>
      </div>

      <div className='p-[16px] pb-[0]'>
        <h1 className='text-2xl text-[rgba(0,0,0,.8)]'>$ {price}</h1>
        <p className='text-sm text-[#00a650] tracking-[0] font-semibold'>Envio gratis</p>
        <p className='mb-1 text-sm text-[#00a650] tracking-[0]'>Rating: ★ {rating}
        </p>
        <p className='description text-sm text-[rgba(32,32,32,0.8)] tracking-[0]'>{description}</p>
      </div>
    </article>
  )
}

export default Card
