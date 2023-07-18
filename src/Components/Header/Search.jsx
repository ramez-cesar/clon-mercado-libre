import React, { useContext } from 'react'
import { Link } from 'wouter'
import { ProductContext } from '../../Context'
import { IconSearch } from '@tabler/icons-react'

let addClass

function Search () {
  const { search, setSearch, listWantedProducts, setListWantedProducts, productList } = useContext(ProductContext)

  function productFinder (e) {
    const inputValue = e.target.value

    setSearch(inputValue)
  }

  function verifyFocus (e) {
    // onfocus es llamado cuando el elemento tiene el foco.
    e.target.onfocus = function () {
      setListWantedProducts('')
    }

    // onblur es llamado cuando el elemento pierde el foco.
    e.target.onblur = function () {
      setListWantedProducts('hide-list')
    }
  }

  // Se limita el resultado de la búsqueda a 6 productos (para no mostrar una lista muy larga)
  const searchResults = productList.slice(0, 6)

  addClass = (search !== '') ? 'show-item' : ''

  return (
    <section className='header-search'>
      <form className='relative'>
        <input
          value={search}
          onChange={productFinder}
          onClick={verifyFocus}
          className='input w-[580px] text-sm text-[rgba(32,32,32,0.8)] py-[8px] px-[15px] shadow outline-none placeholder:text-[#dbdada] autofocus focus:border focus:border-[#3483fa]'
          type='text'
          placeholder='Buscar productos, marcas y mas...'
        />
      </form>

      <div className={`wanted-products ${addClass} ${listWantedProducts} w-[580px] bg-white absolute z-10 border border-[#d7d7d7] shadow-md`}>
        <ul className='my-2'>
          {
            searchResults.map(({ title }) => (
              <ProductFound key={title} result={title} />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

function ProductFound ({ result }) {
  return (
    <li className='text-[#5c5c5c] relative hover:bg-[#3483fa] hover:text-white'>
      <span className='pl-3 absolute top-2'>
        <IconSearch className='w-5 h-5 text-[#d7d7d7] stroke-1' />
      </span>
      <Link
        href={result}
        className='py-2.5 pl-11 text-[13px] block'
      >
        {result}
      </Link>
    </li>
  )
}

export default Search
