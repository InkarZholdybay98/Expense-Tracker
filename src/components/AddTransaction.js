import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addFn } = useContext(GlobalContext);

  function addTransaction(e) {
    e.preventDefault();

    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: +amount,
    };

    addFn(newTransaction);

    setText("");
    setAmount(0);
  }

  return (
    <div className="containerAddTransaction">
      <h3>Add new transaction</h3>
      <form onSubmit={addTransaction}>
        <div className="text">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            required
            placeholder="Type..."
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            required
            placeholder="Type..."
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button>Add new transaction</button>
      </form>
    </div>
  );
}
