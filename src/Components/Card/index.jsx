import React from 'react'
import { Link } from 'wouter'
import './style.css'

function Card ({
  id,
  image,
  title,
  price,
  rating,
  description
}) {
  // Función que desplaza hacia arriba cada vez que se abren los detalles de un producto.
  function scrollTop () {
    document.documentElement.scrollTop = 0
  }

  return (
    <Link href={`/clon-mercado-libre/product/${id}/${title}`}>
      <a>
        <article onClick={scrollTop} className='w-[228px] pb-4 bg-white rounded-md shadow snap-center border border-[#f5f5f5]'>
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
      </a>
    </Link>
  )
}

export default Card
