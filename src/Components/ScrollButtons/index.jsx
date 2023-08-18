import React, { useContext } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { ProductContext } from '../../Context'

function RightButton () {
  const { addClassRightBtn, rightScrollButton } = useContext(ProductContext)

  return (
    <button
      // 1194 es el total de pixeles que se desplaza por cada clic
      // 0 es valor inicial del scroll y 3588 el final
      onClick={() => rightScrollButton(1194, 0, 3588)}
      className={`rightButton ${addClassRightBtn} w-[60px] h-[60px] items-center justify-center rounded-full bg-white shadow absolute right-[-20px] bottom-[35%] hover:shadow-lg`}
    >
      <IconChevronRight className='w-[30px] h-[30px] text-[#3483fa] stroke-1' />
    </button>
  )
}

function LeftButton () {
  const { addClassLeftBtn, leftScrollButton } = useContext(ProductContext)

  return (
    <button
      onClick={() => leftScrollButton(1140, 0, 3588)}
      className={`leftButton ${addClassLeftBtn} w-[60px] h-[60px] items-center justify-center rounded-full bg-white shadow absolute left-[-30px] bottom-[35%] hover:shadow-lg`}
    >
      <IconChevronLeft className='w-[30px] h-[30px] text-[#3483fa] stroke-1' />
    </button>
  )
}

export { RightButton, LeftButton }
