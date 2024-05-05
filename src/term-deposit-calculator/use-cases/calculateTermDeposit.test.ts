import { describe, expect, it } from "vitest";
import { calculateTermDeposit } from "./calculateTermDeposit";
import { FREQUENCY_INTEREST_PAID } from "./types";

const DIGITS_TO_COMPARE = 2;

describe("calculateTermDeposit", () => {
	it("should calculate using simple interest when interest is paid at maturity", () => {
		const result = calculateTermDeposit({
			principal: 10_000,
			frequencyInterestPaid: "AT_MATURITY",
			interestRatePerAnnum: 0.05,
			investmentTermInYears: 3,
		});

		expect(result).toEqual(11_500);
	});

	it.each([
		{
			frequencyInterestPaid: FREQUENCY_INTEREST_PAID.MONTHLY,
			expectedResult: 11_614.72,
		},
		{
			frequencyInterestPaid: FREQUENCY_INTEREST_PAID.YEARLY,
			expectedResult: 11_576.25,
		},
		{
			frequencyInterestPaid: FREQUENCY_INTEREST_PAID.QUARTERLY,
			expectedResult: 11607.55,
		},
	])(
		"should calculate using compound interest when interest is paid $frequencyInterestPaid",
		({ frequencyInterestPaid, expectedResult }) => {
			const result = calculateTermDeposit({
				principal: 10_000,
				frequencyInterestPaid,
				interestRatePerAnnum: 0.05,
				investmentTermInYears: 3,
			});

			expect(result).toBeCloseTo(expectedResult, DIGITS_TO_COMPARE);
		},
	);
});
