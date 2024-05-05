import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { TermDepositCalculator } from "./TermDepositCalculator";
import { userEvent } from "@testing-library/user-event";

describe("TermDepositCalculator", () => {
	it("should display final balance when form is submitted with term deposit interest paid at maturity", async () => {
		const user = userEvent.setup();

		const screen = render(<TermDepositCalculator />);

		await user.type(screen.getByLabelText(/Investment term/i), "3");

		await user.type(screen.getByLabelText(/Interest rate/i), "1.1");

		await user.type(screen.getByLabelText(/Initial deposit amount/i), "10000");

		await user.click(screen.getByLabelText(/At maturity/i));

		await user.click(
			screen.getByRole("button", {
				name: /Calculate/i,
			}),
		);

		expect(screen.getByText("$10330.00")).toBeVisible();
	});

	it.each([
		{
			inputLabel: "Monthly",
			expectedResult: "$11614.72",
		},
		{
			inputLabel: "Yearly",
			expectedResult: "$11576.25",
		},
		{
			inputLabel: "Quarterly",
			expectedResult: "$11607.55",
		},
	])(
		"should display final balance when form is submitted with term deposit interest paid $inputLabel",
		async ({ inputLabel, expectedResult }) => {
			const user = userEvent.setup();

			const screen = render(<TermDepositCalculator />);

			await user.type(screen.getByLabelText(/Investment term/i), "3");

			await user.type(screen.getByLabelText(/Interest rate/i), "5");

			await user.type(
				screen.getByLabelText(/Initial deposit amount/i),
				"10000",
			);

			await user.click(screen.getByLabelText(inputLabel));

			await user.click(
				screen.getByRole("button", {
					name: /Calculate/i,
				}),
			);

			expect(screen.getByText(expectedResult)).toBeVisible();
		},
	);

	it.each([
		{
			scenario: "a decimal",
			inputValue: "4.4",
		},
		{
			scenario: "negative",
			inputValue: "-10",
		},
	])(
		"should display an error when investment term is $scenario",
		async ({ inputValue }) => {
			const user = userEvent.setup();

			const screen = render(<TermDepositCalculator />);

			const investmentTermInput = screen.getByLabelText(/Investment term/i);

			await user.type(investmentTermInput, inputValue);

			await user.click(
				screen.getByRole("button", {
					name: /Calculate/i,
				}),
			);

			expect(investmentTermInput).toBeInvalid();
		},
	);
});
