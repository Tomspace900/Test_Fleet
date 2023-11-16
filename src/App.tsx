import { useEffect, useState } from 'react';
import { checkAuth, getDiscover } from './utils/fetchAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { useMovieContext } from './Context';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Loading from './components/partials/Loading';

function App() {
	const [loading, setLoading] = useState(true);
	const [apiStatus, setApiStatus] = useState<number>(0);
	const { movies, setMovies } = useMovieContext();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const AuthResponseType = await checkAuth();
				const ResponseType = await getDiscover();

				setApiStatus(AuthResponseType.status_code);
				setMovies(ResponseType.results);

				setLoading(false);
			} catch (error) {
				console.error('Error fetching API', error);
			}
		};

		fetchData();
	}, [setMovies]);

	return (
		<div className='flex flex-col justify-between min-h-screen items-center bg-background'>
			<Header apiStatus={apiStatus} />
			<main className='w-full h-fit my-8 lg:my-12 lg:max-w-[1400px]'>
				{loading ? (
					<Loading />
				) : (
					<Routes>
						<Route path='/:id' element={<MovieDetails />} />
						<Route path='*' element={<MovieList movies={movies} />} />
					</Routes>
				)}
			</main>
			<Footer />
		</div>
	);
}

export default App;
