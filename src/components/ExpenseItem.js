import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem({ title, amount, date }) {
  //   const expenseDate = new Date(2021, 2, 28);
  //   const expenseTitle = "Car Insruance";
  //   const expenseAmount = 267.98;
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
