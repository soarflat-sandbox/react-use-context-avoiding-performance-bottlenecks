import React, { useContext } from "react";
import "./globalSpinner.css";
import { GlobalSpinnerContext } from "../../context/GlobalSpinnerContext";

const GlobalSpinner = props => {
  const { isGlobalSpinnerOn } = useContext(GlobalSpinnerContext);
  return isGlobalSpinnerOn ? (
    <div className="global-spinner-overlay">
      <p>Loading...</p>
    </div>
  ) : null;
};

export default GlobalSpinner;
