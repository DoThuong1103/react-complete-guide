import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
function Expense({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default Expense;
