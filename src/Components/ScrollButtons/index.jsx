import React, { useContext } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { ProductContext } from '../../Context'

function RightButton () {
  const { addClassRightBtn, setAddClassRightBtn, setAddClassLeftBtn } = useContext(ProductContext)

  function rightScrollButton () {
    const cardItems = document.querySelector('.cards-container')
    // += 1140 es el total de pixeles que debe recorerse por cada clic.
    // Este valor se obtiene a partir del ancho de cada Card
    cardItems.scrollLeft += 1140

    // 3602 es el total de pixeles que se debe recorrer para llegar al final de las Crads
    if (cardItems.scrollLeft === 3602) setAddClassRightBtn('hideButtonRight')
    if (cardItems.scrollLeft !== 2) setAddClassLeftBtn('hideButtonLeft')
  }

  return (
    <button
      onClick={rightScrollButton}
      className={`rightButton ${addClassRightBtn} w-[60px] h-[60px] items-center justify-center rounded-full bg-white shadow absolute right-[-20px] bottom-[37%] hover:shadow-lg`}
    >
      <IconChevronRight className='w-[30px] h-[30px] text-[#3483fa] stroke-1' />
    </button>
  )
}

function LeftButton () {
  const { addClassLeftBtn, setAddClassLeftBtn, setAddClassRightBtn } = useContext(ProductContext)

  function leftScrollButton () {
    const cardItems = document.querySelector('.cards-container')
    // -= 1140 es el total de pixeles que debe retroceder por cada clic.
    cardItems.scrollLeft -= 1140

    // 2 es el total de pixeles desde donde parten las Crads. Es decir, el valor inicial.
    // Este valor debería comenzar en 0, pero se considera el padding asignado.
    if (cardItems.scrollLeft === 2) setAddClassLeftBtn('')
    if (cardItems.scrollLeft !== 3602) setAddClassRightBtn('')
  }

  return (
    <button
      onClick={leftScrollButton}
      className={`leftButton ${addClassLeftBtn} w-[60px] h-[60px] items-center justify-center rounded-full bg-white shadow absolute left-[-30px] bottom-[37%] hover:shadow-lg`}
    >
      <IconChevronLeft className='w-[30px] h-[30px] text-[#3483fa] stroke-1' />
    </button>
  )
}

export { RightButton, LeftButton }
