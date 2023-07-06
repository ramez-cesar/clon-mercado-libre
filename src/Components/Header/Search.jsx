import React from 'react'

function Search () {
  return (
    <section className='header-search'>
      <form>
        <input
          className='w-[580px] py-[8px] px-[15px] placeholder:text-[#dbdada] shadow outline-none focus:border focus:border-[#3483fa]'
          type='text'
          placeholder='Buscar productos, marcas y mas...'
        />
      </form>
    </section>
  )
}

export default Search
