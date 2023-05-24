import './globals.css'
import {Asap_Condensed} from 'next/font/google'
import React from 'react'
import root from './styles/root/scss/root.module.scss'
import Sidenav from './components/navigation/Sidenav'
import sideNav from '@/app/styles/root/scss/root.module.scss'
import Header from './components/sections/Header'

const calli = Asap_Condensed({
    weight:"700",
    style:"normal",
    subsets:["latin"]
})

export const metadata={
title:"DPO Exchange | Trade your tokens",
description:"Trade tokens like USDT, VELA, LINK, UNI, DPO and many other arbitrium one chain ERC20 tokens"
} 
export default function RootLayout({children}:{children:React.ReactNode}){
    
    return(
        <html lang='en' className={calli.className}>
            <body>
            <Header />
                <main className={root.Main}>
                    {children}
                </main>
            </body>
        </html>
    )
}