import "./Newexpense.css";

import { useState } from "react";
import NewexpenseForm from "./NewexpenseForm";

function Newexpense(props) {
  const newExpenseSubmitHandler = (newSavedExpense) => {
    const newExpense = {
      ...newSavedExpense,
      id: Math.random().toString(),
    };

    props.onNewExpenseSave(newExpense);
    closeExpenseHandler();
  };

  const [addExpenseForm, setExpenseForm] = useState(false);

  const addExpenseHandler = () => {
    return setExpenseForm(true);
  };

  const closeExpenseHandler = () => {
    return setExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!addExpenseForm && (
        <button type="button" onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
      {addExpenseForm && (
        <NewexpenseForm
          formState={closeExpenseHandler}
          onNewExpenseSubmit={newExpenseSubmitHandler}
        />
      )}
    </div>
  );
}

export default Newexpense;
