import React, { createContext, useReducer } from "react";
import { initialState, rootReducer } from "../reducers";

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <StoreContext.Provider>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
