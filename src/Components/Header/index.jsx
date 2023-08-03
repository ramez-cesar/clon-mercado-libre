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

function HeaderLogin () {
  return (
    <header className='w-full flex justify-start py-2.5 px-20 border-b-[1px] border-[#d7d7d7] bg-[#fff159]'>
      <div className=''>
        <Logo />
      </div>
    </header>
  )
}

export { Header, HeaderLogin }
