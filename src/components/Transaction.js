import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
  const sign = transaction.amount > 0 ? "+" : "-";

  const { deleteFn } = useContext(GlobalContext);

  return (
    <li>
      <h4>{transaction.text}</h4>
      <h4>
        {sign}${Math.abs(transaction.amount)}
      </h4>
      <button onClick={() => deleteFn(transaction.id)}>delete</button>
    </li>
  );
}
