import type { CompoundInterestPaidFrequency } from "./types";

export const frequencyPerYearFromCompoundInterestPaidFrequency: Record<
	CompoundInterestPaidFrequency,
	number
> = {
	YEARLY: 1,
	MONTHLY: 12,
	QUARTERLY: 4,
} as const;
