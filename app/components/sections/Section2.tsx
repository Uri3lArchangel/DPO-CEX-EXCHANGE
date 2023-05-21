"use client";
import React, { useEffect, useRef, useState } from "react";
import buy from "@/app/styles/scss/index.module.scss";
import paypal from "@/app/styles/scss/index.module.scss";
import CurrencySelect from "@/app/core/utils/CurrencySelect";
import Link from "next/link";
import {
  CreateOrderData,
  CreateOrderActions,
} from "@paypal/paypal-js/types/components/buttons";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CreateOrderRequestBody } from "@paypal/paypal-js";
interface Props {
  clientId: string;
}
interface ratesInterface {
  [key: string]: number;
}
export let rates: ratesInterface = {
  USD: 0.001,
  CAD: 0.00135,
  EUR: 0.00093,
  BRL: 0.00498,
  CZK: 0.02204,
  AUD: 0.00151,
};

const Section2 = ({ clientId }: Props) => {
  const [total, setTotal] = useState<string | null>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const [currency, setCurrency] = useState("USD");
  const [scriptProviderKey, setSCriptProviderKey] = useState(0);
  const purchase_item:CreateOrderRequestBody = {
    purchase_units: [
      {
        description: "DPO Tokens",
        amount: {
          value: total!,
        },
      },
    ],
  };
  const createOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
    return actions.order.create(purchase_item);
  };
  const amountInputChange = () => {
    if (amountRef.current) {
      if (amountRef.current.value == "") {
        console.log("e");
        setTotal(null);
        return;
      }
      console.log(total);
      setTotal(
        String((parseInt(amountRef.current.value) * rates[currency]).toFixed(2))
      );
    }
  };

  useEffect(() => {}, [currency, total]);

  return (
    <section>
      <header>
        <div className={buy.Container}>
          <h1>
            <em>Get DPO tokens via fiat payment</em>
          </h1>
          <div className={buy.currencySelection}>
            <h3>Select Payment Currency</h3>
            <CurrencySelect
              set={setCurrency}
              setScript={setSCriptProviderKey}
            />
          </div>

          <input
            ref={amountRef}
            min={100000}
            onChange={amountInputChange}
            type="number"
            placeholder="Enter amount of tokens"
          />
          {total == null ? (
            <></>
          ) : (
            <p id="total">
              Total ={" "}
              {String(
                (parseInt(amountRef.current!.value) * rates[currency]).toFixed(
                  2
                )
              )}{" "}
              {currency}
            </p>
          )}
          <div className={paypal.paypalButtonContainer}>
            <PayPalScriptProvider
              key={scriptProviderKey}
              options={{
                "client-id": clientId,
                currency: currency,
              }}
            >
              <PayPalButtons
                createOrder={createOrder}
                onClick={() => {
                  purchase_item.purchase_units[0].amount.value= String((parseInt(amountRef.current!.value) * rates[currency]).toFixed(2))
                  console.log(clientId);
                }}
              />
            </PayPalScriptProvider>
          </div>
          <div>
            <hr />
            <small>or</small>
            <hr />
          </div>
          <h2>
            <em>Swap Exchange</em>
          </h2>
          <small>Swap DPO tokens with other tokens and vice versa</small>
          <button>
            <Link href={"https://dpo-swap.vercel.app/"} target="_blank">
              Go To Swap
            </Link>
          </button>
        </div>
      </header>
    </section>
  );
};

export default Section2;
