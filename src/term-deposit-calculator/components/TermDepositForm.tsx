import type { FC } from "react";

export const TermDepositForm: FC<{
	onSubmit: React.FormEventHandler<HTMLFormElement>;
}> = ({ onSubmit }) => (
	<form onSubmit={onSubmit}>
		<div>
			<label htmlFor="investmentTermInYears">Investment term (in years)</label>
			<input
				id="investmentTermInYears"
				name="investmentTermInYears"
				type="number"
				min={0}
				max={50}
				required
			/>
		</div>
		<div>
			<label htmlFor="interestRatePerAnnum">Interest rate per annum (%)</label>
			<input
				id="interestRatePerAnnum"
				name="interestRatePerAnnum"
				type="number"
				step="0.01"
				min={0}
				max={20}
				required
			/>
		</div>
		<div>
			<label htmlFor="principal">Initial deposit amount</label>
			<input
				id="principal"
				name="principal"
				type="number"
				min={0}
				max={5_000_000}
				required
			/>
		</div>
		<div>
			<fieldset>
				<legend>Interest paid frequency</legend>
				<div>
					<div>
						<label htmlFor="yearly">Yearly</label>
						<input
							type="radio"
							id="yearly"
							name="frequencyInterestPaid"
							value="YEARLY"
							required
						/>
					</div>

					<div>
						<label htmlFor="monthly">Monthly</label>
						<input
							type="radio"
							id="monthly"
							name="frequencyInterestPaid"
							value="MONTHLY"
							required
						/>
					</div>

					<div>
						<label htmlFor="quarterly">Quarterly</label>
						<input
							type="radio"
							id="quarterly"
							name="frequencyInterestPaid"
							value="QUARTERLY"
							required
						/>
					</div>

					<div>
						<label htmlFor="atMaturity">At maturity</label>
						<input
							type="radio"
							id="atMaturity"
							name="frequencyInterestPaid"
							value="AT_MATURITY"
							required
						/>
					</div>
				</div>
			</fieldset>
		</div>
		<div>
			<button type="submit">Calculate</button>
		</div>
	</form>
);
