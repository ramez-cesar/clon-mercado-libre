import React from 'react'
import { Link } from 'wouter'

function NavbarItem ({ link, textColor, itemName }) {
  return (
    <li className='h-8 flex items-end'>
      <Link
        href={link}
        className={`text-[13px] text-[${textColor}]`}
      >
        {itemName}
      </Link>
    </li>
  )
}

function NavbarItemMenu ({ link, itemName }) {
  return (
    <li>
      <Link
        href={link}
        className='px-8 text-[13px] text-white block hover:bg-[#3483fa]'
      >
        {itemName}
      </Link>
    </li>
  )
}

export { NavbarItem, NavbarItemMenu }
