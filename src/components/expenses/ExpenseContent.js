import React from "react";

import Expense from "./Expense";
import "./ExpenseContent.css";

const ExpenseContent = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Content Found!! </h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></Expense>
      ))}
    </ul>
  );
};

export default ExpenseContent;
