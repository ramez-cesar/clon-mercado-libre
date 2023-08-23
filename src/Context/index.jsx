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

  // Estado para mostrar la lista de productos del buscador
  const [listWantedProducts, setListWantedProducts] = useState('')

  // Estado para abrir/cerrar modal
  const [openModal, setOpenModal] = useState(false)

  // Estado para agregar el CP
  const [codePostal, setCodePostal] = useState('')

  // Estado para mostrar el CP una vez que se obtiene
  const [showCP, setShowCP] = useState(false)

  // Estado para marcar en rojo el texto y el input cuado el CP es incorrecto
  const [incorrectCP, setIncorrectCP] = useState(false)

  // Estado para mostrar/ocultar el mensaje de error en CP incorrecto
  const [errorMessageCP, setErrorMessageCP] = useState('')

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

  // Función que verifica y devuelve productos filtrados a partir del nombre de una categoría
  const filterByCategory = (category) => {
    let categoryName

    if (category === 'mens-clothing') {
      categoryName = "men's clothing"
    } else if (category === 'womens-clothing') {
      categoryName = "women's clothing"
    } else {
      categoryName = category
    }

    const filtered = products.filter(product => {
      return product.category === categoryName
    })

    return filtered
  }

  // Función que filtra productos a partir de un ID.
  const filterById = (id) => {
    const filtered = products.filter(product => {
      return product.id === +id
    })

    return filtered
  }

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      addClassRightBtn,
      addClassLeftBtn,
      search,
      setSearch,
      listWantedProducts,
      setListWantedProducts,
      openModal,
      setOpenModal,
      codePostal,
      setCodePostal,
      showCP,
      setShowCP,
      incorrectCP,
      setIncorrectCP,
      errorMessageCP,
      setErrorMessageCP,
      rightScrollButton,
      leftScrollButton,
      productList,
      filterByCategory,
      filterById
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
