import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onSaveHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    closeFormHandler(); // Close form
  };

  const openFormHandler = () => {
    setShowForm(true);
  };
  
  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <Card className="new-expense">
      {!showForm && <button type="button" onClick={openFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onSave={onSaveHandler} onCancel={closeFormHandler} />}
    </Card>
  );
};

export default NewExpense;
