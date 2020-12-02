import React from "react";
import { Values } from "../../src/components/BudgetLayOut";

const withMethods = (OriginalComponent) => {
  
  const newComponent = () => {
    return <OriginalComponent />;
  };

  return newComponent;
};

export default withMethods
