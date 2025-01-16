// RentVsBuyCalculator.jsx

import { useState } from 'react';
import { rentVsBuyCalculator } from '../utils/equations/rentVsBuyCalculator';

const RentVsBuyCalculator = () => {
	// Initialize state for all input fields
	const [inputs, setInputs] = useState({
		initialSavings: 50000,
		savingsReturnRate: 4.0,
		timePeriod: 30,
		monthlyRent: 1000,
		rentIncreaseRate: 3.0,
		housePurchasePrice: 500000,
		upfrontPurchaseCosts: 30000,
		ongoingCosts: 3000,
		ongoingCostIncreaseRate: 2.5,
		homeAppreciationRate: 3.0,
		loanInterestRate: 5.5,
		loanTerm: 30,
	});

	// Initialize state for outputs
	const [outputs, setOutputs] = useState(null);

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: parseFloat(value),
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const result = rentVsBuyCalculator(inputs);
		setOutputs(result);
	};

	return (
		<div style={styles.container}>
			<h2>Rent vs Buy Calculator</h2>
			<form onSubmit={handleSubmit} style={styles.form}>
				{/* Financial Position */}
				<fieldset style={styles.fieldset}>
					<legend>Financial Position</legend>
					<label style={styles.label}>
						How much have you saved? ($)
						<input
							type='number'
							name='initialSavings'
							value={inputs.initialSavings}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='1000'
							required
						/>
					</label>
					<label style={styles.label}>
						Savings / Investment Return (%)
						<input
							type='number'
							name='savingsReturnRate'
							value={inputs.savingsReturnRate}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='0.1'
							required
						/>
					</label>
					<label style={styles.label}>
						Time Period of Analysis (years)
						<input
							type='number'
							name='timePeriod'
							value={inputs.timePeriod}
							onChange={handleChange}
							style={styles.input}
							min='1'
							step='1'
							required
						/>
					</label>
				</fieldset>

				{/* Rent Details */}
				<fieldset style={styles.fieldset}>
					<legend>Rent Details</legend>
					<label style={styles.label}>
						Rent Amount ($ per month)
						<input
							type='number'
							name='monthlyRent'
							value={inputs.monthlyRent}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='100'
							required
						/>
					</label>
					<label style={styles.label}>
						Rent Increase Rate (% per annum)
						<input
							type='number'
							name='rentIncreaseRate'
							value={inputs.rentIncreaseRate}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='0.1'
							required
						/>
					</label>
				</fieldset>

				{/* Buy Details */}
				<fieldset style={styles.fieldset}>
					<legend>Buy Details</legend>
					<label style={styles.label}>
						House Purchase Price ($)
						<input
							type='number'
							name='housePurchasePrice'
							value={inputs.housePurchasePrice}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='1000'
							required
						/>
					</label>
					<label style={styles.label}>
						Upfront Purchase Costs ($)
						<input
							type='number'
							name='upfrontPurchaseCosts'
							value={inputs.upfrontPurchaseCosts}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='1000'
							required
						/>
					</label>
					<label style={styles.label}>
						Ongoing Costs ($ per annum)
						<input
							type='number'
							name='ongoingCosts'
							value={inputs.ongoingCosts}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='100'
							required
						/>
					</label>
					<label style={styles.label}>
						Ongoing Cost Increase Rate (% per annum)
						<input
							type='number'
							name='ongoingCostIncreaseRate'
							value={inputs.ongoingCostIncreaseRate}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='0.1'
							required
						/>
					</label>
					<label style={styles.label}>
						Home Appreciation Rate (% per annum)
						<input
							type='number'
							name='homeAppreciationRate'
							value={inputs.homeAppreciationRate}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='0.1'
							required
						/>
					</label>
					<label style={styles.label}>
						Loan Interest Rate (%)
						<input
							type='number'
							name='loanInterestRate'
							value={inputs.loanInterestRate}
							onChange={handleChange}
							style={styles.input}
							min='0'
							step='0.1'
							required
						/>
					</label>
					<label style={styles.label}>
						Loan Term (years)
						<input
							type='number'
							name='loanTerm'
							value={inputs.loanTerm}
							onChange={handleChange}
							style={styles.input}
							min='1'
							step='1'
							required
						/>
					</label>
				</fieldset>

				<button type='submit' style={styles.button}>
					Calculate
				</button>
			</form>

			{/* Display Results */}
			{outputs && (
				<div style={styles.results}>
					<h3>Results After {inputs.timePeriod} Years</h3>
					<p>
						<strong>Rent - Savings:</strong> $
						{Number(outputs.rentMinusSavings).toLocaleString()}
					</p>
					<p>
						<strong>Buy - Home Equity:</strong> $
						{Number(outputs.homeEquity).toLocaleString()}
					</p>
					<p>
						<strong>Buying is Better Off:</strong> $
						{Number(outputs.buyingBetterOff).toLocaleString()}
					</p>
					<hr />
					<h4>Detailed Breakdown:</h4>
					<ul>
						<li>
							<strong>Loan Amount:</strong> $
							{Number(outputs.loanAmount).toLocaleString()}
						</li>
						<li>
							<strong>Monthly Repayment:</strong> $
							{Number(outputs.monthlyRepayment).toLocaleString()}
						</li>
						<li>
							<strong>Total Rent Paid:</strong> $
							{Number(outputs.totalRentPaid).toLocaleString()}
						</li>
						<li>
							<strong>Future Value of Savings:</strong> $
							{Number(outputs.futureValueSavings).toLocaleString()}
						</li>
						<li>
							<strong>Total Ongoing Costs:</strong> $
							{Number(outputs.totalOngoingCosts).toLocaleString()}
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

// Basic inline styles for simplicity
const styles = {
	container: {
		maxWidth: '800px',
		margin: '0 auto',
		padding: '20px',
		fontFamily: 'Arial, sans-serif',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	fieldset: {
		marginBottom: '20px',
		padding: '10px 20px',
		border: '1px solid #ccc',
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '10px',
		fontSize: '14px',
	},
	input: {
		padding: '8px',
		fontSize: '14px',
		marginTop: '5px',
	},
	button: {
		padding: '10px',
		fontSize: '16px',
		backgroundColor: '#001fb9',
		color: '#fff',
		border: 'none',
		cursor: 'pointer',
		borderRadius: '5px',
		marginTop: '10px',
	},
	results: {
		marginTop: '30px',
		padding: '20px',
		border: '1px solid #001fb9',
		borderRadius: '5px',
		backgroundColor: '#f0f8ff',
	},
};

export default RentVsBuyCalculator;
