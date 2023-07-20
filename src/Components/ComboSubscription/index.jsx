import React from 'react'
import GeneralButton from '../GeneralButton'

function ComboSubscription ({ children }) {
  return (
    <section className='combo-sub w-full h-full mb-6 py-12 flex justify-center'>
      <div className='w-[460px] mr-[52px]'>
        <article className='h-full grid content-between'>
          <div>
            <h1 className='text-3xl font-semibold text-white'>Sube directo al nivel 6</h1>
            <p className='max-w-sm mt-2 text-lg leading-[22px] text-white'>Suscríbete y disfruta los mejores beneficios a un precio increíble.</p>
            <h3 className='mt-4 text-[32px] font-semibold text-white'>$ 99/mes</h3>
          </div>

          <div className='flex flex-col gap-y-4'>
<<<<<<< HEAD
            <GeneralButton
              route='/login'
              buttonTitle='Quiero susbscribirme'
            />
=======
            <GeneralButton buttonTitle='Quiero susbscribirme' />
>>>>>>> cf83df168027e2c7f749a3877a1a958d6dcedf84
            <p className='text-[11px] leading-4 text-white'>Al suscribirte, aceptas los Términos y condiciones. <br /> de Mercado Puntos. Puedes cancelar cuando quieras.</p>
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
