import React from 'react'

function Layout ({ children }) {
  return (
    <main className='w-full'>
      <div className='max-w-[1200px] m-auto pt-10 relative'>
        {
          children
        }
      </div>
    </main>
  )
}

export default Layout
