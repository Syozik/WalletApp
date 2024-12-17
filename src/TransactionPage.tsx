import { useParams } from "react-router-dom";
import getTransactions from "./utils/getTransactions";
import { useNavigate } from "react-router-dom";
import { TransactionType } from "./types/json";
import { useState, useEffect } from "react";
import "./styles/TransactionPage.css";

function formatDate(dateStr: string): string {
  const inputDate = new Date(dateStr);

  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");
  const year = inputDate.getFullYear();
  return `${month}/${day}/${year}`;
}

export default function TransactionPage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<TransactionType | null>(null);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getTransactions(Number(id)).then((result) => {
      if (!Array.isArray(result)) {
        setTransaction(result);
      }
    });
  }, [id]);

  return (
    <>
      {transaction && (
        <div id="transaction-page">
          <button id="back-button" onClick={handleBack}>
            {" "}
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div id="transaction-page-header">
            <h1 className="transaction-page-amount">${transaction.amount}</h1>
            <div className="transaction-page-name">
              <p>{transaction.transactionName}</p>
            </div>
            <div className="transaction-page-date">
              <p>{formatDate(transaction.date)}</p>
            </div>
          </div>
          <div id="transaction-page-details">
            <div className="transaction-page-status">
              <div className="transaction-page-status-text">
                Status: {transaction.pending ? "Pending" : "Approved"}
              </div>
              <div className="transaction-page-description">
                {transaction.description}
                {transaction.person && (
                  <p className="transaction-page-person">
                    &nbsp;by {transaction.person}
                  </p>
                )}
              </div>
            </div>
            <div id="total">
              Total: <p id="total-amount">${transaction.amount}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
