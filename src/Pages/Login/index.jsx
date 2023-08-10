import React from 'react'
import { Link } from 'wouter'
import { IconDeviceMobile, IconUser, IconChevronRight } from '@tabler/icons-react'
import Layout from '../../Components/Layout'
import { HeaderLogin } from '../../Components/Header'

function Login () {
  return (
    <>
      <HeaderLogin />
      <Layout>
        <div className='flex justify-center'>
          <LandscapeLeft />
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
                  <Link href='/donde_sea'>
                    <a className='px-5 py-3 text-sm font-semibold text-[rgba(0,0,0,.25)] bg-[rgba(0,0,0,.1)] rounded-md'>Continuar</a>
                  </Link>

                  <Link href='/donde_sea'>
                    <a className='px-5 py-3 text-sm font-semibold text-[#3483fa]'>Crear cuenta</a>
                  </Link>
                </div>
              </label>
            </form>
          </section>
        </div>
      </Layout>
    </>
  )
}

function LandscapeLeft () {
  return (
    <section className='w-96'>
      <h1 className='mr-6 text-3xl font-semibold text-[rgba(0,0,0,.9)] leading-[44px]'>Ingresa tu e‑mail, teléfono o usuario de Mercado Libre</h1>
      <hr className='w-[55%] my-3 border-1 border-[#0000001a]' />

      <div className='w-64'>
        <h5 className='pb-2 text-xs font-semibold text-[rgba(0,0,0,.9)]'>Reportar un problema</h5>
        <ul>
          <li className='h-10 flex border-b border-[#0000001a] transition hover:bg-[rgba(0,0,0,.04)]'>
            <Link href='/login'>
              <a className='w-full flex items-center'>
                <IconDeviceMobile className='text-[rgba(0,0,0,0.8)]' />
                <div className='w-full'>
                  <p className='px-2 text-xs text-[rgba(0,0,0,.55)]'>Robo o pérdida de teléfono</p>
                </div>
                <IconChevronRight className='text-[rgba(0,0,0,.55)]' />
              </a>
            </Link>
          </li>

          <li className='h-10 flex transition hover:bg-[rgba(0,0,0,.04)]'>
            <Link href='/login'>
              <a className='w-full flex items-center'>
                <IconUser className='text-[rgba(0,0,0,0.8)]' />
                <div className='w-full'>
                  <p className='px-2 text-xs text-[rgba(0,0,0,.55)]'>Robo de cuenta</p>
                </div>
                <IconChevronRight className='text-[rgba(0,0,0,.55)]' />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Login
