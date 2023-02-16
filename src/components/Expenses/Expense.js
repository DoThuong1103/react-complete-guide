import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expense({ expenses }) {
  const [list, setList] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const filterChangehandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangehandler} />
      {list.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          id={expense.id}
          setlist={setList}
        />
      ))}
    </Card>
  );
}

export default Expense;
