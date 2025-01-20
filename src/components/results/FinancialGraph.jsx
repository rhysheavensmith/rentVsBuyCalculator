import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const FinancialGraph = ({ yearlyData }) => {
	// Define the specific tick values you want on the Y-axis
	const yAxisTicks = [0, 350000, 700000, 1000000, 1500000];

	// Custom tick formatter function
	const formatYAxisTick = (value) => {
		if (value >= 1000000) {
			return `$${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			return `$${(value / 1000).toFixed(0)}k`;
		}
		return `$${value}`;
	};

	return (
		<div className='mt-6'>
			<h4 className='text-lg font-semibold text-white mb-2'>
				Financial Growth Over Time
			</h4>
			<div className='w-full h-64'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						data={yearlyData}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' stroke='#555' />
						<XAxis
							dataKey='year'
							tick={{ fill: '#fff' }}
							label={{
								// value: 'Year',
								position: 'insideBottomRight',
								offset: -5,
								fill: '#fff',
							}}
						/>
						<YAxis
							ticks={yAxisTicks}
							tickFormatter={formatYAxisTick}
							tick={{ fill: '#fff' }}
							label={{
								// value: 'Amount ($)',
								angle: -90,
								position: 'insideLeft',
								fill: '#fff',
							}}
							domain={[0, 'dataMax + 50000']}
						/>
						<Tooltip
							contentStyle={{
								backgroundColor: '#333',
								border: 'none',
								color: '#fff',
							}}
							labelStyle={{ color: '#fff' }}
							itemStyle={{ color: '#fff' }}
							formatter={(value) => `$${Number(value).toLocaleString()}`}
						/>
						<Legend
							verticalAlign='top'
							height={36}
							iconType='circle'
							iconSize={8}
							formatter={(value) => (
								<span style={{ color: '#fff' }}>{value}</span>
							)}
						/>
						<Line
							type='monotone'
							dataKey='savings'
							name='Future Savings Value'
							stroke='#82ca9d'
							strokeWidth={2}
							activeDot={{ r: 6 }}
						/>
						<Line
							type='monotone'
							dataKey='homeEquity'
							name='Home Equity Value'
							stroke='#cf1f3c'
							strokeWidth={2}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
			{/* Footnote Section */}
			<footer className='mt-2 text-sm text-gray-400'>
				*Equity Value is calculated as the property's current value minus the
				remaining mortgage balance. Over the term, regardless of mortgage
				payments or rent paid, you'll accumulate savings and build equity in
				your home. These figures are estimates only and actual values may vary.
			</footer>
		</div>
	);
};

export default FinancialGraph;
