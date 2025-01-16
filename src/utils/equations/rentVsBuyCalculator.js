// rentVsBuyUtils.js

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
	const totalPayments = loanTerm * 12;
	const powFactor = Math.pow(1 + monthlyInterestRate, totalPayments);
	const numerator = loanAmount * monthlyInterestRate * powFactor;
	const denominator = powFactor - 1;
	const monthlyRepayment = numerator / denominator;

	// 4. Home Value after X years
	const homeEquity =
		housePurchasePrice * Math.pow(1 + homeAppreciation, timePeriod);

	// 5. Total Ongoing Costs (annual loop)
	const totalOngoingCosts = calculateTotalOngoingCosts(
		ongoingCosts,
		ongoingCostAnnualIncrease,
		timePeriod
	);

	// 6. Calculate rent year by year
	let totalRentPaid = 0;
	let currentAnnualRent = monthlyRent * 12;
	for (let y = 1; y <= timePeriod; y++) {
		totalRentPaid += currentAnnualRent;
		currentAnnualRent *= 1 + rentAnnualIncrease;
	}

	// 7. Future Value of Savings with end-of-year compounding + rounding
	let futureValueSavings = initialSavings;
	for (let y = 1; y <= timePeriod; y++) {
		futureValueSavings *= 1 + savingsAnnualRate;

		// Round to cents each year
		futureValueSavings = Math.floor(futureValueSavings * 100) / 100;
	}

	// 8. Rent - Savings
	const rentMinusSavings = totalRentPaid + futureValueSavings;

	// 9. Buying is Better Off
	const buyingBetterOff = homeEquity - rentMinusSavings;

	// Return
	return {
		loanAmount: loanAmount.toFixed(2),
		monthlyRepayment: monthlyRepayment.toFixed(2),
		homeEquity: homeEquity.toFixed(2),
		totalRentPaid: totalRentPaid.toFixed(2),
		futureValueSavings: futureValueSavings.toFixed(2),
		totalOngoingCosts: totalOngoingCosts.toFixed(2),
		rentMinusSavings: rentMinusSavings.toFixed(2),
		buyingBetterOff: buyingBetterOff.toFixed(2),
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
