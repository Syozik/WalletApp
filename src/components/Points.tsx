import { getPoints } from "../utils/getPoints";
import "../styles/Points.css";

function formatPoints(points: number): string {
  if (points > 1000000) {
    return (
      new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
      }).format(points / 1000000) + "M"
    );
  } else if (points > 1000) {
    return (
      new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
      }).format(points / 1000) + "K"
    );
  }
  return Intl.NumberFormat("en-US").format(points);
}

export default function Points(): JSX.Element {
  return (
    <div id="points">
      <div>Daily Points</div>
      <div style={{ color: "grey" }}>{formatPoints(getPoints())}</div>
    </div>
  );
}
