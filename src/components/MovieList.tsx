import React from 'react';
import MovieItem from './MovieItem';

interface MovieListProps {
	movies: Array<{ id: number; title: string }>;
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
	return (
		<div>
			{movies.map((movie) => (
				<MovieItem key={movie.id} title={movie.title} />
			))}
		</div>
	);
};

export default MovieList;
