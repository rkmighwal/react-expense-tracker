import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseItems.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpenseItems = (props) => {
  const [filter, setFilter] = useState("2020");

  const onFilterChange = (value) => {
    setFilter(value);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onChange={onFilterChange} value={filter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseItems;
