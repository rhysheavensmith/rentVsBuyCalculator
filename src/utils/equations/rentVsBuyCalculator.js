// utils/equations/rentVsBuyCalculator.js

export function rentVsBuyCalculator({
	initialSavings,
	savingsReturnRate, // e.g. 4 => 4% annually
	timePeriod, // in years
	monthlyRent, // initial monthly rent
	rentIncreaseRate, // e.g. 3 => 3% per annum
	housePurchasePrice,
	upfrontPurchaseCosts,
	ongoingCosts, // per annum
	ongoingCostIncreaseRate, // e.g. 2.5 => 2.5% per annum
	homeAppreciationRate,
	loanInterestRate,
	loanTerm,
}) {
	// 1. Convert percentage rates
	const savingsAnnualRate = savingsReturnRate / 100;
	const rentAnnualIncrease = rentIncreaseRate / 100;
	const ongoingCostAnnualIncrease = ongoingCostIncreaseRate / 100;
	const homeAppreciation = homeAppreciationRate / 100;
	const loanInterest = loanInterestRate / 100;

	// 2. Loan Amount
	const loanAmount = housePurchasePrice + upfrontPurchaseCosts - initialSavings;

	// 3. Monthly Mortgage Repayment (standard mortgage formula)
	const monthlyInterestRate = loanInterest / 12;
	const totalPayments = loanTerm * 12; // Total loan term in months
	const powFactor = Math.pow(1 + monthlyInterestRate, totalPayments);
	const numerator = loanAmount * monthlyInterestRate * powFactor;
	const denominator = powFactor - 1;
	const monthlyRepayment = numerator / denominator;

	// Initialize variables for yearly data
	let futureValueSavings = initialSavings;
	let currentAnnualRent = monthlyRent * 12;
	let currentOngoingCosts = ongoingCosts;
	let currentHomeValue = housePurchasePrice;
	let totalOngoingCosts = 0;
	let totalRentPaid = 0;
	let totalMortgagePayments = 0;

	const yearlyData = [];

	for (let year = 1; year <= timePeriod; year++) {
		// Update savings with return rate
		futureValueSavings *= 1 + savingsAnnualRate;
		futureValueSavings = Math.floor(futureValueSavings * 100) / 100; // Round to cents

		// Update home value with appreciation
		currentHomeValue *= 1 + homeAppreciation;
		currentHomeValue = Math.floor(currentHomeValue * 100) / 100;

		// Update total rent paid
		totalRentPaid += currentAnnualRent;

		// Update total mortgage payments
		const mortgagePaymentsThisYear = monthlyRepayment * 12;
		totalMortgagePayments += mortgagePaymentsThisYear;

		// Update total ongoing costs
		totalOngoingCosts += currentOngoingCosts;

		// Push yearly data
		yearlyData.push({
			year,
			savings: futureValueSavings,
			homeEquity: currentHomeValue,
		});

		// Increase rent and ongoing costs for next year
		currentAnnualRent *= 1 + rentAnnualIncrease;
		currentOngoingCosts *= 1 + ongoingCostAnnualIncrease;
	}

	// 4. Home Equity after X years
	const homeEquity = currentHomeValue;

	// 5. Future Value of Savings
	// Already computed in the loop

	// 6. Total Buying Costs
	const totalBuyingCosts = totalMortgagePayments + totalOngoingCosts;

	// 7. Return Results
	return {
		totalRentPaid: totalRentPaid.toFixed(2), // Total rent paid during the period
		futureValueSavings: futureValueSavings.toFixed(2), // Value of savings at the end
		homeEquity: homeEquity.toFixed(2), // Future value of the house
		totalOngoingCosts: totalOngoingCosts.toFixed(2), // Total ongoing costs
		totalMortgagePayments: totalMortgagePayments.toFixed(2), // Total mortgage payments
		totalBuyingCosts: totalBuyingCosts.toFixed(2), // Total cost of buying (mortgage + ongoing costs)
		yearlyData, // Array of yearly data for graphing
	};
}
