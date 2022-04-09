import React from "react";

export default function ExpensesTable(props) {
  const { allExpenses, toCurrency, fromCurrency, deleteTableRows } = props;

  return (
    <div className="display-expenses-table-wrap">
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
          {allExpenses.map((expense, key) => (
            <tr key={key}>
              <td className="expense-title">{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.convertedAmount}</td>
              <td>
                <button
                  className="delete-expenses-button"
                  onClick={() => deleteTableRows(expense.id)}
                >
                  <p>X</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
