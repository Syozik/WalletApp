import { TransactionType } from "../types/json";

export default function getTransactions(id?: number): Promise<TransactionType[] | TransactionType> {
  return fetch("../../public/transactions.json")
    .then((response) => response.json())
    .then((data) => {
      const transactions = data.transactions;

      if (id !== undefined) {
        return transactions.find((transaction: TransactionType) => transaction.id === id);
      }

      const sortedTransactions = transactions.sort((a: TransactionType, b: TransactionType) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      return sortedTransactions.slice(0, 10);
    })
    .catch((error) => {
      console.error("Error fetching transactions:", error);
      return [];
    });
}
