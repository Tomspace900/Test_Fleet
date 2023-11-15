import { useEffect, useState } from 'react';
import { checkAuth, getDiscover } from './utils/fetchAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { useMovieContext } from './Context';

function App() {
	const [apiStatus, setApiStatus] = useState<number>(0);
	const { movies, addMovies } = useMovieContext();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const authResponse = await checkAuth();
				setApiStatus(authResponse.status_code);

				const discoverResponse = await getDiscover();
				addMovies(discoverResponse.results);
			} catch (error) {
				console.error('Error fetching API', error);
			}
		};

		fetchData();
	}, [addMovies]);

	return (
		<div className='flex flex-col justify-between min-h-screen items-center bg-background'>
			<Header apiStatus={apiStatus} />
			<main className='w-full h-fit'>
				<MovieList movies={movies} />
			</main>
			<Footer />
		</div>
	);
}

export default App;
