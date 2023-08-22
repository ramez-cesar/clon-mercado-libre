import React from 'react'
import { IconTrophy, IconAward } from '@tabler/icons-react'

function ShippingDetails () {
  return (
    <div className='w-full max-w-[325px] mt-4 py-6 px-4 border border-[rgba(0,0,0,.1)] rounded-lg'>
      <h3 className='text-[15px] text-[#00a650] font-medium'>Envío gratis a todo el país</h3>
      <span className='text-[15px] text-[rgba(0,0,0,.9) font-semibold]'>Stock disponible</span>

      <div className='flex my-4'>
        <p className='text-[15px] flex items-center'>Cantidad: </p>

        <select className='text-[15px] outline-none' name='' id=''>
          <option value='1_unidad'>1 unidad</option>
          <option value='2_unidad'>2 unidad</option>
          <option value='3_unidad'>3 unidad</option>
          <option value='4_unidad'>4 unidad</option>
          <option value='5_unidad'>5 unidad</option>
          <option value='6_unidad'>6 unidad</option>
          <option value='mas_unidad'>más de 6 unidad</option>
        </select>
      </div>

      <div className='flex flex-col gap-2'>
        <button className='w-full px-7 py-4 text-sm text-white font-medium tracking-wide cursor-pointer rounded-lg duration-[.2s] ease-in bg-[#3483fa] hover:bg-[#2968c8]'>
          Comprar ahorita
        </button>
        <button className='w-full px-7 py-4 text-sm text-[#3483fa] font-semibold tracking-wide cursor-pointer rounded-lg duration-[.2s] ease-in bg-[rgba(65,137,230,.15)] hover:bg-[rgba(65,137,230,.2)]'>
          Agregar al carrito
        </button>
      </div>
      <div className='my-10'>
        <div className='my-2 flex gap-2'>
          <IconTrophy className='w-[20px] h-[20px] text-[rgba(0,0,0,.55)]' />
          <p className='text-sm text-[rgba(0,0,0,.55)]'>Mercado Puntos. Sumas 89 puntos.</p>
        </div>
        <div className='my-2 flex gap-2'>
          <IconAward className='w-[20px] h-[20px] text-[rgba(0,0,0,.55)]' />
          <p className='text-sm text-[rgba(0,0,0,.55)]'>12 meses de garantía de fábrica.</p>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails
