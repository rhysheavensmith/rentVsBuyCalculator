import FinancialGraph from './FinancialGraph';

const ResultsModal = ({ outputs, inputs }) => {
	return (
		<div className='bg-[#081d33] text-gray-300 w-full p-3 rounded shadow-lg mt-4'>
			<h3 className='text-lg text-white font-bold mb-2'>
				Financials After {inputs.timePeriod} Years
			</h3>
			<div className='space-y-2 text-sm'>
				<p>
					<strong className='font-semibold text-white'>Renting</strong> - Net
					Position:{' '}
					<span className='font-bold text-white'>
						${Number(outputs.futureValueSavings).toLocaleString()}
					</span>
					.
				</p>
				<p>
					<strong className='font-semibold text-white'>Buying</strong> - Net
					Position:{' '}
					<span className='font-bold text-white'>
						${Number(outputs.homeEquity).toLocaleString()}
					</span>
					.
				</p>
				<div className='border-t border-gray-600 mt-2 pt-2'>
					<div className='mt-2 text-sm space-y-3'>
						<FinancialGraph yearlyData={outputs.yearlyData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResultsModal;
