import React, { useState } from "react";
import type { CheckboxOptionType, RadioChangeEvent } from "antd";
import { Radio } from "antd";

const options: (string | number | CheckboxOptionType)[] | undefined = [

  { label: "USD", value: "USD" },
  { label: "CAD", value: "CAD" },
  { label: "EUR", value: "EUR" },
  { label: "BRL", value: "BRL" },
  { label: "CZK", value: "CZK" },
  { label: "AUD", value: "AUD" },
  { label: "DHK", value: "DHK" },
];

const CurrencySelect: React.FC = () => {
  const [value4, setValue4] = useState("Apple");

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value);
  };

  return (
    <>
    
      <Radio.Group
        options={options}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default CurrencySelect;
