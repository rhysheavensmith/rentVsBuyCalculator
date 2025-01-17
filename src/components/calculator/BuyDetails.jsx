const BuyDetails = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded-lg p-4'>
			<legend className='px-2 text-base font-semibold text-gray-700'>
				Buy Details
			</legend>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{/* House Purchase Price */}
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

				{/* Upfront Purchase Costs */}
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

				{/* Ongoing Costs */}
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

				{/* Ongoing Cost Increase Rate */}
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

				{/* Home Appreciation Rate */}
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

				{/* Loan Interest Rate */}
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

				{/* Loan Term */}
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
	);
};

export default BuyDetails;
