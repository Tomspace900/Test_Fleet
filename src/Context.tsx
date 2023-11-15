import { createContext, useContext, useState, ReactNode } from 'react';
import { Movie, MovieDetails } from './types/api';

type MovieContextProps = {
	movies: Movie[];
	addMovies: (movies: Movie[]) => void;
	selectedMovie: MovieDetails | null;
	selectMovie: (movie: MovieDetails | null) => void;
};

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

	const addMovies = (movies: Movie[]) => {
		setMovies(movies);
	};

	const selectMovie = (movie: MovieDetails | null) => {
		setSelectedMovie(movie);
	};

	return <MovieContext.Provider value={{ movies, addMovies, selectedMovie, selectMovie }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error('No context found');
	}
	return context;
};
