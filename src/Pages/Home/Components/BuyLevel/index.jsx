import React from 'react'
import { Link } from 'wouter'
import Lealtad from './Lealtad'
import Layout from '../../../../Components/Layout'

function BuyLevel () {
  return (
    <section>
      <Layout>
        <div className='w-full h-16 py-10 px-6 flex items-center justify-between rounded-t-lg bg-gradient-to-r from-pink-600 to-blue-900'>
          <h2 className='text-white text-xl font-semibold'>Suscríbete al nivel 6</h2>
          <div className='border-l-2'>
            <h2 className='ml-3 text-white text-2xl font-semibold'>$ 99
              <span className='text-base font-semibold'> /mes</span>
            </h2>
          </div>
        </div>
        <Lealtad />
        <div className='py-4 px-8 flex justify-end bg-white border-t border-[#ededed] rounded-b-lg'>
          <Link href='/suscripciones'>
            <a className='py-2 px-4 text-sm text-white rounded-lg bg-[#3483fa]'>Suscríbete</a>
          </Link>
        </div>
      </Layout>
    </section>
  )
}

export default BuyLevel
