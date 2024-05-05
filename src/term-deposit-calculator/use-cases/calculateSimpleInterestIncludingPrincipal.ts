export const calculateSimpleInterestIncludingPrincipal = ({
  principal,
  interestRatePerAnnum,
  investmentTermInYears,
}: {
  principal: number;
  interestRatePerAnnum: number;
  investmentTermInYears: number;
}) => {
  if (principal < 0) {
    throw new Error("Principal is negative.");
  }
  if (interestRatePerAnnum < 0) {
    throw new Error("Interest rate is negative.");
  }
  if (investmentTermInYears < 0) {
    throw new Error("Investment term is negative.");
  }
  return principal + principal * interestRatePerAnnum * investmentTermInYears;
};
