import React from 'react'
import { Header } from '../../Components/Header'
import ComboSubscription from './Components/ComboSubscription'
import Banner from './Components/Banner'
import BenefitCard from './Components/BenefitCard'
import BenefitsPoster from './Components/BenefitsPoster'
import shippingBenefit from '../../assets/images/shippingBenefit.jpg'
import quantumania from '../../assets/images/quantumania.jpg'
import espnNBA from '../../assets/images/espnNBA.jpg'
import shippingBenefitLogo from '../../assets/images/shippingBenefitLogo.png'
import disneyPlusLogo from '../../assets/images/disneyPlusLogo.png'
import starPlusLogo from '../../assets/images/starPlusLogo.png'
import freeShipping from '../../assets/images/freeShipping.jpg'
import sameDayShipping from '../../assets/images/sameDayShipping.jpg'
import Modal from '../../Components/Modal'

function Subscriptions () {
  return (
    <>
      <Header />
      <main>
        <section className='w-full h-full mb-6 py-12 flex justify-center bg-gradient-to-r from-indigo-950 via-purple-900 to-fuchsia-800'>
          <ComboSubscription>
            <BenefitCard
              addClassName='free-shipping'
              routeImagePoster={shippingBenefit}
              altImagePoster='Envíos gratis'
              routeImageBenefits={shippingBenefitLogo}
              altImageBenefits='Envíos gratis'
              benefits='ENVIOS GRATIS Y EN EL DÍA'
            />

            <BenefitCard
              addClassName='disney'
              routeImagePoster={quantumania}
              altImagePoster='Quantumania'
              routeImageBenefits={disneyPlusLogo}
              altImageBenefits='Disney+'
              benefits='SIN CARGO'
            />

            <BenefitCard
              addClassName='star'
              routeImagePoster={espnNBA}
              altImagePoster='NBA'
              routeImageBenefits={starPlusLogo}
              altImageBenefits='Star+'
              benefits='SIN CARGO'
            />
          </ComboSubscription>
        </section>

        <section className='max-w-[800px] mx-auto my-6 p-4'>
          <Banner bannerTitle='Beneficios en envíos'>
            <BenefitsPoster
              posterTitle='Envíos gratis'
              posterDescription='En miles de productos desde $ 299'
              imagePath={freeShipping}
              altImagePath='Envíos gratis'
            />

            <BenefitsPoster
              posterTitle='Envíos rápidos en el día'
              posterDescription='Envíos en el mismo día sin costo adicional'
              imagePath={sameDayShipping}
              altImagePath='Envíos rápidos en el día'
            />
          </Banner>
        </section>
      </main>
      <Modal />
    </>
  )
}

export default Subscriptions
