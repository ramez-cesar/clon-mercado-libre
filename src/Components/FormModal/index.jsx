import React, { useContext } from 'react'
import { IconX } from '@tabler/icons-react'
import { ProductContext } from '../../Context'
import Form from './Form'
import './style.css'

function FormModal () {
  const { setOpenModal } = useContext(ProductContext)

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <section className='w-[670px] h-[260px] p-9 m-auto rounded-md bg-white'>
      <div>
        <div className='flex justify-between'>
          <h1 className='text-lg text-[rgba(0,0,0,.9)] font-semibold tracking-wider'>Elige dónde recibirás tus compras</h1>
          <IconX
            onClick={closeModal}
            className='text-[#3483FA] cursor-pointer'
          />
        </div>
        <p className='mt-1 mb-12 text-xs text-[rgba(0,0,0,.55)]'>Podrás ver costos y tiempos de entrega precisos en todo lo que busques.</p>
      </div>
      <Form />
    </section>
  )
}

export default FormModal
