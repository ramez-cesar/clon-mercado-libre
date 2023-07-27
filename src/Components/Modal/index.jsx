import React, { useContext } from 'react'
import { ProductContext } from '../../Context'
import { createPortal } from 'react-dom'
import FormModal from '../FormModal'

function Modal () {
  const { openModal } = useContext(ProductContext)

  return (
    <>
      {/* Si openModal = true, entonces crea un portal con el componente Form */}
      {openModal && createPortal(
        <div className='flex fixed top-0 bottom-0 left-0 right-0 bg-[#00000099]'>
          <FormModal />
        </div>,
        document.getElementById('modal')
      )}
    </>
  )
}

export default Modal
