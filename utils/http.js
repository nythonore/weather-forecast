import axios from 'axios';

const http = axios.create({
	baseURL: 'https://api.open-meteo.com/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default http;
