import React from "react";

export default function AddExpenseForm(props) {
  const {
    onFormSubmit,
    titleRef,
    amountRef,
    fromCurrency,
    onTitleChange,
    lengthErrorMessage,
  } = props;

  return (
    <form onSubmit={onFormSubmit} className="add-expense-form">
      <div className="add-expense-inputs">
        <input
          ref={titleRef}
          onChange={onTitleChange}
          placeholder="Title"
          minLength={5}
          required
        />
        <p className="length-error">{lengthErrorMessage}</p>
        <input
          type="number"
          ref={amountRef}
          placeholder={`Amount (in ${fromCurrency})`}
          step="any"
          min="0"
          required
        />
      </div>
      <button type="submit" className="add-expense-button">
        <p>Add expense</p>
      </button>
    </form>
  );
}
