import React from 'react'
import { Link } from 'wouter'

function Logo () {
  return (
    <section className='header-logo cursor-pointer'>
      <Link href='/clon-mercado-libre'>
        <figure>
          <img
            className='w-[134px]'
            src='https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png'
            alt='Logo'
          />
        </figure>
      </Link>
    </section>
  )
}

export default Logo
