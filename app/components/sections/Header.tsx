"use client"
import React, { useEffect, useState } from 'react'
import header from '@/app/styles/root/scss/header.module.scss'
import { MdCurrencyExchange } from 'react-icons/md'

const Header = () => {
  
  return (
    <header>
    <div className={header.Container}>
        <section className={header.TokenDataSection}>
        <div>
           <p><MdCurrencyExchange size={15}/> DPO Token</p> 
           <p>$ 0.01</p> 
        </div>
            <div>
            <p>Circulating Volume:999,000,000</p>
            <p>Circulating Supply Market CAP(USD): $9,990,000</p>
            <p>Fully Diluted Market CAP(USD): $10,000,000</p>
            </div>
        </section>
    <aside>
       
    </aside>
    </div>
</header>
  )
}

export default Header