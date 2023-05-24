import React from 'react'
import dpoTokenLogo from '@/public/images&gifs/dpo-token-logo.png'
import TokenPriceDetail from '@/app/components/TokenPriceDetail'
import home from '@/app/styles/portal/scss/index.module.scss'
import Image from 'next/image'


const Section1 = () => {
  return (
    <section>
    <div className={home.tokenPricesContainer}>
      <div className={home.tokenPrice_top}>
        <figure>
          <Image src={dpoTokenLogo} className={home.tokenLogo} alt="DPO Token Logo" />
          <TokenPriceDetail name='DPO' price={0.001} change='' />
        </figure>
      </div>
      <div className={home.tokenPrice_top2}>
        <figure>
        <TokenPriceDetail name='ARB' price={1.16} change='' />
        </figure>
      </div>
      <div className={home.tokenPrice_top3}>
      <figure>
        <TokenPriceDetail name='ETH' price={1804.40} change='' />
        </figure>
      </div>
      <div className={home.tokenPrice_top4}>
      <figure>
        <TokenPriceDetail name='BTC' price={26866.09} change='' />
        </figure>
      </div>
    </div>
  </section>
  )
}

export default Section1