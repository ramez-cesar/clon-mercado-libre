import React, { useContext } from 'react'
import { Link } from 'wouter'
import Card from '../../Components/Card'
import { RightButton, LeftButton } from '../../Components/ScrollButtons'
import { ProductContext } from '../../Context'
import Modal from '../../Components/Modal'

function Home () {
  const { products } = useContext(ProductContext)

  return (
    <div className='w-full max-w-[1200px] m-auto mt-10 relative'>
      <LeftButton />

      <div className='ml-2 flex items-baseline gap-4'>
        <h1 className='text-2xl'>Ofertas</h1>
        <Link
          href='/all-products'
          className='text-sm text-[#3483fa] hover:text-[#1259c3]'
        >
          Ver todas
        </Link>
      </div>

      <section className='cards-container w-full h-auto py-6 px-2 flex justify-between gap-3'>
        {
          products?.map(({ image, title, price, rating, description }) => (
            <Card
              key={title}
              image={image}
              price={price}
              rating={rating.rate}
              description={description}
            />
          ))
        }
      </section>

      <RightButton />
      <Modal />
    </div>
  )
}

export default Home
