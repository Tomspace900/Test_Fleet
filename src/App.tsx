import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import { checkAuth, getDiscover } from './utils/fetchAPI';

function App() {
	const [apiStatus, setApiStatus] = useState<any | null>(null);
	const [discoverResult, setDiscoverResult] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const authResponse = await checkAuth();
				setApiStatus(authResponse);

				const discoverResponse = await getDiscover();
				setDiscoverResult(discoverResponse);
			} catch (error) {
				console.error('Erreur lors de la récupération des données', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='flex flex-col justify-between min-h-screen items-center'>
			<header>
				<a className='text-primary-500' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Fleet case study - {apiStatus?.status_message}
				</a>
			</header>
			<main className='flex w-screen'>
				<div className='w-fit min-w-[30%]'>gauche</div>
				<div className='w-full'>droite</div>
			</main>
			<MovieList movies={discoverResult} />
			<footer>footer</footer>
		</div>
	);
}

export default App;
