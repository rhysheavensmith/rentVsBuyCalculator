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
	// Define Y-axis ticks and formatter
	const yAxisTicks = [0, 350000, 700000, 1000000, 1500000];
	const formatYAxisTick = (value) => {
		if (value >= 1000000) {
			return `$${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			return `$${(value / 1000).toFixed(0)}k`;
		}
		return `$${value}`;
	};

	return (
		<div className='mt-2'>
			<h4 className='text-base font-semibold text-white mb-1'>
				Financial Growth Over Time
			</h4>
			<div className='w-full h-48'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						data={yearlyData}
						margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray='3 3' stroke='#555' />
						<XAxis dataKey='year' tick={{ fill: '#fff', fontSize: '0.8rem' }} />
						<YAxis
							ticks={yAxisTicks}
							tickFormatter={formatYAxisTick}
							tick={{ fill: '#fff', fontSize: '0.8rem' }}
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
							height={24}
							iconType='circle'
							iconSize={6}
							wrapperStyle={{ fontSize: '0.75rem' }}
							formatter={(value) => (
								<span style={{ color: '#fff', fontSize: '0.75rem' }}>
									{value}
								</span>
							)}
						/>
						<Line
							type='monotone'
							dataKey='savings'
							name='Future Savings Value'
							stroke='#82ca9d'
							strokeWidth={2}
							activeDot={{ r: 5 }}
						/>
						<Line
							type='monotone'
							dataKey='homeEquity'
							name='Home Equity Value'
							stroke='#cf1f3c'
							strokeWidth={2}
							activeDot={{ r: 5 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
			<footer className='mt-1 text-xs text-gray-400'>
				*Equity Value = property value minus remaining mortgage. These figures
				are estimates only and actual values may vary.
			</footer>
		</div>
	);
};

export default FinancialGraph;
