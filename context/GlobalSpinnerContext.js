import React, { useState, createContext } from "react";

export const GlobalSpinnerContext = createContext();
export const GlobalSpinnerActionsContext = createContext();

const GlobalSpinnerContextProvider = props => {
  const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);

  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinnerOn}>
      <GlobalSpinnerActionsContext.Provider value={setGlobalSpinner}>
        {props.children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export default GlobalSpinnerContextProvider;
