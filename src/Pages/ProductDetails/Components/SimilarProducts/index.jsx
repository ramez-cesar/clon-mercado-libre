import React, { useContext } from 'react'
import { ProductContext } from '../../../../Context'
import Card from '../../../../Components/Card'
import '../../style.css'

let productList

function SimilarProducts ({ id, category }) {
  const { filterByCategory } = useContext(ProductContext)
  productList = filterByCategory(category)

  // listSimilarProducts crea un nuevo array que no incluye el producto abierto a detalles
  // Y limita a un total de 3 artículos (en caso de incluir más...)
  const listSimilarProducts = productList.filter(product => product.id !== id).slice(0, 3)

  return (
    <section className='similarProducts bg-white'>
      <div className='w-full max-w-[850px] pt-10 px-10 flex flex-col'>
        <h2 className='mb-6 text-[22px]'>Quienes vieron este producto también compraron</h2>
        <div className='w-full p-4 cards-container flex justify-between'>
          {
            listSimilarProducts?.map(({ id, image, title, price, rating, description }) => (
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
      </div>
    </section>
  )
}

export default SimilarProducts
