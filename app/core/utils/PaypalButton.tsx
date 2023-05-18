import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage";
interface Props {
  product: { price: number; description: string };
}


const PaypalButton = ({ product }: Props) => {
  const [paidFor, setPaidFor] = useState(false);
  const handleApprove = (orderID:string) => {
    setPaidFor(true);
  };

  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "vertical",
        tagline: false,
        shape: "pill",
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: String(product.price),
              },
            },
          ],
        });
      }}
      onCancel={()=>{
        alert('canceled')
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order?.capture();
        console.log("order", order);
        handleApprove(data.orderID);
      }}
      onError={(err) => {
        alert(err);
      }}
    />
  );
};

export default PaypalButton;
