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
		savingsContribution: 300,
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

	// Optional: animation variants for expansions/collapses in the modal
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
		<div className='flex items-center justify-center min-h-screen overflow-auto bg-gray-50'>
			<div className='mx-auto max-w-md py-4 px-2'>
				{/* Heading */}
				<div className='text-center mb-4'>
					<h1 className='text-2xl font-bold text-gray-800'>
						Rent vs Buy Calculator
					</h1>
					<p className='mt-1 text-xs text-gray-500'>
						Compare the long-term financial impact of renting vs. buying.
					</p>
				</div>

				{/* Form Container */}
				<form
					onSubmit={handleSubmit}
					className='bg-white rounded shadow px-3 py-3 space-y-4'
				>
					<FinancialPosition inputs={inputs} handleChange={handleChange} />
					<RentDetails inputs={inputs} handleChange={handleChange} />
					<BuyDetails inputs={inputs} handleChange={handleChange} />
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
		</div>
	);
};

export default SavingsCalculator;
