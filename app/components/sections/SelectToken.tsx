"use client"
import React, { useEffect, useRef } from 'react'
import index from '@/app/styles/root/scss/root.module.scss'


const SelectToken = () => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const selectChange=()=>{
    if(selectRef.current){
      
      let pair = selectRef.current.value
      console.log(pair)
    window.sessionStorage.setItem("pair",pair)
    }
  }
  useEffect(()=>{
    if(selectRef.current){
      let pair = selectRef.current.value
      console.log(pair)
    window.sessionStorage.setItem("pair",pair)
    }else{
      window.sessionStorage.setItem("pair","USD")

    }
  })
  return (
    <div>
        <p>
            Select Trading Pair
        </p>
    <select className={index.SelectToken} ref={selectRef} onChange={selectChange}>
          <option value="USDT">DPO/USDT</option>
          <option value="ARB">DPO/ARB</option>
          <option value="UNI">DPO/UNI</option>
          <option value="LINK">DPO/LINK</option>
          <option value="ETH">DPO/ETH</option>
          <option value="BTC">DPO/BTC</option>
          <option value="VELA">DPO/VELA</option>
        </select>
        
        </div>
          )
}

export default SelectToken