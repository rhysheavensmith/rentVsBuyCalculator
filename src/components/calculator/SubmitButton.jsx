import { motion } from 'framer-motion';

const SubmitButton = () => {
	return (
		<div>
			<motion.button
				type='submit'
				whileHover={{ scale: 1.03 }}
				whileTap={{ scale: 0.95 }}
				className='w-full py-2 px-3 rounded bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500'
			>
				Calculate
			</motion.button>
		</div>
	);
};

export default SubmitButton;
