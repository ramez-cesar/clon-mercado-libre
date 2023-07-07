import React, { useEffect, useState } from 'react'
import { API_URL } from '../../Services'
import { Link } from 'wouter'
import Card from '../../Components/Card'

function Home () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Error HTTP: ', response.status)
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  console.log(products)
  return (
    <div className='w-full max-w-[1200px] m-auto mt-10'>
      <div className='my-7 flex items-baseline gap-4'>
        <h1 className='text-2xl'>Ofertas</h1>
        <Link
          href='/all-products'
          className='text-sm text-[#3483fa] hover:text-[#1259c3]'
        >
          Ver todas
        </Link>
      </div>
      <section className='w-full flex flex-wrap gap-3'>
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
    </div>
  )
}

export default Home
