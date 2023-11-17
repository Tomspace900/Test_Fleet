import { IAuthResponse, IResponse, IMovieDetails } from '../types/types';
const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

interface FetchOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: { [key: string]: string };
	body?: any;
}

async function fetchAPI(url: string, options: FetchOptions = {}) {
	const headers = {
		Authorization: `Bearer ${API_TOKEN}`,
		'Content-Type': 'application/json',
		...options.headers,
	};

	const response = await fetch(`${API_URL}${url}`, {
		method: options.method || 'GET',
		headers,
		body: options.body ? JSON.stringify(options.body) : undefined,
	});

	if (!response.ok) {
		throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
	}

	return response.json();
}

async function checkAuth() {
	const response: IAuthResponse = await fetchAPI('/authentication');
	return response;
}

async function getDiscover() {
	const response: IResponse = await fetchAPI('/discover/movie?sort_by=popularity.desc');
	return response;
}

async function getDetails(id: number) {
	const response: IMovieDetails = await fetchAPI(`/movie/${id}`);
	return response;
}

async function getMovieSearch(query: string) {
	const response: IResponse = await fetchAPI(`/search/movie?query=${query}`);
	return response;
}

export { checkAuth, getDiscover, getMovieSearch, getDetails };
