const FinancialPosition = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded p-2'>
			<legend className='px-1 text-sm font-semibold text-gray-700'>
				Financial Position
			</legend>
			<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2'>
				{/* Initial Savings */}
				<div>
					<label className='block text-xs text-gray-600'>
						Initial Savings ($)
					</label>
					<input
						type='number'
						name='initialSavings'
						value={inputs.initialSavings}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 
						 text-sm px-2 py-1 focus:border-red-500 
						 focus:ring-red-500'
						min='0'
						step='1000'
						required
					/>
				</div>

				{/* Savings / Investment Return */}
				{/* <div>
					<label className='block text-xs text-gray-600'>Return (%)</label>
					<input
						type='number'
						name='savingsReturnRate'
						value={inputs.savingsReturnRate}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='0.1'
						required
					/>
				</div> */}

				{/* Monthly Savings Contribution */}
				<div>
					<label className='block text-xs text-gray-600'>
						Monthly Contribution ($)
					</label>
					<input
						type='number'
						name='savingsContribution'
						value={inputs.savingsContribution}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 
						 text-sm px-2 py-1 focus:border-red-500 
						 focus:ring-red-500'
						min='0'
						step='0.1'
						required
					/>
				</div>

				{/* Time Period */}
				{/* <div>
					<label className='block text-xs text-gray-600'>
						Analysis Period (years)
					</label>
					<input
						type='number'
						name='timePeriod'
						value={inputs.timePeriod}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 
						 text-sm px-2 py-1 focus:border-red-500 
						 focus:ring-red-500'
						min='1'
						step='1'
						required
					/>
				</div> */}
			</div>
		</fieldset>
	);
};

export default FinancialPosition;
