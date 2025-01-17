const FinancialPosition = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded-lg p-4'>
			<legend className='px-2 text-base font-semibold text-gray-700'>
				Financial Position
			</legend>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
				{/* Initial Savings */}
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

				{/* Savings Return Rate */}
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

				{/* Time Period */}
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
	);
};

export default FinancialPosition;
