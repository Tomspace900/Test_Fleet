import { createContext, useContext, useState, ReactNode } from 'react';
import { MovieType } from './types/api';

type MovieContextProps = {
	movies: MovieType[];
	setMovies: (movies: MovieType[]) => void;
	lastQuery: string;
	setLastQuery: (query: string) => void;
};

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [lastQuery, setLastQuery] = useState<string>('');
	return <MovieContext.Provider value={{ movies, setMovies, lastQuery, setLastQuery }}>{children}</MovieContext.Provider>;
};

export const useMovieContext = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error('No context found');
	}
	return context;
};
