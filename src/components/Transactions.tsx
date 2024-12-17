import { useState, useEffect } from "react";
import getTransactions from "../utils/getTransactions";
import { TransactionType } from "../types/json";
import Transaction from "./Transaction";

export default function Transactions() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    getTransactions(undefined).then((result) => {
      if (Array.isArray(result)) {
        setTransactions(result);
      }
    });
  }, []);

  return (
    <div className="transactions">
      <div className="transactions-list">
        {transactions.map((transaction: TransactionType) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </div>
    </div>
  );
}
