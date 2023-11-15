import { useEffect, useState } from 'react';
import { checkAuth, getDiscover } from './utils/fetchAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { useMovieContext } from './Context';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [apiStatus, setApiStatus] = useState<number>(0);
	const { movies, addMovies, selectedMovie } = useMovieContext();

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
				<Routes>
					<Route
						path='/:id'
						element={
							<div className='flex flex-col justify-center items-center w-full h-full'>{selectedMovie?.title}</div>
						}
					/>
					<Route path='*' element={<MovieList movies={movies} />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
