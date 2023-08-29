import React, { useContext } from 'react'
import { Link } from 'wouter'
import { Header } from '../../Components/Header'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { RightButton, LeftButton } from '../../Components/ScrollButtons'
import { ProductContext } from '../../Context'
import BuyLevel from './Components/BuyLevel'
import Modal from '../../Components/Modal'
import './style.css'

function Home () {
  const { products } = useContext(ProductContext)

  return (
    <>
      <Header />
      <main>
        <section className='w-full relative'>
          <Layout>
            <div className='ml-2 flex items-baseline gap-4'>
              <h1 className='text-2xl'>Ofertas</h1>
              <Link
                href='/clon-mercado-libre/all-products'
                className='text-sm text-[#3483fa] hover:text-[#1259c3]'
              >
                Ver todas
              </Link>
            </div>

            <LeftButton />
            <div className='cards-container max-w-[1200px] w-full h-auto py-6 flex justify-between gap-3'>
              {
                products?.map(({ id, image, title, price, rating, description }) => (
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
            </div>
            <RightButton />
          </Layout>
        </section>
        <BuyLevel />
      </main>
      <Modal />
    </>
  )
}

export default Home
