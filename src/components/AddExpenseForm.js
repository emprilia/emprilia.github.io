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
    disabledButton,
  } = props;

  return (
    <form onSubmit={onFormSubmit} className="add-expense-form">
      <div className="add-expense-inputs">
        <input
          ref={titleRef}
          onChange={onTitleChange}
          onBlur={() => onLostFocus("title")}
          placeholder="Title"
          minLength={5}
          required
        />
        <p className="length-error">{lengthErrorMessage}</p>
        <input
          type="text"
          ref={amountRef}
          onChange={onAmountChange}
          onBlur={() => onLostFocus("amount")}
          placeholder={`Amount (in ${fromCurrency})`}
          step="any"
          min="0"
          required
        />
        <p className="length-error">{amountErrorMessage}</p>
      </div>
      <button
        type="submit"
        className="add-expense-button"
        disabled={disabledButton}
      >
        <p>Add expense</p>
      </button>
    </form>
  );
}
