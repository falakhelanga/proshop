import React, { useContext } from "react";
import "./budgetdisplay.css";
import { Values } from "../BudgetLayOut";

export default function BudgetDisplay() {
  const values = useContext(Values);

  return (
    <div className="container">
      <div className="total innerDiv text-primary">
        <p>Balance</p>
        <p>R {values.budgetState.balance}</p>
      </div>
      <div className="income innerDiv text-success">
        <p>Income</p>
        <p>R {values.budgetState.income}</p>
      </div>
      <div className="expence innerDiv text-danger ">
        <p className={"text-primar"}>Expence</p>
        <p>R {values.budgetState.expence}</p>
      </div>
    </div>
  );
}
