export const calculateCompoundInterestIncludingPrincipal = ({
  principal,
  interestRatePerAnnum,
  frequencyInterestPaidPerYear,
  investmentTermInYears,
}: {
  principal: number;
  interestRatePerAnnum: number;
  frequencyInterestPaidPerYear: number;
  investmentTermInYears: number;
}) => {
  if (principal < 0) {
    throw new Error("Principal is negative.");
  }

  if (interestRatePerAnnum < 0) {
    throw new Error("Interest rate is negative.");
  }

  if (frequencyInterestPaidPerYear < 0) {
    throw new Error("Interest paid frequency is paid is negative.");
  }

  if (investmentTermInYears < 0) {
    throw new Error("Investment term is negative.");
  }

  return (
    principal *
    (1 + interestRatePerAnnum / frequencyInterestPaidPerYear) **
      (frequencyInterestPaidPerYear * investmentTermInYears)
  );
};
