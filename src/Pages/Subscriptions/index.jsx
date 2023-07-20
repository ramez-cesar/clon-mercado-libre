import React from 'react'
import ComboSubscription from '../../Components/ComboSubscription'
import BenefitCard from '../../Components/BenefitCard'
import shippingBenefit from '../../assets/images/shippingBenefit.jpg'
import quantumania from '../../assets/images/quantumania.jpg'
import espnNBA from '../../assets/images/espnNBA.jpg'
import shippingBenefitLogo from '../../assets/images/shippingBenefitLogo.png'
import disneyPlusLogo from '../../assets/images/disneyPlusLogo.png'
import starPlusLogo from '../../assets/images/starPlusLogo.png'

function Subscriptions () {
  return (
    <main>
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
    </main>
  )
}

export default Subscriptions
