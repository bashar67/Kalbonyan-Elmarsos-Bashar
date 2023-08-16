import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isadding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const addingHnnler = () => {
    setIsAdding(true);
  };

  const hideFormHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {!isadding && <button onClick={addingHnnler}>Add New Expense</button>}
      {isadding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
