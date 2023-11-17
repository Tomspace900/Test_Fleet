import { useMovieContext } from '../Context';
import MovieCard from './partials/MovieCard';
import Sort from './partials/Sort';

const MovieList = () => {
	const { filteredMovies } = useMovieContext();

	return filteredMovies.length === 0 ? (
		<div className='text-2xl text-white font-bold mb-8 ml-10'>No results found</div>
	) : (
		<div className='max-w-[95%] h-fit'>
			<div className='flex items-center gap-6 text-white font-bold mb-8 ml-10'>
				<Sort />
			</div>
			<div className='flex flex-wrap justify-center items-center w-full h-full gap-8'>
				{filteredMovies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default MovieList;
