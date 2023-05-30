import React, { useEffect, useState } from "react";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { Radio } from "antd";

const currency_options: (string | number | CheckboxOptionType)[] | undefined = [
  { label: "USD", value: "USD" },
  { label: "CAD", value: "CAD" },
  { label: "EUR", value: "EUR" },
  { label: "GBP", value: "GBP" },

];

interface Props {
  set: React.Dispatch<React.SetStateAction<string>>;
  setScript:React.Dispatch<React.SetStateAction<number>>;
}

const CurrencySelect = ({set,setScript}:Props) => {
  const [val, setVal] = useState("USD");



  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    set(value)
    setVal(value);
    setScript(prev=>prev + 1)

    
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
