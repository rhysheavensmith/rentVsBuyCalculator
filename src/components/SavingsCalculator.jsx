import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // Adjust import if needed
import { rentVsBuyCalculator } from '../utils/equations/rentVsBuyCalculator';

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
				<fieldset className='border border-gray-200 rounded-lg p-4'>
					<legend className='px-2 text-base font-semibold text-gray-700'>
						Financial Position
					</legend>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								How much have you saved? ($)
							</label>
							<input
								type='number'
								name='initialSavings'
								value={inputs.initialSavings}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='1000'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Savings / Investment Return (%)
							</label>
							<input
								type='number'
								name='savingsReturnRate'
								value={inputs.savingsReturnRate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='0.1'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Time Period of Analysis (years)
							</label>
							<input
								type='number'
								name='timePeriod'
								value={inputs.timePeriod}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='1'
								step='1'
								required
							/>
						</div>
					</div>
				</fieldset>

				{/* Rent Details */}
				<fieldset className='border border-gray-200 rounded-lg p-4'>
					<legend className='px-2 text-base font-semibold text-gray-700'>
						Rent Details
					</legend>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Rent Amount ($ per month)
							</label>
							<input
								type='number'
								name='monthlyRent'
								value={inputs.monthlyRent}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='100'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Rent Increase Rate (% per annum)
							</label>
							<input
								type='number'
								name='rentIncreaseRate'
								value={inputs.rentIncreaseRate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='0.1'
								required
							/>
						</div>
					</div>
				</fieldset>

				{/* Buy Details */}
				<fieldset className='border border-gray-200 rounded-lg p-4'>
					<legend className='px-2 text-base font-semibold text-gray-700'>
						Buy Details
					</legend>
					<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								House Purchase Price ($)
							</label>
							<input
								type='number'
								name='housePurchasePrice'
								value={inputs.housePurchasePrice}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='1000'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Upfront Purchase Costs ($)
							</label>
							<input
								type='number'
								name='upfrontPurchaseCosts'
								value={inputs.upfrontPurchaseCosts}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='1000'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Ongoing Costs ($ per annum)
							</label>
							<input
								type='number'
								name='ongoingCosts'
								value={inputs.ongoingCosts}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='100'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Ongoing Cost Increase Rate (% per annum)
							</label>
							<input
								type='number'
								name='ongoingCostIncreaseRate'
								value={inputs.ongoingCostIncreaseRate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='0.1'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Home Appreciation Rate (% per annum)
							</label>
							<input
								type='number'
								name='homeAppreciationRate'
								value={inputs.homeAppreciationRate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='0.1'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Loan Interest Rate (%)
							</label>
							<input
								type='number'
								name='loanInterestRate'
								value={inputs.loanInterestRate}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='0'
								step='0.1'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-600'>
								Loan Term (years)
							</label>
							<input
								type='number'
								name='loanTerm'
								value={inputs.loanTerm}
								onChange={handleChange}
								className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm 
                  focus:border-red-500 focus:ring-red-500 sm:text-sm px-3 py-2'
								min='1'
								step='1'
								required
							/>
						</div>
					</div>
				</fieldset>

				{/* Submit Button */}
				<div>
					<motion.button
						type='submit'
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.95 }}
						className='w-full py-3 px-4 rounded-md bg-red-600 
              text-white font-semibold text-lg 
              hover:bg-red-700 transition-all duration-300 
              focus:outline-none focus:ring-2 
              focus:ring-offset-2 focus:ring-red-500'
					>
						Calculate
					</motion.button>
				</div>
			</form>

			{/* Modal for Results */}
			<AnimatePresence>
				{outputs && (
					<motion.div
						key='backdrop'
						className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeModal} // Clicking the backdrop closes the modal
					>
						{/* Modal Container */}
						<motion.div
							key='modal'
							className='relative bg-[#081d33] text-gray-300 p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4'
							initial={{ y: -50, opacity: 0, scale: 0.9 }}
							animate={{ y: 0, opacity: 1, scale: 1 }}
							exit={{ y: 50, opacity: 0, scale: 0.9 }}
							transition={{
								duration: 0.4,
								type: 'spring',
								stiffness: 150,
								damping: 20,
							}}
							onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
						>
							{/* Close Button */}
							<button
								type='button'
								className='absolute top-3 right-3 text-white hover:text-red-400 transition-colors'
								onClick={closeModal}
							>
								&times;
							</button>

							<h3 className='text-xl text-white font-bold mb-4'>
								Net Worth After {inputs.timePeriod} Years
							</h3>
							<div className='space-y-3'>
								<p>
									<strong className='font-semibold text-white'>
										As a renter:{' '}
									</strong>
									You’ll have a savings of{' '}
									<span className='font-bold text-white'>
										${Number(outputs.futureValueSavings).toLocaleString()}
									</span>
									.
								</p>
								<p>
									<strong className='font-semibold text-white'>
										As a homeowner:{' '}
									</strong>
									You’ll have a property worth{' '}
									<span className='font-bold text-white'>
										${Number(outputs.homeEquity).toLocaleString()}
									</span>
									.
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SavingsCalculator;
