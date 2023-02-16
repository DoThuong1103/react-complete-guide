import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  const [valueTitle, setValueTitle] = useState();
  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    return setTitle(valueTitle);
  };
  const handleDelete = (id) => {
    props.setlist((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div>
        <button onClick={handleClick}>Change</button>
        <input
          type="text"
          onChange={(e) => {
            setValueTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={() => handleDelete(props.id)}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
