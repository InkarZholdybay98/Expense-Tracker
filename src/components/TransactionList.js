import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transactionList">
      <div className="history">
        <h3>History</h3>
      </div>

      <ul>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}
