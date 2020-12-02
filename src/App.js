import React, { Fragment } from "react";
import BudgetLayOut from "./components/BudgetLayOut";
import "./app.css";

function App() {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <BudgetLayOut />
      </div>
    </React.Fragment>
  );
}

export default App;
