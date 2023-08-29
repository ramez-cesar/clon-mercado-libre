import React, { useContext } from 'react'
import { Link } from 'wouter'
import { ProductContext } from '../../Context'
import { IconSearch } from '@tabler/icons-react'

let addClass

function Search () {
  const {
    search,
    setSearch,
    listWantedProducts,
    setListWantedProducts,
    productList
  } = useContext(ProductContext)

  function productFinder (e) {
    const inputValue = e.target.value

    setSearch(inputValue)
  }

  addClass = (search !== '') ? 'show-item' : ''

  // Si el cursor está dentro de la sección del buscador, muestra la lista de opciones de búsqueda
  const showSearchList = (e) => {
    if (e.type === 'mouseenter') {
      setListWantedProducts('')
    }
  }

  // Si el cursor está fuera del la sección del buscador, oculta la lista de opciones de búsqueda
  const hideSearchList = (e) => {
    if (e.type === 'mouseleave') {
      setListWantedProducts('hide-list')
    }
  }

  // Se limita el resultado de la búsqueda a 6 productos (para no mostrar una lista muy larga)
  const searchResults = productList.slice(0, 6)

  return (
    <section
      onMouseEnter={showSearchList}
      onMouseLeave={hideSearchList}
      className='header-search'
    >
      <form className='relative'>
        <input
          value={search}
          onChange={productFinder}
          className='w-[580px] text-sm text-[rgba(32,32,32,0.8)] py-[9px] px-[15px] shadow outline-none placeholder:text-[#dbdada] autofocus focus:border focus:border-[#3483fa]'
          type='text'
          placeholder='Buscar productos, marcas y mas...'
        />
      </form>

      <div
        className={`wanted-products ${addClass} ${listWantedProducts} w-[580px] bg-white absolute z-10 border border-[#d7d7d7]`}
      >
        <ul className='my-2'>
          {
            searchResults.map(({ id, title }) => (
              <ProductFound
                key={id}
                id={id}
                titleProduct={title}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

function ProductFound ({ id, titleProduct }) {
  const {
    setListWantedProducts
  } = useContext(ProductContext)

  const hideSearchList = () => {
    setListWantedProducts('hide-list')
  }

  return (
    <li
      onClick={hideSearchList}
      className='text-[#5c5c5c] relative hover:bg-[#3483fa] hover:text-white'
    >
      <span className='pl-3 absolute top-2'>
        <IconSearch className='w-5 h-5 text-[#d7d7d7] stroke-1' />
      </span>
      <Link
        href={`/clon-mercado-libre/product/${id}/${titleProduct}`}
        className='py-2.5 pl-11 text-[13px] block'
      >
        {titleProduct}
      </Link>
    </li>
  )
}

export default Search
