import React, { useContext } from "react";
import IncomeList from "./IncomeList";
import {Values} from "../BudgetLayOut";



export default function IncomeLists() {
    const values = useContext(Values);
    const lists = values.budgetState.incomeArr;
    const listsDom = lists.map((curr) => {
        return <IncomeList name={curr} />;
    });
  return (
    <div className="container mt-5 d-block ">
      <h3 className="text-capitalize text-center">Income list</h3>
      <ul className="list-group list-group-flush w-100 ">{listsDom}</ul>
    </div>
  );
}
