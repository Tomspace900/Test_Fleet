import { useMovieContext } from '../Context';
import { MovieType } from '../types/api';
import MovieCard from './partials/MovieCard';

type MovieListProps = {
	movies: MovieType[];
};

const MovieList = ({ movies }: MovieListProps) => {
	const { lastQuery } = useMovieContext();

	return movies.length === 0 ? (
		<div className='text-2xl text-white font-bold mb-8 ml-10'>No results found</div>
	) : (
		<div>
			{lastQuery && (
				<div className='text-2xl text-white font-bold mb-8 ml-10'>
					Results for: <span className='italic'>{lastQuery}</span>
				</div>
			)}
			<div className='flex flex-wrap justify-center items-center w-full h-full gap-8 overflow-scroll'>
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default MovieList;
