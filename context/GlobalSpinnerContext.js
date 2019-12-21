import React, { useState, createContext, useContext } from "react";

const GlobalSpinnerContext = createContext();
const GlobalSpinnerActionsContext = createContext();

/* eslint-disable */
const useContextFactory = (name, context) => {
  return () => {
    const ctx = useContext(context);
    // Context Provider の外で Context を利用した場合エラーを出力する
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`
      );
    }
    return ctx;
  };
};

export const useGlobalSpinnerContext = useContextFactory(
  "GlobalSpinnerContext",
  GlobalSpinnerContext
);
export const useGlobalSpinnerActionsContext = useContextFactory(
  "GlobalSpinnerActionsContext",
  GlobalSpinnerActionsContext
);

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
