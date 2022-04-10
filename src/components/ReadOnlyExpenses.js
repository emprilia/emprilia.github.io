import React from "react";
import editIcon from "../images/edit-icon.ico";
import removeIcon from "../images/remove-icon.ico";

export default function ReadOnlyExpenses(props) {
  const { expense, onEditClick, onDeleteClick } = props;
  return (
    <tr key={expense.id}>
      <td className="expense-title">{expense.title}</td>
      <td className="expense-amount">{expense.amount}</td>
      <td className="expense-amount">{expense.convertedAmount}</td>
      <td className="table-buttons">
        <div className="action-buttons">
          <button
            className="edit-expenses-button"
            onClick={(event) => onEditClick(event, expense)}
          >
            <img src={editIcon} alt="edit-row" />
          </button>
          <button
            className="delete-expenses-button"
            onClick={() => onDeleteClick(expense.id)}
          >
            <img src={removeIcon} alt="delete-field" />
          </button>
        </div>
      </td>
    </tr>
  );
}
