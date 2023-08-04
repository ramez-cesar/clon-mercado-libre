import React from 'react'
import GeneralButton from '../GeneralButton'

function ComboSubscription ({ children }) {
  return (
    <section className='w-full h-full mb-6 py-12 flex justify-center bg-gradient-to-r from-indigo-950 via-purple-900 to-fuchsia-800'>
      <div className='w-[460px] mr-[52px]'>
        <article className='h-full grid content-between'>
          <div>
            <h1 className='text-3xl font-semibold text-white'>Sube directo al nivel 6</h1>
            <p className='max-w-sm mt-2 text-base leading-[22px] text-white'>Suscríbete y disfruta los mejores beneficios a un precio increíble.</p>
            <h3 className='mt-4 text-3xl font-semibold text-white'>$ 99/mes</h3>
          </div>

          <div className='flex flex-col gap-y-4'>
            <GeneralButton
              route='/login'
              buttonTitle='Quiero susbscribirme'
            />
            <p className='text-[11px] leading-3 text-white'>Al suscribirte, aceptas los Términos y condiciones. <br /> de Mercado Puntos. Puedes cancelar cuando quieras.</p>
          </div>
        </article>
      </div>

      <div className='w-[428px]'>
        <article className='flex justify-between gap-x-4'>
          {
            children
          }
        </article>
      </div>
    </section>
  )
}

export default ComboSubscription
