import React from 'react'
import SmallImageSection from './SmallImageSection'
import LargeImageSection from './LargeImageSection'
import ProductFeatures from './ProductFeatures'
import ShippingDetails from './ShippingDetails'

function ProductDetails ({
  image,
  title,
  price,
  rating
}) {
  return (
    <>
      {/* eslint-disable-next-line no-undef */}
      <a onClick={() => history.back()} className='text-sm cursor-pointer'>Volver</a>

      <section className='w-full mt-2 px-4 py-3 flex justify-between bg-white rounded-t-lg'>
        <SmallImageSection
          image={image}
        />

        <LargeImageSection
          image={image}
          title={title}
        />

        <ProductFeatures
          title={title}
          rating={rating}
          price={price}
        />

        <ShippingDetails />

      </section>
    </>
  )
}

export default ProductDetails
