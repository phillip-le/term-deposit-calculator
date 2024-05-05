import { z } from "zod";

export const TermDepositFormSchema = z.object({
	principal: z.string().pipe(z.coerce.number()),
	interestRatePerAnnum: z.string().pipe(z.coerce.number()),
	investmentTermInYears: z.string().pipe(z.coerce.number()),
	frequencyInterestPaid: z.enum([
		"MONTHLY",
		"YEARLY",
		"QUARTERLY",
		"AT_MATURITY",
	]),
});
