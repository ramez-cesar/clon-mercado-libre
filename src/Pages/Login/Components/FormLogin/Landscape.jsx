import React from 'react'
import { Link } from 'wouter'
import { IconDeviceMobile, IconUser, IconChevronRight } from '@tabler/icons-react'

function LandscapeLeft () {
  return (
    <section className='w-96'>
      <h1 className='mr-6 text-3xl font-semibold text-[rgba(0,0,0,.9)] leading-[44px]'>Ingresa tu e‑mail, teléfono o usuario de Mercado Libre</h1>
      <hr className='w-[55%] my-3 border-1 border-[#0000001a]' />

      <div className='w-64'>
        <h5 className='pb-2 text-xs font-semibold text-[rgba(0,0,0,.9)]'>Reportar un problema</h5>
        <ul>
          <li className='h-10 flex border-b border-[#0000001a] transition hover:bg-[rgba(0,0,0,.04)]'>
            <Link href='/clon-mercado-libre/login'>
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
            <Link href='/clon-mercado-libre/login'>
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

export default LandscapeLeft
