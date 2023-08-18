import React from 'react'
import shippingBenefitLogo2x from '../../../../assets/images/shippingBenefitLogo2x.png'
import disneyPlus from '../../../../assets/images/disneyPlus.svg'
import starPlus from '../../../../assets/images/starPlus.svg'

function Lealtad () {
  return (
    <div className='p-8 bg-white'>
      <span className='font-semibold'>Consigue los mejores beneficios en Mercado Libre</span>
      <div className='mt-7 flex justify-between'>
        <div className='max-w-[300px] flex items-center gap-4'>
          <figure className='w-[72px] h-[72px] min-w-[72px] min-h-[72px] flex items-center justify-center border border-[#efefef] rounded-full overflow-hidden'>
            <img
              src={disneyPlus}
              alt='Disney+'
              className='w-full h-auto'
            />
          </figure>
          <span className='text-sm'>Disney+ sin cargo</span>
        </div>

        <div className='max-w-[300px] flex items-center gap-4'>
          <figure className='w-[72px] h-[72px] min-w-[72px] min-h-[72px] flex items-center justify-center border border-[#efefef] rounded-full overflow-hidden'>
            <img
              src={starPlus}
              alt='Star+'
              className='w-full h-auto'
            />
          </figure>
          <span className='text-sm'>Star+ sin cargo</span>
        </div>

        <div className='max-w-[300px] flex items-center gap-4'>
          <figure className='w-[72px] h-[72px] min-w-[72px] min-h-[72px] flex items-center justify-center border border-[#efefef] rounded-full overflow-hidden'>
            <img
              src={shippingBenefitLogo2x}
              alt='Envíos gratis'
              className='w-full h-auto'
            />
          </figure>
          <span className='text-sm'>Envíos gratis y rápidos en productos desde $ 299</span>
        </div>
      </div>
    </div>
  )
}

export default Lealtad
