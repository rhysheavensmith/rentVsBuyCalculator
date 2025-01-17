// components/calculator/RentDetails.jsx
const RentDetails = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded-lg p-4'>
			<legend className='px-2 text-base font-semibold text-gray-700'>
				Rent Details
			</legend>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{/* Monthly Rent */}
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

				{/* Rent Increase Rate */}
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
	);
};

export default RentDetails;
