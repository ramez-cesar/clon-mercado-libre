import React, { useContext } from 'react'
import { useLocation } from 'wouter'
import { Header } from '../../Components/Header'
import ProductDetails from './Components/Details'
import { ProductContext } from '../../Context'
import SimilarProducts from './Components/SimilarProducts'
import Layout from '../../Components/Layout'
import ProductDescription from './Components/ProductDescription'
import Modal from '../../Components/Modal'

function Details () {
  const [location] = useLocation()
  const { filterById } = useContext(ProductContext)

  // eslint-disable-next-line no-unused-vars
  const [_, subdomain, page, id] = location.split('/')
  const selectedProduct = filterById(id)

  // Se obtiene la categoría del producto
  const getCategory = selectedProduct.map(product => {
    return product.category
  })

  return (
    <>
      <Header />
      <main>
        <Layout>
          {
            selectedProduct?.map(({ id, image, title, price, rating, description }) => (
              <ProductDetails
                key={id}
                image={image}
                title={title}
                price={price}
                rating={rating.rate}
                description={description}
              />
            ))
          }
          <SimilarProducts
            id={+id}
            category={getCategory.toString()}
          />
          <ProductDescription />
        </Layout>
      </main>
      <Modal />
    </>
  )
}

export default Details
