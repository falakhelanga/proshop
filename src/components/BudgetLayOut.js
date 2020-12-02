import React, { useReducer } from "react";
import BudgetDisplay from "./display/BudgetDisplay";
import IncomeInput from "./income/IncomeInput";
import ExpenseInput from "./expense/ExpenseInput";
import IncomeLists from "./income/IncomeLists";
import ExpenseLists from "./expense/ExpenseLists";
import Clear from "./clear/Clear";

export const Values = React.createContext();

export default function BudgetLayOut() {
  const initialState = {
    income:0,
    expence: 0,
    balance: 0,
    incomeArr: [],
    expenceArr: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'addIncome':
        return {
          ...state,
          income: state.income + +action.value,
          balance: state.balance + +action.value,
          incomeArr: [...state.incomeArr, action.name],
        };

        
        case 'addExpense' : return {
            ...state,
            expence: state.expence + +action.value,
            balance: state.balance - +action.value,
            expenceArr: [...state.expenceArr,action.name]
        }

        case 'clear' : return {
            ...state,
            income: 0,
            expence: 0,
            balance: 0,
            incomeArr: [],
            expenceArr: [],
        }

        default : return state;

    }
  };

  const [BudgetState, dispatch] = useReducer(reducer, initialState);

  

  return (
    <Values.Provider value= {{ budgetState: BudgetState, dispatching: dispatch }} >
      <div>
        <BudgetDisplay />
        <IncomeInput />
        <ExpenseInput />
        <IncomeLists />
        <ExpenseLists />
        <Clear />
      </div>

    </Values.Provider>
   
  );
}
