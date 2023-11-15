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

type AuthResponse = {
	status_code: boolean;
	status_message: string;
	success: boolean;
};

async function checkAuth() {
	const response = await fetchAPI('/authentication');
	return response as AuthResponse;
}

async function getDiscover() {
	const response = await fetchAPI('/discover/movie?sort_by=popularity.desc');
	return response.results;
}

async function getMultiSearch(query: string) {
	const response = await fetchAPI(`/search/multi?query=${query}`);
	return response.results;
}

async function getDetails(id: number) {
	const response = await fetchAPI(`/movie/${id}`);
	return response;
}

export { checkAuth, getDiscover, getMultiSearch, getDetails };
