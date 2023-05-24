
import React from 'react'
import index from '@/app/styles/root/scss/root.module.scss'
import SelectToken from './components/sections/SelectToken'
import TradeSection from './components/sections/TradeSection'


const page = () => {
  return (
    <article>
      <div className={index.mainContainer}>
        <section>
        <SelectToken />
        </section>
        <section>
         <TradeSection />
        </section>
        </div>
    </article>
  )
}

export default page