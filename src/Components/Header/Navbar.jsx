import React, { useContext } from 'react'
import { Link } from 'wouter'
import { ProductContext } from '../../Context'
import { NavbarItem, NavbarItemMenu } from './NavbarItem'
import { IconMapPin, IconShoppingCart, IconChevronDown } from '@tabler/icons-react'
import './style.css'

function Navbar () {
  const {
    setOpenModal,
    showCP,
    codePostal,
    setIncorrectCP,
    setErrorMessageCP
  } = useContext(ProductContext)

  const showModal = () => {
    setOpenModal(true)
    setIncorrectCP(false)
    setErrorMessageCP('')
  }

  return (
    <>
      <section
        onClick={showModal}
        className='navbar-code-postal w-[120px] h-8 cursor-pointer'
      >
        <div className='navbar-code-postal-container flex'>
          <IconMapPin className='text-[#333] stroke-1' />
          <div className='ml-1'>
            <p className='text-xs text-start text-[#33333399]'>Ingresa tu</p>
            {
              showCP
                ? <p className='mt-[-4px] text-[13px] text-[#333]'>CP {codePostal}</p>
                : <p className='mt-[-4px] text-[13px] text-[#333]'>código postal</p>
            }
          </div>
        </div>
      </section>

      <section className='navbar-options'>
        <ul className='flex gap-6'>
          <div className='dropdown flex items-end relative'>
            <p className='text-[13px] tracking-[0.5px] text-[#33333399] flex cursor-pointer'>
              Categorias
              <IconChevronDown className='w-[20px] h-[20px] stroke-1' />
            </p>

            <div className='category'>
              <NavbarItemMenu link='/electronics' itemName='Electronics' />
              <NavbarItemMenu link='/jewelery' itemName='Jewelery' />
              <NavbarItemMenu link='/mens-clothing' itemName='Mens clothing' />
              <NavbarItemMenu link='/wonens-clothing' itemName='Womens clothing' />
            </div>
          </div>

          <li className='h-8 flex items-end'>
            <Link
              href='/vender'
              className='text-[13px] tracking-[0.5px] text-[#33333399]'
            >
              Vender
            </Link>
          </li>

          <li className='h-8 flex items-end'>
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
