import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import { Values } from "../BudgetLayOut";

export default function ExpenseLists() {
  const Lists = useContext(Values);
  const ListsDom = Lists.budgetState.expenceArr;
  const mapedLists = ListsDom.map((curr) => {
    return <ExpenseList name={curr} />;
  });

  return (
    <div>
      <div className="container mt-5 d-block ">
        <h3 className="text-capitalize text-center">Expence list</h3>
        <ul className="list-group list-group-flush w-100 ">
            {mapedLists}
        </ul>
      </div>
    </div>
  );
}
