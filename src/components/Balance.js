import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);

  return (
    <div>
      <h5 className="yourBalance">Your Balance</h5>
      <h1 className="balanceNumber">${balance}</h1>
    </div>
  );
}
