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
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='1000'
						required
					/>
				</div>

				{/* Upfront Purchase Costs */}
				<div>
					<label className='block text-xs text-gray-600'>
						Upfront Costs ($)
					</label>
					<input
						type='number'
						name='upfrontPurchaseCosts'
						value={inputs.upfrontPurchaseCosts}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='1000'
						required
					/>
				</div>

				{/* Ongoing Costs */}
				<div>
					<label className='block text-xs text-gray-600'>
						Ongoing Costs ($ / year)
					</label>
					<input
						type='number'
						name='ongoingCosts'
						value={inputs.ongoingCosts}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='100'
						required
					/>
				</div>

				{/* Ongoing Cost Increase Rate */}
				<div>
					<label className='block text-xs text-gray-600'>
						Ongoing Cost Increase (% / year)
					</label>
					<input
						type='number'
						name='ongoingCostIncreaseRate'
						value={inputs.ongoingCostIncreaseRate}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='0.1'
						required
					/>
				</div>

				{/* Home Appreciation Rate */}
				<div>
					<label className='block text-xs text-gray-600'>
						Home Appreciation (% / year)
					</label>
					<input
						type='number'
						name='homeAppreciationRate'
						value={inputs.homeAppreciationRate}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='0.1'
						required
					/>
				</div>

				{/* Loan Interest Rate */}
				<div>
					<label className='block text-xs text-gray-600'>
						Loan Interest (%)
					</label>
					<input
						type='number'
						name='loanInterestRate'
						value={inputs.loanInterestRate}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
						min='0'
						step='0.1'
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
						className='mt-1 w-full rounded border border-gray-300
						 text-sm px-2 py-1 focus:border-red-500
						 focus:ring-red-500'
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
