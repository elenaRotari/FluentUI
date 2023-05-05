import { createContext, useReducer } from "react";
import { reducer } from "./reducer/reducer.js";

export const ExampleContext = createContext();

function MyContext({ children }) {
  const data = useReducer(reducer, []);
  return (
    <ExampleContext.Provider value={data}>{children}</ExampleContext.Provider>
  );
}

export default MyContext;
