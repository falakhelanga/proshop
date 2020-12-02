import React, { useContext, useState } from "react";
import { Values } from "../BudgetLayOut";

export default function ExpenseInput() {
  const [expenseName, setExpense] = useState("");
  const [expenseValue, setexpenseValue] = useState(0);
  const dispatching = useContext(Values);

  const addExpenseHandler = (e) => {
    e.preventDefault();
    dispatching.dispatching({
      type: 'addExpense',
      name: expenseName,
      value: expenseValue,
    });
  };

  return (
    <div className="container mt-4 d-block">
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Please enter the expence"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={expenseName}
          onChange={(e) => setExpense(e.target.value)}
        />
      </div>

      <div className="input-group mt-3">
        <input
          type="number"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          placeholder="please enter the expense cost"
          value={expenseValue}
          onChange={(e) => setexpenseValue(e.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">R</span>
          <span className="input-group-text">0.00</span>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-block btn-danger mt-4"
        onClick={addExpenseHandler}
      >
        Expence
      </button>
    </div>
  );
}
