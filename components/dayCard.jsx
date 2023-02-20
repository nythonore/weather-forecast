import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Card, CardContent, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setWeather } from '../slices/viewWeather';

export default function DayCard({ index, units, daily, activeWeather }) {
	const dispatch = useDispatch();

	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const data = {
		day: daily.time[index],
		temperatureMin: {
			unit: units.temperature_2m_min,
			value: daily.temperature_2m_min[index],
		},
		temperatureMax: {
			unit: units.temperature_2m_max,
			value: daily.temperature_2m_max[index],
		},
		precipitation: {
			unit: units.precipitation_sum,
			value: daily.precipitation_sum[index],
		},
		snowfall: {
			unit: units.snowfall_sum,
			value: daily.snowfall_sum[index],
		},
		windspeed: {
			unit: units.windspeed_10m_max,
			value: daily.windspeed_10m_max[index],
		},
	};

	const isActive = data.day === activeWeather?.day;

	return (
		<Card
			sx={{ width: 1, background: isActive ? '#eee' : '#fff' }}
			onClick={() => dispatch(setWeather(data))}
		>
			<CardContent>
				<div>
					<CloudOutlinedIcon />

					<Typography
						sx={{ fontSize: 18, fontWeight: '500' }}
						color='text.primary'
						gutterBottom
					>
						{daysOfWeek[new Date(data.day).getDay()]}
					</Typography>
				</div>

				<Typography sx={{ fontSize: 15 }} color='text.secondary'>
					{`${data.temperatureMin.value}${data.temperatureMin.unit}`}
				</Typography>
				<Typography sx={{ fontSize: 15 }} color='text.secondary'>
					{`${data.temperatureMax.value}${data.temperatureMax.unit}`}
				</Typography>
			</CardContent>
		</Card>
	);
}
