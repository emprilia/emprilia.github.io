import React from "react";
import saveIcon from "../images/save-icon.ico";
import cancelIcon from "../images/cancel-icon.ico";

export default function EditExpenses(props) {
  const { expense, onEditFormChange, onCancelClick } = props;
  return (
    <tr>
      <td className="edit-td">
        <input
          className="edit-input title"
          type="text"
          required
          name="title"
          defaultValue={expense.title}
          onChange={onEditFormChange}
          minLength={5}
        />
      </td>
      <td className="edit-td">
        <input
          className="edit-input amount"
          type="number"
          required
          name="amount"
          step="any"
          min="0"
          defaultValue={expense.amount}
          onChange={onEditFormChange}
        />
      </td>
      <td>{expense.convertedAmount}</td>
      <td className="table-buttons">
        <div className="action-buttons">
          <button className="save-edit-button" type="submit">
            <img src={saveIcon} alt="edit-field" />
          </button>
          <button className="cancel-edit-button" onClick={onCancelClick}>
            <img src={cancelIcon} alt="edit-field" />
          </button>
        </div>
      </td>
    </tr>
  );
}
