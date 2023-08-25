import React from 'react'

function Banner ({ bannerTitle, children }) {
  return (
    <>
      <article className='w-full bg-white rounded-md shadow'>
        <h1 className='px-6 py-4 text-xl font-semibold'>{bannerTitle}</h1>

        <div className='pr-6 pb-6 pl-6 flex justify-between gap-x-3.5'>
          {
            children
          }
        </div>
      </article>
    </>
  )
}

export default Banner
