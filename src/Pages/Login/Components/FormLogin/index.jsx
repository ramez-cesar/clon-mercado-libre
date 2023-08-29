import React from 'react'
import { Link } from 'wouter'

function FormLogin () {
  return (
    <section className='w-auto border border-[rgba(0,0,0,.1)] rounded-md'>
      <form className='m-10'>
        <label>
          <p className='text-sm text-[rgba(0,0,0,.9)]'>E‑mail, teléfono o usuario</p>
          <div className='w-[400px] h-12 flex items-center border border-[rgba(0,0,0,0.37)] rounded-lg focus:border focus:border-[#2968C8]'>
            <input
              type='text'
              className='w-full h-5 p-3 bg-transparent outline-none'
            />
          </div>

          <div className='mt-8 flex gap-6'>
            <Link href='/clon-mercado-libre/donde_sea'>
              <a className='px-5 py-3 text-sm font-semibold text-[rgba(0,0,0,.25)] bg-[rgba(0,0,0,.1)] rounded-md'>Continuar</a>
            </Link>

            <Link href='/clon-mercado-libre/donde_sea'>
              <a className='px-5 py-3 text-sm font-semibold text-[#3483fa]'>Crear cuenta</a>
            </Link>
          </div>
        </label>
      </form>
    </section>
  )
}

export default FormLogin
