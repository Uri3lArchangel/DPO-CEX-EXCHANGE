import React from 'react'

interface Props{
  price:number;
  change:string;
  name:string;
}

const TokenPriceDetail = ({price,change,name}:Props) => {
  return (
    <figcaption>
    <div>
    <p>${price} </p>
    <small>/{name}</small>
    </div>
    <p>{name} PRICE <small>{change}</small></p>
    </figcaption>
  )
}

export default TokenPriceDetail