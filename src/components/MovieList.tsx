import { Movie } from '../types/api';
import MovieCard from './common/MovieCard';

type MovieListProps = {
	movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
	return (
		<div className='flex flex-wrap justify-center items-center w-full h-full gap-8'>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;
