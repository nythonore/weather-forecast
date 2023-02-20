import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices';

const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

export default store;
