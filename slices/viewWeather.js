import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	weather: null,
};

const viewWeatherSlice = createSlice({
	name: 'viewWeather',
	initialState,
	reducers: {
		setWeather(state, action) {
			state.weather = action.payload;
		},
	},
});

export const { setWeather } = viewWeatherSlice.actions;

export default viewWeatherSlice.reducer;
