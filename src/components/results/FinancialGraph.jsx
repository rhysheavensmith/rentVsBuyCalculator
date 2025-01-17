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
								value: 'Year',
								position: 'insideBottomRight',
								offset: -5,
								fill: '#fff',
							}}
						/>
						<YAxis
							tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
							tick={{ fill: '#fff' }}
							label={{
								value: 'Amount ($)',
								angle: -90,
								position: 'insideLeft',
								fill: '#fff',
							}}
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
							name='Future Savings'
							stroke='#82ca9d'
							strokeWidth={2}
							activeDot={{ r: 6 }}
						/>
						<Line
							type='monotone'
							dataKey='homeEquity'
							name='Home Value'
							stroke='#cf1f3c'
							strokeWidth={2}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default FinancialGraph;
