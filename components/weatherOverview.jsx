import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import { Stack, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import DayCard from './dayCard';

export default function WeatherOverview() {
	const {
		getWeather: { status, forecast },
		viewWeather: { weather },
	} = useSelector(state => {
		return {
			getWeather: state.getWeather,
			viewWeather: state.viewWeather,
		};
	});

	return (
		<>
			{status === 'loading' && <Typography>Loading ...</Typography>}

			{status === 'succeeded' && (
				<>
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
						{forecast.daily.time.map((_, key) => (
							<DayCard
								key={key}
								index={key}
								units={forecast.daily_units}
								daily={forecast.daily}
								activeWeather={weather}
							/>
						))}
					</Stack>

					{weather && (
						<div style={{ marginTop: 20 }}>
							<Box display='flex' gap={1}>
								<CloudOutlinedIcon />

								<Typography
									sx={{ fontSize: 18, fontWeight: '550' }}
									gutterBottom
								>
									Weather
								</Typography>
							</Box>

							<div>
								<Typography>
									Precipitation:{' '}
									{`${weather.precipitation.value}${weather.precipitation.unit}`}
								</Typography>
								<Typography>
									Snowfall:{' '}
									{`${weather.snowfall.value}${weather.snowfall.unit}`}
								</Typography>
								<Typography>
									windspeed:{' '}
									{`${weather.windspeed.value}${weather.windspeed.unit}`}
								</Typography>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}
