import React from 'react'
import { Link } from 'wouter'

function Suscribe () {
  return (
    <section className='header-suscribe flex justify-end cursor-pointer'>
      <Link href='/suscripciones'>
        <a>
          <figure>
            <img
              className='w-[340px]'
              src='https://http2.mlstatic.com/D_NQ_833975-MLA52670295393_112022-OO.webp'
              alt='Suscribe'
            />
          </figure>
        </a>
      </Link>
    </section>
  )
}

export default Suscribe
