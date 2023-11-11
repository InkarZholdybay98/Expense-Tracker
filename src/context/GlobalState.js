import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addFn(transaction) {
    dispatch({
      type: "add_action",
      payload: transaction,
    });
  }

  function deleteFn(id) {
    dispatch({
      type: "delete_action",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addFn, deleteFn }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
