import { createContext, useContext, useState, ReactNode } from 'react';
import { MovieType } from './types/api';

type MovieContextProps = {
	movies: MovieType[];
	addMovies: (movies: MovieType[]) => void;
};

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [movies, setMovies] = useState<MovieType[]>([]);

	const addMovies = (movies: MovieType[]) => {
		setMovies(movies);
	};

	return <MovieContext.Provider value={{ movies, addMovies }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error('No context found');
	}
	return context;
};
