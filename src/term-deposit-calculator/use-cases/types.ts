export const FREQUENCY_INTEREST_PAID = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  QUARTERLY: "QUARTERLY",
  AT_MATURITY: "AT_MATURITY",
} as const;

export type FrequencyInterestPaid =
  (typeof FREQUENCY_INTEREST_PAID)[keyof typeof FREQUENCY_INTEREST_PAID];

export type CompoundInterestPaidFrequency = Exclude<
  FrequencyInterestPaid,
  "AT_MATURITY"
>;
