import React, { useContext } from 'react'
import { Header } from '../../Components/Header'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useLocation } from 'wouter'
import { ProductContext } from '../../Context'
import Modal from '../../Components/Modal'

let productList

function ProductsByCategory () {
  const [location] = useLocation()
  const { filterByCategory } = useContext(ProductContext)

  // eslint-disable-next-line no-unused-vars
  const [_, page, categoryName] = location.split('/')
  productList = filterByCategory(categoryName)

  return (
    <>
      <Header />
      <main>
        <Layout>
          <div className='ml-2 flex items-baseline gap-4'>
            <h1 className='text-2xl'>{categoryName}</h1>
          </div>
          <section className='cards-container w-full h-auto py-6 px-2 flex justify-between gap-3'>
            {
              productList?.map(({ id, image, title, price, rating, description }) => (
                <Card
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating.rate}
                  description={description}
                />
              ))
            }
          </section>
        </Layout>
      </main>
      <Modal />
    </>
  )
}

export default ProductsByCategory
