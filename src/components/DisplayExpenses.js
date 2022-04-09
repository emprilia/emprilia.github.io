import React from "react";
import ExpensesTable from "./ExpensesTable";
import Summary from "./Summary";

export default function DisplayExpenses(props) {
  const {
    allExpenses,
    fromCurrency,
    toCurrency,
    exchangeRate,
    total,
    convertedTotal,
    deleteTableRows,
  } = props;

  return (
    <div className="display-expenses-wrap">
      {!allExpenses ? (
        <p className="empty-table-text">
          Add your first expense above. Let's get started!
        </p>
      ) : (
        <ExpensesTable
          allExpenses={allExpenses}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          deleteTableRows={deleteTableRows}
          exchangeRate={exchangeRate}
        />
      )}
      <Summary
        total={total}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedTotal={convertedTotal}
      />
    </div>
  );
}
