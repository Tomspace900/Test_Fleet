import { createContext, useContext, useState, ReactNode } from 'react';
import { IMovie } from './types/types';

type MovieContextProps = {
	movies: IMovie[];
	setMovies: (movies: IMovie[]) => void;
	filteredMovies: IMovie[];
	setFilteredMovies: (movies: IMovie[]) => void;
	lastQuery: string;
	setLastQuery: (query: string) => void;
};

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

// create the context provider to provide the values to all the components
export const MovieContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);
	const [lastQuery, setLastQuery] = useState<string>('');
	return (
		<MovieContext.Provider value={{ movies, setMovies, filteredMovies, setFilteredMovies, lastQuery, setLastQuery }}>
			{children}
		</MovieContext.Provider>
	);
};

export const useMovieContext = () => {
	const context = useContext(MovieContext);
	if (!context) {
		throw new Error('No context found');
	}
	return context;
};
