import React, { useContext } from 'react'
import { Header } from '../../Components/Header'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useLocation } from 'wouter'
import { ProductContext } from '../../Context'
import Modal from '../../Components/Modal'

let products

function ProductsByCategory () {
  const [location] = useLocation()
  const { filterProduct } = useContext(ProductContext)

  // eslint-disable-next-line no-unused-vars
  const [_, section, categoryName] = location.split('/')

  if (categoryName === 'mens-clothing') {
    products = filterProduct("men's clothing")
  } else if (categoryName === 'womens-clothing') {
    products = filterProduct("women's clothing")
  } else {
    products = filterProduct(categoryName)
  }

  return (
    <>
      <Header />
      <Layout>
        <div className='ml-2 flex items-baseline gap-4'>
          <h1 className='text-2xl'>{categoryName}</h1>
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
        <Modal />
      </Layout>
    </>
  )
}

export default ProductsByCategory
