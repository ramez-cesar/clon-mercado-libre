import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Suscribe from './Suscribe'
import Logo from './Logo'

function Header () {
  return (
    <header className='border-b-[1px] border-[#d7d7d7] bg-[#fff159]'>
      <div className='header-container'>
        <Logo />
        <Search />
        <Suscribe />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
