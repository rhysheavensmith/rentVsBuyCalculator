// utils/equations/rentVsBuyCalculator.js

export function rentVsBuyCalculator({
	initialSavings,
	savingsContribution, // ← Added for monthly contributions
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

	// Track the remaining mortgage
	let remainingMortgage = loanAmount;

	const yearlyData = [];

	for (let year = 1; year <= timePeriod; year++) {
		// **Add monthly contributions for the full year:**
		futureValueSavings += savingsContribution * 12;

		// **Apply the annual return rate on the updated savings:**
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

		// Calculate monthly interest and principal for each month of the year
		for (let month = 1; month <= 12; month++) {
			const monthlyInterest = remainingMortgage * monthlyInterestRate;
			const monthlyPrincipal = monthlyRepayment - monthlyInterest;
			remainingMortgage -= monthlyPrincipal;
			if (remainingMortgage < 0) {
				remainingMortgage = 0;
			}
		}

		// Update total ongoing costs
		totalOngoingCosts += currentOngoingCosts;

		// Calculate home equity: currentHomeValue - remainingMortgage
		const homeEquity = currentHomeValue - remainingMortgage;
		const roundedHomeEquity = Math.floor(homeEquity * 100) / 100;

		// Store yearly snapshot
		yearlyData.push({
			year,
			savings: futureValueSavings,
			homeEquity: roundedHomeEquity,
		});

		// Increase rent and ongoing costs for the next year
		currentAnnualRent *= 1 + rentAnnualIncrease;
		currentOngoingCosts *= 1 + ongoingCostAnnualIncrease;
	}

	// Final calculations after the loop
	const finalHomeEquity = currentHomeValue - remainingMortgage;
	const totalBuyingCosts = totalMortgagePayments + totalOngoingCosts;

	// Return the results
	return {
		totalRentPaid: totalRentPaid.toFixed(2),
		futureValueSavings: futureValueSavings.toFixed(2),
		homeEquity: finalHomeEquity.toFixed(2),
		totalOngoingCosts: totalOngoingCosts.toFixed(2),
		totalMortgagePayments: totalMortgagePayments.toFixed(2),
		totalBuyingCosts: totalBuyingCosts.toFixed(2),
		yearlyData,
	};
}
