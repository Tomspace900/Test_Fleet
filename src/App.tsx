import { useEffect, useState } from 'react';
import { checkAuth, getDiscover } from './utils/fetchAPI';
import { Movie } from './types/api';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

function App() {
	const [apiStatus, setApiStatus] = useState<number>(0);
	const [discoverResult, setDiscoverResult] = useState<Movie[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const authResponse = await checkAuth();
				setApiStatus(authResponse.status_code);

				const discoverResponse = await getDiscover();
				setDiscoverResult(discoverResponse.results);
			} catch (error) {
				console.error('Error fetching API', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col justify-between min-h-screen items-center bg-background'>
			<Header apiStatus={apiStatus} />
			<main className='w-full h-fit'>
				<MovieList movies={discoverResult} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
