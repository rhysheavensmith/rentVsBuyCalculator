import { useState } from 'react';
import { rentVsBuyCalculator } from '../utils/equations/rentVsBuyCalculator';

// Import Calculator Components
import FinancialPosition from './calculator/FinancialPosition';
import RentDetails from './calculator/RentDetails';
import BuyDetails from './calculator/BuyDetails';
import SubmitButton from './calculator/SubmitButton';

// Import Results Components
import ResultsModal from './results/ResultsModal';

const SavingsCalculator = () => {
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

	const [outputs, setOutputs] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: parseFloat(value),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const result = rentVsBuyCalculator(inputs);
		setOutputs(result);
	};

	const closeModal = () => {
		setOutputs(null);
	};

	const toggleDetails = () => {
		setOutputs((prev) => ({
			...prev,
			showDetails: !prev.showDetails,
		}));
	};

	// Define animation variants for the accordion
	const accordionVariants = {
		closed: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.3,
				ease: 'easeInOut',
			},
		},
		open: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<div className='mx-auto max-w-4xl py-8 px-4 sm:px-6 lg:px-8'>
			{/* Heading */}
			<div className='text-center mb-8'>
				<h1 className='text-3xl font-extrabold text-gray-800 tracking-tight'>
					Rent vs Buy Calculator
				</h1>
				<p className='mt-2 text-sm text-gray-500'>
					Compare the long-term financial impact of renting versus buying a
					home.
				</p>
			</div>

			{/* Form Container */}
			<form
				onSubmit={handleSubmit}
				className='bg-white rounded-lg shadow-lg px-6 py-8 space-y-8'
			>
				{/* Financial Position */}
				<FinancialPosition inputs={inputs} handleChange={handleChange} />

				{/* Rent Details */}
				<RentDetails inputs={inputs} handleChange={handleChange} />

				{/* Buy Details */}
				<BuyDetails inputs={inputs} handleChange={handleChange} />

				{/* Submit Button */}
				<SubmitButton />
			</form>

			{/* Modal for Results */}
			<ResultsModal
				outputs={outputs}
				inputs={inputs}
				closeModal={closeModal}
				accordionVariants={accordionVariants}
				toggleDetails={toggleDetails}
			/>
		</div>
	);
};

export default SavingsCalculator;
