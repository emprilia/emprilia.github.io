import React from "react";
import EditExpenses from "./EditExpenses";
import ReadOnlyExpenses from "./ReadOnlyExpenses";

export default function ExpensesTable(props) {
  const {
    allExpenses,
    toCurrency,
    fromCurrency,
    onEditClick,
    editExpenseId,
    onEditFormChange,
    onEditFormSubmit,
    onCancelClick,
    onDeleteClick,
  } = props;

  return (
    <div className="display-expenses-table-wrap">
      <form onSubmit={onEditFormSubmit}>
        <table className="display-expenses-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>{fromCurrency}</th>
              <th>{toCurrency}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allExpenses.map((expense) => (
              <React.Fragment key={expense.id}>
                {editExpenseId === expense.id ? (
                  <EditExpenses
                    expense={expense}
                    onEditFormChange={onEditFormChange}
                    onCancelClick={onCancelClick}
                  />
                ) : (
                  <ReadOnlyExpenses
                    expense={expense}
                    onEditClick={onEditClick}
                    onDeleteClick={onDeleteClick}
                  />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
