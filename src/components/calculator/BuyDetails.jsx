const BuyDetails = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded p-2'>
			<legend className='px-1 text-sm font-semibold text-gray-700'>
				Buy Details
			</legend>
			<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2'>
				{/* House Purchase Price */}
				<div>
					<label className='block text-xs text-gray-600'>
						Purchase Price ($)
					</label>
					<input
						type='number'
						name='housePurchasePrice'
						value={inputs.housePurchasePrice}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 text-sm px-2 py-1 focus:border-red-500 focus:ring-red-500'
						min='0'
						step='1000'
						required
					/>
				</div>

				{/* Loan Term */}
				<div>
					<label className='block text-xs text-gray-600'>
						Loan Term (years)
					</label>
					<input
						type='number'
						name='loanTerm'
						value={inputs.loanTerm}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 text-sm px-2 py-1 focus:border-red-500 focus:ring-red-500'
						min='1'
						step='1'
						required
					/>
				</div>
			</div>
		</fieldset>
	);
};

export default BuyDetails;
