import { describe, expect, it } from "vitest";
import { calculateSimpleInterestIncludingPrincipal } from "./calculateSimpleInterestIncludingPrincipal";

describe("calculateSimpleInterestIncludingPrincipal", () => {
  it("should calculate simple interest with principal when arguments are all positive numbers", () => {
    const result = calculateSimpleInterestIncludingPrincipal({
      principal: 10_000,
      investmentTermInYears: 3,
      interestRatePerAnnum: 0.011,
    });

    expect(result).toEqual(10_330);
  });

  it("should calculate simple interest with principal when investment term is 0 years", () => {
    const result = calculateSimpleInterestIncludingPrincipal({
      principal: 10_000,
      investmentTermInYears: 0,
      interestRatePerAnnum: 0.011,
    });

    expect(result).toEqual(10_000);
  });

  it("should calculate simple interest with principal when principal is 0", () => {
    const result = calculateSimpleInterestIncludingPrincipal({
      principal: 0,
      investmentTermInYears: 3,
      interestRatePerAnnum: 0.011,
    });

    expect(result).toEqual(0);
  });

  it("should calculate simple interest with principal when interest rate is 0", () => {
    const result = calculateSimpleInterestIncludingPrincipal({
      principal: 10_000,
      investmentTermInYears: 3,
      interestRatePerAnnum: 0,
    });

    expect(result).toEqual(10_000);
  });

  it("should throw an error when principal is negative", () => {
    expect(() =>
      calculateSimpleInterestIncludingPrincipal({
        principal: -10_000,
        investmentTermInYears: 3,
        interestRatePerAnnum: 0.011,
      }),
    ).toThrow("Principal is negative.");
  });

  it("should throw an error when investment term is negative", () => {
    expect(() =>
      calculateSimpleInterestIncludingPrincipal({
        principal: 10_000,
        investmentTermInYears: -3,
        interestRatePerAnnum: 0.011,
      }),
    ).toThrow("Investment term is negative.");
  });

  it("should throw an error when interest rate is negative", () => {
    expect(() =>
      calculateSimpleInterestIncludingPrincipal({
        principal: 10_000,
        investmentTermInYears: 3,
        interestRatePerAnnum: -0.011,
      }),
    ).toThrow("Interest rate is negative.");
  });
});
