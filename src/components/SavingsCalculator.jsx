// components/SavingsCalculator.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Corrected import
import { rentVsBuyCalculator } from '../utils/equations/rentVsBuyCalculator';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'; // Import Recharts components

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

								{/* Accordion for details */}
								<div className='border-t border-gray-600 mt-4 pt-4'>
									<button
										className='w-full text-left font-medium text-white flex items-center justify-between hover:text-red-400 transition-colors'
										onClick={() =>
											setOutputs((prev) => ({
												...prev,
												showDetails: !prev.showDetails,
											}))
										}
									>
										<span>
											{outputs.showDetails ? 'Hide Details' : 'Show Details'}
										</span>
										<span
											className={`transform transition-transform ${
												outputs.showDetails ? 'rotate-180' : ''
											}`}
										>
											&#9662;
										</span>
									</button>

									{/* Animated Accordion Content */}
									<AnimatePresence>
										{outputs.showDetails && (
											<motion.div
												key='accordion'
												initial='closed'
												animate='open'
												exit='closed'
												variants={accordionVariants}
												className='overflow-hidden'
											>
												<div className='mt-4 space-y-4 text-sm'>
													{/* Existing Details */}
													<div>
														<p>
															<strong className='font-semibold text-white'>
																Total Rent Paid:{' '}
															</strong>
															${Number(outputs.totalRentPaid).toLocaleString()}
														</p>
														<p>
															<strong className='font-semibold text-white'>
																Total Mortgage Payments:{' '}
															</strong>
															$
															{Number(
																outputs.totalMortgagePayments
															).toLocaleString()}
														</p>
														<p>
															<strong className='font-semibold text-white'>
																Total Ongoing Costs:{' '}
															</strong>
															$
															{Number(
																outputs.totalOngoingCosts
															).toLocaleString()}
														</p>
													</div>

													{/* Graph Section */}
													<div className='mt-6'>
														<h4 className='text-lg font-semibold text-white mb-2'>
															Financial Growth Over Time
														</h4>
														<div className='w-full h-64'>
															<ResponsiveContainer width='100%' height='100%'>
																<LineChart
																	data={outputs.yearlyData}
																	margin={{
																		top: 20,
																		right: 30,
																		left: 20,
																		bottom: 5,
																	}}
																>
																	<CartesianGrid
																		strokeDasharray='3 3'
																		stroke='#555'
																	/>
																	<XAxis
																		dataKey='year'
																		tick={{ fill: '#fff' }}
																		label={{
																			value: 'Year',
																			position: 'insideBottomRight',
																			offset: -5,
																			fill: '#fff',
																		}}
																	/>
																	<YAxis
																		tickFormatter={(value) =>
																			`$${(value / 1000).toFixed(0)}k`
																		}
																		tick={{ fill: '#fff' }}
																		label={{
																			value: 'Amount ($)',
																			angle: -90,
																			position: 'insideLeft',
																			fill: '#fff',
																		}}
																	/>
																	<Tooltip
																		contentStyle={{
																			backgroundColor: '#333',
																			border: 'none',
																			color: '#fff',
																		}}
																		labelStyle={{ color: '#fff' }}
																		itemStyle={{ color: '#fff' }}
																		formatter={(value) =>
																			`$${Number(value).toLocaleString()}`
																		}
																	/>
																	<Legend
																		verticalAlign='top'
																		height={36}
																		iconType='circle'
																		iconSize={8}
																		formatter={(value) => (
																			<span style={{ color: '#fff' }}>
																				{value}
																			</span>
																		)}
																	/>
																	<Line
																		type='monotone'
																		dataKey='savings'
																		name='Future Savings'
																		stroke='#82ca9d'
																		strokeWidth={2}
																		activeDot={{ r: 6 }}
																	/>
																	<Line
																		type='monotone'
																		dataKey='homeEquity'
																		name='Home Value'
																		stroke='#cf1f3c'
																		strokeWidth={2}
																		activeDot={{ r: 6 }}
																	/>
																</LineChart>
															</ResponsiveContainer>
														</div>
													</div>
													{/* End of Graph Section */}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SavingsCalculator;
