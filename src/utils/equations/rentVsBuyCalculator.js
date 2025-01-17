// utils/equations/rentVsBuyCalculator.js

export function rentVsBuyCalculator({
	initialSavings,
	savingsReturnRate, // e.g., 4 => 4% annually
	timePeriod, // in years
	monthlyRent, // initial monthly rent
	rentIncreaseRate, // e.g., 3 => 3% per annum
	housePurchasePrice,
	upfrontPurchaseCosts,
	ongoingCosts, // per annum
	ongoingCostIncreaseRate, // e.g., 2.5 => 2.5% per annum
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

	// 4. Initialize variables for yearly data
	let futureValueSavings = initialSavings;
	let currentAnnualRent = monthlyRent * 12;
	let currentOngoingCosts = ongoingCosts;
	let currentHomeValue = housePurchasePrice;

	const yearlyData = [];

	for (let year = 1; year <= timePeriod; year++) {
		// Update savings with return rate
		futureValueSavings *= 1 + savingsAnnualRate;
		futureValueSavings = Math.floor(futureValueSavings * 100) / 100; // Round to cents

		// Update home value with appreciation
		currentHomeValue *= 1 + homeAppreciation;
		currentHomeValue = Math.floor(currentHomeValue * 100) / 100;

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

	// 5. Total Ongoing Costs (annual loop)
	const totalOngoingCosts = calculateTotalOngoingCosts(
		ongoingCosts,
		ongoingCostAnnualIncrease,
		timePeriod
	);

	// 6. Total Rent Paid
	let totalRentPaid = 0;
	let tempCurrentRent = monthlyRent * 12;
	for (let y = 1; y <= timePeriod; y++) {
		totalRentPaid += tempCurrentRent;
		tempCurrentRent *= 1 + rentAnnualIncrease;
	}

	// 7. Future Value of Savings with end-of-year compounding + rounding
	// Already computed in the loop

	// 8. Total Mortgage Payments (consistent with original)
	const totalMortgagePayments =
		monthlyRepayment * Math.min(totalPayments, timePeriod * 12);

	// 9. Total Costs of Buying
	const totalBuyingCosts = totalMortgagePayments + totalOngoingCosts;

	// 10. Home Equity after X years
	const homeEquity = currentHomeValue;

	// 11. Return Results
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

function calculateTotalOngoingCosts(annualCost, annualIncreaseRate, years) {
	let total = 0;
	let currentCost = annualCost;
	for (let y = 1; y <= years; y++) {
		total += currentCost;
		currentCost *= 1 + annualIncreaseRate;
	}
	return total;
}
