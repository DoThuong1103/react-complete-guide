import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
function Expense({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
}

export default Expense;
