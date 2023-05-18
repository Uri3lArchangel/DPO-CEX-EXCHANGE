
import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { message } from 'antd'
import { rates } from "@/app/components/sections/Section2";

interface Props{
  amount?:string 
}

const PaypalButton = ({amount}:Props) => {
  console.log(amount)
const [am,setAm]=useState(parseFloat(amount!)/2)
  const Product={
    totalPrice:"",
    desc:""
  }
 useEffect(()=>{
console.log(amount)
 },[amount])

  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "vertical",
        tagline: false,
        shape: "pill",
      }}

      onClick={async(data,actions)=>
        {
        Product.totalPrice = window.sessionStorage.getItem('productPrice')!
        Product.desc= window.sessionStorage.getItem('description')!
        if(Product.totalPrice == null || (Product.totalPrice) == 'NaN' || parseInt(Product.totalPrice) < 0 || !Product.totalPrice){
          message.error("Invalid Price specified",4,()=>{
            window.sessionStorage.clear()
            window.location.reload
            return actions.reject()
          })}
          console.log("amount",am)
         return actions.reject()

        
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: Product.desc,
              amount: {
                value: (Product.totalPrice),
              }
            },
          ],
        });
      }}
      onCancel={(data,actions)=>{
        alert('canceled')
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        console.log("order", order);
      }}
      onError={(err:any) => {
        
        if(String(err).includes('Request is not well-formed')){
       message.error("Invalid request parameters",5,()=>{window.location.reload()})
        }
      }}
    />
  );
};

export default PaypalButton;
