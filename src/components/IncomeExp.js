import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExp() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((x, y) => x + y, 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((x, y) => x + y, 0) * -1
  ).toFixed(2);

  return (
    <div className="container">
      <div className="income">
        <h3>Income</h3>
        <h4>+${income}</h4>
      </div>

      <div className="expense">
        <h3>Expense</h3>
        <h4>-${expense}</h4>
      </div>
    </div>
  );
}
