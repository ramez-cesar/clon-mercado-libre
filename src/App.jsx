import React from 'react'
import Routes from './Routes'
import Header from './Components/Header'
import { ProductProvider } from './Context'
import './App.css'

function App () {
  return (
    <ProductProvider>
      <Header />
      <Routes />
    </ProductProvider>
  )
}

export default App
