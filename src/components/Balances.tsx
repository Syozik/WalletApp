import Balance from "./Balance";
import Points from "./Points";
import Payment from "./Payment";

export default function Balances() {
  return (
    <div className="balances">
      <Balance />
      <Points />
      <Payment />
    </div>
  );
}
