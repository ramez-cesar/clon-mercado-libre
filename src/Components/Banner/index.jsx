import React from 'react'

function Banner ({ bannerTitle, children }) {
  return (
    <section className='max-w-[800px] mx-auto my-6 p-4'>
      <article className='w-full bg-white rounded-md shadow'>
        <h1 className='px-6 py-4 text-2xl'>{bannerTitle}</h1>

        <div className='pr-6 pb-6 pl-6 flex justify-between gap-x-3.5'>
          {
            children
          }
        </div>
      </article>
    </section>
  )
}

export default Banner
