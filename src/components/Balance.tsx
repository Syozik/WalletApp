import { getBalance } from "../utils/getBalance";

export default function Balance() {
  const balance = getBalance();
  const limit = 1500 - balance;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div id="balance">
      <div>Card Balance</div>
      <div style={{ fontSize: "25px", fontWeight: "bold" }}>
        ${formatCurrency(balance)}
      </div>
      <div style={{ color: "grey" }}>
        {limit < 0
          ? `-$${formatCurrency(Math.abs(limit))}`
          : `$${formatCurrency(limit)} Available`}
      </div>
    </div>
  );
}
