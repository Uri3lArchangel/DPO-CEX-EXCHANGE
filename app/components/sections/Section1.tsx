import React from 'react'
import dpoTokenLogo from '@/public/images&gifs/dpo-token-logo.png'
import TokenPriceDetail from '@/app/components/TokenPriceDetail'
import home from '@/app/styles/scss/index.module.scss'
import Image from 'next/image'


const Section1 = () => {
  return (
    <section>
    <div className={home.tokenPricesContainer}>
      <div className={home.tokenPrice_top}>
        <figure>
          <Image src={dpoTokenLogo} className={home.tokenLogo} alt="DPO Token Logo" />
          <TokenPriceDetail name='DPO' price={0.001} change='+2.4%' />
        </figure>
      </div>
      <div className={home.tokenPrice_top2}>
        <figure>
        <TokenPriceDetail name='ARB' price={6} change='' />
        </figure>
      </div>
      <div className={home.tokenPrice_top3}>
      <figure>
        <TokenPriceDetail name='ETH' price={1400} change='' />
        </figure>
      </div>
      <div className={home.tokenPrice_top4}>
      <figure>
        <TokenPriceDetail name='BTC' price={27500} change='' />
        </figure>
      </div>
    </div>
  </section>
  )
}

export default Section1