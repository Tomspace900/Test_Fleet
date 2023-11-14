function App() {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjA1N2EzODE1MTg4MzMyMTBjN2Q3MTU4ZjllOTRkNSIsInN1YiI6IjY1NTNhODJlZWE4NGM3MTA5MjI2YjE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0B6l3SrOvA-X5xEkZu7YW6fQcUpRZPBdeX5kr517s80',
		},
	};

	fetch('https://api.themoviedb.org/3/configuration', options)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));

	return (
		<div className='flex flex-col justify-between min-h-screen items-center'>
			<header>
				<a className='text-primary-500' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Fleet case study
				</a>
			</header>
			<main className='flex w-screen'>
				<div className='w-fit min-w-[30%]'>gauche</div>
				<div className='w-full'>droite</div>
			</main>
			<footer>footer</footer>
		</div>
	);
}

export default App;
