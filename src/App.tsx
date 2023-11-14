function App() {
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
