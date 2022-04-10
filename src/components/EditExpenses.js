import React from "react";
import saveIcon from "./save-icon.ico";
import cancelIcon from "./cancel-icon.ico";

export default function EditExpenses(props) {
  const { expense, onEditFormChange, editFormData, onCancelClick } = props;
  return (
    <tr>
      <td className="edit-td">
        <input
          className="edit-input"
          type="text"
          required
          name="title"
          defaultValue={editFormData.title}
          onChange={onEditFormChange}
          minLength={5}
        />
      </td>
      <td className="edit-td">
        <input
          className="edit-input"
          type="number"
          required
          name="amount"
          step="any"
          min="0"
          defaultValue={editFormData.amount}
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
