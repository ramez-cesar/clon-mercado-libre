import React from 'react'
import { Link } from 'wouter'
import { IconMapPin, IconShoppingCart } from '@tabler/icons-react'

function Navbar () {
  return (
    <>
      <section className='navbar-code-postal w-[120px] h-[32px]'>
        <div className='navbar-code-postal-container flex cursor-pointer'>
          <IconMapPin className='text-[#333] stroke-1' />
          <div className='cursor-pointer'>
            <p className='text-[12px] text-[#33333399]'>Ingresa tu</p>
            <p className='mt-[-4px] text-[13px] text-[#333]'>código postal</p>
          </div>
        </div>
      </section>

      <section className='navbar-options'>
        <ul className='flex gap-6'>
          <li className='h-[32px] flex items-end'>
            <Link
              href='/categorias'
              className='text-[13px] tracking-[0.5px] text-[#33333399]'
            >
              Categorias
            </Link>
          </li>

          <li className='h-[32px] flex items-end'>
            <Link
              href='/vender'
              className='text-[13px] tracking-[0.5px] text-[#33333399]'
            >
              Vender
            </Link>
          </li>

          <li className='h-[32px] flex items-end'>
            <Link
              href='/ayuda'
              className='text-[13px] tracking-[0.5px] text-[#33333399]'
            >
              Ayuda
            </Link>
          </li>
        </ul>
      </section>

      <section className='navbar-register flex justify-end'>
        <ul className='flex gap-6'>
          <li>
            <Link
              href='/registration'
              className='text-[13px] tracking-[0.5px] text-[#333]'
            >
              Crear cuenta
            </Link>
          </li>

          <li>
            <Link
              href='/login'
              className='text-[13px] tracking-[0.5px] text-[#333]'
            >
              Ingresa
            </Link>
          </li>

          <li>
            <Link
              href='/mi-compras'
              className='text-[13px] tracking-[0.5px] text-[#333]'
            >
              Mis compras
            </Link>
          </li>

          <li>
            <Link
              href='/carrito'
              className='text-[13px] tracking-[0.5px] text-[#333]'
            >
              <IconShoppingCart className='text-[#333] stroke-1 cursor-pointer' />
            </Link>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Navbar
