// components/results/ResultsModal.jsx

import { motion, AnimatePresence } from 'motion/react';
import FinancialGraph from './FinancialGraph';

const ResultsModal = ({
	outputs,
	inputs,
	closeModal,
	accordionVariants,
	toggleDetails,
}) => {
	return (
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
							Net Position After {inputs.timePeriod} Years
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
									onClick={toggleDetails}
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
													{/* <p>
														<strong className='font-semibold text-white'>
															Total Ongoing Costs:{' '}
														</strong>
														$
														{Number(outputs.totalOngoingCosts).toLocaleString()}
													</p> */}
												</div>

												{/* Graph Section */}
												<FinancialGraph yearlyData={outputs.yearlyData} />
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
	);
};

export default ResultsModal;
