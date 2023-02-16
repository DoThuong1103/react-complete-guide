import React, { useState } from "react";
import "./ExpensesForm.css";
const ExpensesForm = (props) => {
  // const [enteredTitle, SetEnteredTitle] = useState("");
  // const [enteredAmount, SetEnteredAmount] = useState("");
  // const [enteredDate, SetEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandle = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredTitle: e.target.value,
      };
    });
  };
  const amountChangeHandle = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangeHandle = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        enteredDate: e.target.value,
      };
    });
  };
  const subMitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });

    props.onSaveExpenseData(expenseData);
  };
  return (
    <form onSubmit={subMitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandle}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2020-1-1"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;
