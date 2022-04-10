import React from "react";

export default function AddExpenseForm(props) {
  const {
    onFormSubmit,
    titleRef,
    amountRef,
    fromCurrency,
    onTitleChange,
    onAmountChange,
    onLostFocus,
    lengthErrorMessage,
    amountErrorMessage,
  } = props;

  return (
    <form onSubmit={onFormSubmit} className="add-expense-form">
      <div className="add-expense-inputs">
        <input
          ref={titleRef}
          onChange={onTitleChange}
          onBlur={onLostFocus}
          placeholder="Title"
          minLength={5}
          required
        />
        <p className="error">{lengthErrorMessage}</p>
        <input
          type="number"
          ref={amountRef}
          onChange={onAmountChange}
          placeholder={`Amount (in ${fromCurrency})`}
          step="any"
          min="0"
          required
        />
        <p className="error">{amountErrorMessage}</p>
      </div>
      <button type="submit" className="add-expense-button">
        <p>Add expense</p>
      </button>
    </form>
  );
}
