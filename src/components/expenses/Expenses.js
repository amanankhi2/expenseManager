import React, { useState } from "react";
import Card from "../ui/Card";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseContent from "./ExpenseContent";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setSelectedFilter] = useState("2021");

  const filteredValueHandler = (filteredValue) => {
    setSelectedFilter(filteredValue);
  };

  const fitleredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={fitleredExpenses} />
      <ExpensesFilter
        selected={filteredYear}
        onExpensesFilterChange={filteredValueHandler}
      />
      <ExpenseContent items={fitleredExpenses} />
    </Card>
  );
};

export default Expenses;
