import React, { useContext } from 'react'
import { useLocation } from 'wouter'
import { ProductContext } from '../../../../Context'

function ProductDescription () {
  const [location] = useLocation()
  const { filterById } = useContext(ProductContext)

  // eslint-disable-next-line no-unused-vars
  const [_, section, id] = location.split('/')
  const selectedProduct = filterById(id)

  return (
    <section className='w-full flex bg-white'>
      {
        selectedProduct?.map(({ id, description }) => (
          <Description
            key={id}
            description={description}
          />
        ))
      }
    </section>
  )
}

function Description ({ description }) {
  return (
    <div className='w-[850px] p-10 flex flex-col'>
      <h2 className='pb-6 text-2xl text-[rgba(0,0,0,.9)]'>Descripción</h2>
      <p className='text-base text-[#666]'>{description}</p>
    </div>
  )
}

export default ProductDescription
