import '../styles/globals.css';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<CssBaseline />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
