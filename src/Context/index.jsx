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
  const [addClassRightBtn, setAddClassRightBtn] = useState(null)

  // Estado para agregar/eliminar clase del botón de desplazamiento izquierdo
  const [addClassLeftBtn, setAddClassLeftBtn] = useState(null)

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      addClassRightBtn,
      setAddClassRightBtn,
      addClassLeftBtn,
      setAddClassLeftBtn
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }
