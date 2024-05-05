import { calculateCompoundInterestIncludingPrincipal } from "./calculateCompoundInterestIncludingPrincipal";
import { calculateSimpleInterestIncludingPrincipal } from "./calculateSimpleInterestIncludingPrincipal";
import { frequencyPerYearFromCompoundInterestPaidFrequency } from "./constants";
import { FREQUENCY_INTEREST_PAID, type FrequencyInterestPaid } from "./types";

export const calculateTermDeposit = ({
	principal,
	interestRatePerAnnum,
	frequencyInterestPaid,
	investmentTermInYears,
}: {
	principal: number;
	interestRatePerAnnum: number;
	frequencyInterestPaid: FrequencyInterestPaid;
	investmentTermInYears: number;
}) => {
	if (frequencyInterestPaid === FREQUENCY_INTEREST_PAID.AT_MATURITY) {
		return calculateSimpleInterestIncludingPrincipal({
			principal,
			interestRatePerAnnum,
			investmentTermInYears,
		});
	}

	const frequencyInterestPaidPerYear =
		frequencyPerYearFromCompoundInterestPaidFrequency[frequencyInterestPaid];

	return calculateCompoundInterestIncludingPrincipal({
		principal,
		frequencyInterestPaidPerYear,
		interestRatePerAnnum,
		investmentTermInYears,
	});
};
