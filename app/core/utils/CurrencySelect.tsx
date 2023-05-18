import React, {  useState } from "react";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { Radio } from "antd";


const currency_options: (string | number | CheckboxOptionType)[] | undefined = [

  { label: "USD", value: "USD" },
  { label: "CAD", value: "CAD" },
  { label: "EUR", value: "EUR" },
  { label: "BRL", value: "BRL" },
  { label: "CZK", value: "CZK" },
  { label: "AUD", value: "AUD" },
];


interface Props{
    set:React.Dispatch<React.SetStateAction<string>>;
}

const CurrencySelect = () => {
    const [val,setVal]=useState(window.sessionStorage.getItem('currency'));

  

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    setVal(value)
    window.sessionStorage.setItem('currency',value)
    window.location.reload()
  };

  return (
    <>
    
      <Radio.Group
        options={currency_options}
        onChange={onChange4}
        value={val}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};


export default CurrencySelect;
