import { motion, AnimatePresence } from 'framer-motion';
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
					className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={closeModal} // Clicking the backdrop closes the modal
				>
					{/* Modal Container */}
					<motion.div
						key='modal'
						className='relative bg-[#081d33] text-gray-300 w-full max-w-md mx-4 p-3 rounded shadow-lg'
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
							className='absolute top-2 right-2 text-white hover:text-red-400 transition-colors text-xl'
							onClick={closeModal}
						>
							&times;
						</button>

						{/* Modal Title */}
						<h3 className='text-lg text-white font-bold mb-2'>
							Financials After {inputs.timePeriod} Years
						</h3>

						<div className='space-y-2 text-sm'>
							<p>
								<strong className='font-semibold text-white'>Renting</strong> -
								Net Position:{' '}
								<span className='font-bold text-white'>
									${Number(outputs.futureValueSavings).toLocaleString()}
								</span>
								.
							</p>
							<p>
								<strong className='font-semibold text-white'>Buying</strong> -
								Net Position:{' '}
								<span className='font-bold text-white'>
									${Number(outputs.homeEquity).toLocaleString()}
								</span>
								.
							</p>

							{/* Accordion for details */}
							<div className='border-t border-gray-600 mt-2 pt-2'>
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
											<div className='mt-2 text-sm space-y-3'>
												{/* Example: Additional numeric details, if you like */}
												{/* 
                        <div>
                          <p>
                            <strong className="font-semibold text-white">
                              Total Rent Paid:{' '}
                            </strong>
                            ${Number(outputs.totalRentPaid).toLocaleString()}
                          </p>
                          <p>
                            <strong className="font-semibold text-white">
                              Total Mortgage Payments:{' '}
                            </strong>
                            ${Number(outputs.totalMortgagePayments).toLocaleString()}
                          </p>
                          <p>
                            <strong className="font-semibold text-white">
                              Total Ongoing Costs:{' '}
                            </strong>
                            ${Number(outputs.totalOngoingCosts).toLocaleString()}
                          </p>
                        </div>
                        */}

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
