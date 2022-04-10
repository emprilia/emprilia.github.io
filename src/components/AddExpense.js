import React from "react";
import AddExpenseForm from "./AddExpenseForm";
import Converter from "./Converter";

export default function AddExpense(props) {
  const {
    onFormSubmit,
    amountRef,
    titleRef,
    onTitleChange,
    onAmountChange,
    currencyOptions,
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    onChangeCurrency,
    handleSwapCurrencies,
    onLostFocus,
    lengthErrorMessage,
    amountErrorMessage,
    disabledButton,
  } = props;

  return (
    <div className="add-expense">
      <div className="converter-row">
        <Converter
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(event) => onChangeCurrency("from", event)}
          amount={fromAmount}
        />
        <p className="equals">=</p>
        <Converter
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(event) => onChangeCurrency("to", event)}
          amount={toAmount}
        />
        <button className="swap-currencies" onClick={handleSwapCurrencies}>
          <p>Swap</p>
        </button>
      </div>
      <AddExpenseForm
        onFormSubmit={onFormSubmit}
        titleRef={titleRef}
        amountRef={amountRef}
        onTitleChange={onTitleChange}
        onAmountChange={onAmountChange}
        onLostFocus={onLostFocus}
        lengthErrorMessage={lengthErrorMessage}
        amountErrorMessage={amountErrorMessage}
        fromCurrency={fromCurrency}
        disabledButton={disabledButton}
      />
    </div>
  );
}
