import "./App.css";

import React, { useState } from "react";
import Newexpense from "./components/newexpense/Newexpense";
import Expenses from "./components/expenses/Expenses";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const newExpenseDataHandler = (newSavedDate) => {
    setExpenses((previousData) => {
      return [newSavedDate, ...previousData];
    });
  };
  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <Newexpense onNewExpenseSave={newExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
