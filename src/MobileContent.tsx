import "./styles/MobileContent.css";
import Balances from "./components/Balances";
import Transactions from "./components/Transactions";

export default function MobileContent() {
  return (
    <div className="container">
      <Balances />
      <div className="transactions">
        <h2>Latest Transactions</h2>
        <Transactions />
      </div>
    </div>
  );
}
