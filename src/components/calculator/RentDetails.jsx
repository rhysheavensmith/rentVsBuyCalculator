import PropTypes from 'prop-types';

const RentDetails = ({ inputs, handleChange }) => {
	return (
		<fieldset className='border border-gray-200 rounded p-2'>
			<legend className='px-1 text-sm font-semibold text-gray-700'>
				Rent Details
			</legend>
			<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 mt-2'>
				{/* Monthly Rent */}
				<div>
					<label className='block text-xs text-gray-600'>
						Rent ($ / month)
					</label>
					<input
						type='number'
						name='monthlyRent'
						value={inputs.monthlyRent}
						onChange={handleChange}
						className='mt-1 w-full rounded border border-gray-300 text-sm px-2 py-1 focus:border-red-500 focus:ring-red-500'
						required
					/>
				</div>
			</div>
		</fieldset>
	);
};

RentDetails.propTypes = {
	inputs: PropTypes.shape({
		monthlyRent: PropTypes.number.isRequired,
		rentIncreaseRate: PropTypes.number.isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default RentDetails;
