import React from 'react'

function Layout ({ children }) {
  return (
    <div className='max-w-[1200px] m-auto pt-10 relative'>
      {
        children
      }
    </div>
  )
}

export default Layout
