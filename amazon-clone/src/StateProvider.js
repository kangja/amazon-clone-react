import React, { crateContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const StateProvier = ({ rudcuer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
