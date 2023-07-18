import React, { createContext, useEffect, useState } from 'react'
import { API_URL } from '../Services'

const ProductContext = createContext(null)

function ProductProvider ({ children }) {
  // Estado para el consumo de la API
  const [products, setProducts] = useState([])

  // useEffect para el fetch de la API
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

  // Estado para agregar/eliminar clase del botón de desplazamiento derecho
  const [addClassRightBtn, setAddClassRightBtn] = useState('')

  // Estado para agregar/eliminar clase del botón de desplazamiento izquierdo
  const [addClassLeftBtn, setAddClassLeftBtn] = useState('')

  // Estado para el buscador
  const [search, setSearch] = useState('')

  function rightScrollButton (scrolling, initialScroll, scrollLimit) {
    const cardItems = document.querySelector('.cards-container')
    cardItems.scrollLeft += scrolling

    if (cardItems.scrollLeft === scrollLimit) setAddClassRightBtn('hideButtonRight')
    if (cardItems.scrollLeft !== initialScroll) setAddClassLeftBtn('hideButtonLeft')
  }

  function leftScrollButton (scrolling, initialScroll, scrollLimit) {
    const cardItems = document.querySelector('.cards-container')
    cardItems.scrollLeft -= scrolling

    if (cardItems.scrollLeft === initialScroll) setAddClassLeftBtn('')
    if (cardItems.scrollLeft !== scrollLimit) setAddClassRightBtn('')
  }

  const productList = products.filter(product => {
    const productName = product.title.toLowerCase()
    const productSearch = search.toLowerCase()

    return productName.includes(productSearch)
  })

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      addClassRightBtn,
      addClassLeftBtn,
      search,
      setSearch,
      rightScrollButton,
      leftScrollButton,
      productList
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
