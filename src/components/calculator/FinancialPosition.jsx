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
						className='mt-1 w-full rounded border border-gray-300 text-sm px-2 py-1 focus:border-red-500 focus:ring-red-500'
						required
					/>
				</div>

				{/* Monthly Savings Contribution */}
				<div>
					<label className='block text-xs text-gray-600'>
						Monthly Savings Contribution ($)
					</label>
					<input
						type='number'
						name='savingsContribution'
						value={inputs.savingsContribution}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 text-sm px-2 py-1 focus:border-red-500 focus:ring-red-500'
						required
					/>
				</div>
			</div>
		</fieldset>
	);
};

export default FinancialPosition;
