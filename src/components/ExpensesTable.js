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
              <>
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
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

//                 </tr>
//         </tbody>
//       </table>
//     </form>
//     <div className="display-expenses-table-wrap">
//       <table className="display-expenses-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>{fromCurrency}</th>
//             <th>{toCurrency}</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {allExpenses.map((expense, key) => (
//             <tr key={key}>
//               <td className="expense-title">{expense.title}</td>
//               <td>{expense.amount}</td>
//               <td>{expense.convertedAmount}</td>
//               <td>
//                 <button
//                   className="delete-expenses-button"
//                   onClick={() => onDeleteClick(expense.id)}
//                 >
//                   <p>X</p>
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
