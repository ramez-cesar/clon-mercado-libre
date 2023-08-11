import React from 'react'

const iconStar = '🟊'

function ProductFeatures ({ title, rating, price }) {
  const totalRating = Math.floor(rating)
  const productRating = iconStar.repeat(totalRating)

  return (
    <section className='w-72 mt-10 flex flex-col gap-1.5'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <div className='flex items-center gap-2'>
        <p className='text-xl text-[#3483fa]'>{productRating}</p>
        <p className='text-xs text-[#3483fa]'>({rating})</p>
      </div>
      <span className='w-[88.8px] px-1.5 text-[10px] font-semibold text-white tracking-[.8px] rounded-[3px] bg-[#f73]'>MÁS VENDIDO</span>
      <h3 className='mt-1 text-[40px] font-light text-[rgba(0,0,0,.9)]'>$ {price}</h3>
      <p>IVA incluido</p>
    </section>
  )
}

export default ProductFeatures
