import React from "react";

export default function Converter(props) {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount } = props;
  return (
    <div className="exchange-rate-info">
      <p className="exchange-rate-info-amount">{amount}</p>
      <label className="1">
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
