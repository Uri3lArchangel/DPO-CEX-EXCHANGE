"use client";
import trade from "@/app/styles/root/scss/trade.module.scss";
import React, { useEffect, useState } from "react";
import {GiReceiveMoney,GiPayMoney} from 'react-icons/gi'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const TradeSection = () => {
    
    const [priceValue,setPriceValue]=useState(0.01)
    const [amount,setAmount] = useState(0)
    const changeDpoPrice=(direction:string)=>{
        if(direction === "+"){
            setPriceValue(prev => prev + 0.01 * prev)
        }else if(direction === "-"){
            setPriceValue(prev => prev - 0.01 * prev)
        }else{
            return
        }
    }
    const changeAmountValue = (direction:string)=>{
        if(direction === "+"){
            setAmount(prev => prev + 1)
        }else if(direction === "-"){
            setAmount(prev => prev - 1)
        }else{
            return
        }
    }
    useEffect(()=>{

    },[priceValue])
  return (
    <div className={trade.Container}>
      <label htmlFor="">Choose your trading price:</label>
      <div>
        <AiOutlineMinusCircle onClick={()=>{changeDpoPrice("-")}} className={trade.icons} size={20} />
        <input type="text" value={(priceValue).toFixed(4)} />
        <AiOutlinePlusCircle onClick={()=>{changeDpoPrice("+")}} className={trade.icons} size={20} />
      </div>
      <button className={trade.resetPrice}>Set as market price</button>
      <label htmlFor="">Enter amount to trade:</label>
      <div>
      <AiOutlineMinusCircle onClick={()=>changeAmountValue("-")} className={trade.icons} size={20} />
        <input type="text" value={amount}/>
        <AiOutlinePlusCircle onClick={()=>changeAmountValue("+")} className={trade.icons} size={20} />
      </div>
      <input type="text" readOnly  placeholder="Amount to receive" />
      <div className={trade.tradeBtns}> 
        <button><GiReceiveMoney size={20} />BUY</button>
        <button><GiPayMoney size={20} />SELL</button>
      </div>
    </div>
  );
};

export default TradeSection;
