import { describe, expect, it } from "vitest";
import { calculateCompoundInterestIncludingPrincipal } from "./calculateCompoundInterestIncludingPrincipal";

const DIGITS_TO_COMPARE = 2;

describe("calculateCompoundInterestIncludingPrincipal", () => {
	it.each([
		{
			label: "monthly",
			frequencyInterestPaidPerYear: 12,
			expectedResult: 16_470.09,
		},
		{
			label: "yearly",
			frequencyInterestPaidPerYear: 1,
			expectedResult: 16288.95,
		},
		{
			label: "quarterly",
			frequencyInterestPaidPerYear: 4,
			expectedResult: 16436.19,
		},
	])(
		"should calculate compound interest including principal when interest is paid $label",
		({ frequencyInterestPaidPerYear, expectedResult }) => {
			const result = calculateCompoundInterestIncludingPrincipal({
				principal: 10_000,
				interestRatePerAnnum: 0.05,
				frequencyInterestPaidPerYear,
				investmentTermInYears: 10,
			});

			expect(result).toBeCloseTo(expectedResult, DIGITS_TO_COMPARE);
		},
	);

	it("should calculate compound interest with principal when investment term is 0 years", () => {
		const result = calculateCompoundInterestIncludingPrincipal({
			principal: 10_000,
			investmentTermInYears: 0,
			frequencyInterestPaidPerYear: 12,
			interestRatePerAnnum: 0.011,
		});

		expect(result).toEqual(10_000);
	});

	it("should calculate compound interest with principal when principal is 0", () => {
		const result = calculateCompoundInterestIncludingPrincipal({
			principal: 0,
			investmentTermInYears: 3,
			frequencyInterestPaidPerYear: 12,
			interestRatePerAnnum: 0.011,
		});

		expect(result).toEqual(0);
	});

	it("should calculate compound interest with principal when interest rate is 0", () => {
		const result = calculateCompoundInterestIncludingPrincipal({
			principal: 10_000,
			investmentTermInYears: 3,
			frequencyInterestPaidPerYear: 12,
			interestRatePerAnnum: 0,
		});

		expect(result).toEqual(10_000);
	});

	it("should calculate compound interest with principal when frequency interest is paid is 0", () => {
		const result = calculateCompoundInterestIncludingPrincipal({
			principal: 10_000,
			investmentTermInYears: 3,
			frequencyInterestPaidPerYear: 0,
			interestRatePerAnnum: 0.05,
		});

		expect(result).toEqual(10_000);
	});

	it("should throw an error when principal is negative", () => {
		expect(() =>
			calculateCompoundInterestIncludingPrincipal({
				principal: -10_000,
				investmentTermInYears: 3,
				frequencyInterestPaidPerYear: 12,
				interestRatePerAnnum: 0.011,
			}),
		).toThrow("Principal is negative.");
	});

	it("should throw an error when investment term is negative", () => {
		expect(() =>
			calculateCompoundInterestIncludingPrincipal({
				principal: 10_000,
				investmentTermInYears: -3,
				frequencyInterestPaidPerYear: 12,
				interestRatePerAnnum: 0.011,
			}),
		).toThrow("Investment term is negative.");
	});

	it("should throw an error when interest rate is negative", () => {
		expect(() =>
			calculateCompoundInterestIncludingPrincipal({
				principal: 10_000,
				investmentTermInYears: 3,
				frequencyInterestPaidPerYear: 12,
				interestRatePerAnnum: -0.011,
			}),
		).toThrow("Interest rate is negative.");
	});

	it("should throw an error when interest paid frequency is negative", () => {
		expect(() =>
			calculateCompoundInterestIncludingPrincipal({
				principal: 10_000,
				investmentTermInYears: 3,
				frequencyInterestPaidPerYear: -12,
				interestRatePerAnnum: 0.05,
			}),
		).toThrow("Interest paid frequency is paid is negative.");
	});
});
