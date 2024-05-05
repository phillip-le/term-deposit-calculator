import { useState, type FC } from "react";
import { TermDepositForm } from "./TermDepositForm";
import { calculateTermDeposit } from "../use-cases/calculateTermDeposit";
import { TermDepositFormSchema } from "./types";

export const TermDepositCalculator: FC = () => {
  const [finalBalance, setFinalBalance] = useState<number | null>(null);
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Term Deposit Calculator</h1>
      <TermDepositForm
        onSubmit={(event) => {
          event.preventDefault();
          setError("");
          try {
            const maybeTermDepositFormData = Object.fromEntries(
              new FormData(event.currentTarget).entries(),
            );

            const termDepositFormData = TermDepositFormSchema.parse(
              maybeTermDepositFormData,
            );

            const calculatedTermDepositFinalBalance = calculateTermDeposit({
              ...termDepositFormData,
              interestRatePerAnnum:
                termDepositFormData.interestRatePerAnnum / 100,
            });

            setFinalBalance(calculatedTermDepositFinalBalance);
          } catch (err) {
            setError("An unexpected error occurred.");
          }
        }}
      />
      {error && <span role="alert">{error}</span>}
      <h2>Final Balance</h2>
      {finalBalance && <p>${finalBalance.toFixed(2)}</p>}
    </div>
  );
};
