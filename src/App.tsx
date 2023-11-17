import { useEffect, useState } from 'react';
import { getDiscover } from './utils/fetchAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { useMovieContext } from './Context';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Loading from './components/partials/Loading';

function App() {
	const [loading, setLoading] = useState(true);
	const { setFilteredMovies, setMovies } = useMovieContext();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const IResponse = await getDiscover();

				setMovies(IResponse.results);
				setFilteredMovies(IResponse.results);

				setLoading(false);
			} catch (error) {
				console.error('Error fetching API', error);
			}
		};

		fetchData();
	}, [setMovies, setFilteredMovies]);

	return (
		<div className='flex flex-col justify-between min-h-screen items-center bg-background'>
			<div className='flex flex-col w-full items-center'>
				<Header />
				<main className='w-full h-full my-8 lg:my-12 lg:max-w-[1400px] flex justify-center items-center'>
					{loading ? (
						<Loading />
					) : (
						<Routes>
							<Route path='/:id' element={<MovieDetails />} />
							<Route path='*' element={<MovieList />} />
						</Routes>
					)}
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
