import React from "react";

export default function Summary(props) {
  const { total, convertedTotal, fromCurrency, toCurrency } = props;
  return (
    <div className="total-sum-wrap">
      <p className="total-sum-title">Total:</p>
      <p className="total-sum">
        {total} {fromCurrency} ({convertedTotal} {toCurrency})
      </p>
    </div>
  );
}
