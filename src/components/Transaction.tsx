import { useNavigate } from "react-router-dom";
import { TransactionType } from "../types/json";
import "../styles/Transaction.css";

const CUSTOM_ICON_MAP: { [key: string]: string } = {
  ikea: "fa-solid fa-shopping-cart",
  netflix: "fa-solid fa-tv",
  spotify: "fa-solid fa-music",
  apple: "fab fa-apple",
  payment: "fa-solid fa-credit-card",
  facebook: "fab fa-facebook",
  mcdonalds: "fa-solid fa-burger",
  null: "fab fa-question",
};

function formatDate(dateStr: string): string {
  const currentDate = new Date();
  const inputDate = new Date(dateStr);

  const diffTime = currentDate.getTime() - inputDate.getTime();
  const diffDays = diffTime / (1000 * 3600 * 24);
  if (diffDays >= 0 && diffDays <= 7) {
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    return inputDate.toLocaleDateString("en-US", options);
  } else {
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");
    const year = inputDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
}

export default function Transaction(props: { transaction: TransactionType }) {
  const navigate = useNavigate();
  const iconClassName =
    CUSTOM_ICON_MAP[props.transaction.icon || "null"] || "fab fa-question";

  const formattedDate = formatDate(props.transaction.date);

  const handleRedirect = () => {
    navigate(`/transaction/${props.transaction.id}`);
  };

  return (
    <div className="transaction" onClick={handleRedirect}>
      <div className="transaction-icon">
        <i className={iconClassName}></i>
      </div>
      <div className="transaction-info">
        <div className="transaction-name">
          {props.transaction.transactionName}
        </div>
        <div className="transaction-description">
          {props.transaction.pending && "Pending - "}
          {props.transaction.description}
        </div>
        <div className="transaction-name-date">
          {props.transaction.person
            ? props.transaction.person + " - " + formattedDate
            : formattedDate}
        </div>
      </div>

      <div className="amount">
        <div className="amount-value">
          {props.transaction.type === "payment" ? "+$" : "$"}
          {props.transaction.amount}
        </div>
        <button className="arrow-button">
          {">"}
        </button>
      </div>
    </div>
  );
}
