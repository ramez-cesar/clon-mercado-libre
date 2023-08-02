import React from 'react'
import Routes from './Routes'
import { ProductProvider } from './Context'
import './App.css'

function App () {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  )
}

export default App
