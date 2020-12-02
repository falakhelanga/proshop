import React, { useContext, useState } from "react";
import { Values } from "../BudgetLayOut";

export default function ExpenseInput() {
  const [incomeName, setIncomeName] = useState("");
  const [incomeValue, setIncomeValue] = useState(0);
  const dispatching = useContext(Values);

  const addIncomeHandler = (e) => {
    e.preventDefault();
    dispatching.dispatching({
      type: 'addIncome',
      name: incomeName,
      value: incomeValue,
    });
    console.log(dispatching.budgetState.incomeArr)
  };

  return (
    <div className="container mt-4 d-block">
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Please enter the income"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
        />
      </div>

      <div className="input-group mt-3">
        <input
          type="number"
          className="form-control"
          aria-label="Dollar amount (with dot and two decimal places)"
          placeholder="please enter the income cost"
          value={incomeValue}
          onChange={(e) => setIncomeValue(e.target.value)}
        />
        <div className="input-group-append">
          <span className="input-group-text">R</span>
          <span className="input-group-text">0.00</span>
        </div>
      </div>
      <button
        type= 'button'
        className="btn btn-block btn-success mt-4"
        onClick={addIncomeHandler}
      >
        Income
      </button>
    </div>
  );
}
