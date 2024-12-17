export default function Payment() {

  const paymentPaid = true;
  return (
    <div id="payment">
      <div>{paymentPaid ? "No Payment Due" : "Payment Due"}</div>
      <div style={{ color: "grey" }}>
        {paymentPaid
          ? "You've paid your September balance."
          : "You haven't paid your previous month balance yet."}
      </div>
      {paymentPaid ? (
        <i className="fa-solid fa-check payment-icon"></i>
      ) : (
        <i className="fa-solid fa-times payment-icon"></i>
      )}
    </div>
  );
}
