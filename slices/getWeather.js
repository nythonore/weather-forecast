import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import http from '../utils/http';

const initialState = {
	status: 'idle',
	forecast: null,
};

export const getWeatherApi = createAsyncThunk(
	'weather/getWeather',
	async ({ latitude, longitude }) => {
		const { data } = await http.get('forecast', {
			params: {
				current_weather: true,
				timezone: 'EST',
				daily:
					'temperature_2m_min,temperature_2m_max,precipitation_sum,snowfall_sum,windspeed_10m_max',
				latitude,
				longitude,
			},
		});
		return data;
	}
);

const getWeatherSlice = createSlice({
	name: 'getWeather',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getWeatherApi.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(getWeatherApi.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.forecast = action.payload;
		});
		builder.addCase(getWeatherApi.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.payload;
		});
	},
});

export default getWeatherSlice.reducer;
