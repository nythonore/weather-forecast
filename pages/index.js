import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import LocationSelect from '../components/locationSelect';
import WeatherOverview from '../components/weatherOverview';
import { getWeatherApi } from '../slices/getWeather';
import { setWeather } from '../slices/viewWeather';

export default function Home() {
	const [location, setLocation] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (location) {
			dispatch(
				getWeatherApi({ latitude: location.lat, longitude: location.lng })
			);

			// clear more weather information on location change
			dispatch(setWeather(null));
		}
	}, [dispatch, location]);

	return (
		<Container>
			<LocationSelect onChange={setLocation} />
			<WeatherOverview />
		</Container>
	);
}
