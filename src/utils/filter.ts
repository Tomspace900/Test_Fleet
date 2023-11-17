import { IMovie } from '../types/types';

// filter and sort movies by genre/notes/year/adult
export const filterByGenre = (movies: IMovie[], genreId: number): IMovie[] => {
	return movies.filter((movie) => movie.genre_ids.includes(genreId));
};

export const filterByNote = (movies: IMovie[], note: number): IMovie[] => {
	return movies.filter((movie) => movie.vote_average >= note);
};

export const filterByYear = (movies: IMovie[], year: number): IMovie[] => {
	return movies.filter((movie) => {
		const releaseYear = new Date(movie.release_date).getFullYear();
		return releaseYear === year;
	});
};

export const filterByAdult = (movies: IMovie[], adult: boolean): IMovie[] => {
	return movies.filter((movie) => movie.adult === adult);
};

export const sortMovies = (movies: IMovie[], sortBy: string): IMovie[] => {
	switch (sortBy) {
		case 'popularity':
			return movies.sort((a, b) => b.popularity - a.popularity);
		case 'vote_average':
			return movies.sort((a, b) => b.vote_average - a.vote_average);
		case 'release_date':
			return movies.sort((a, b) => {
				const dateA = new Date(a.release_date);
				const dateB = new Date(b.release_date);
				return dateB.getTime() - dateA.getTime();
			});
		case 'title':
			return movies.sort((a, b) => {
				const titleA = a.title.toLowerCase();
				const titleB = b.title.toLowerCase();
				if (titleA < titleB) return -1;
				if (titleA > titleB) return 1;
				return 0;
			});
		default:
			return movies;
	}
};

// genre correspondance from TMDB API
export const genres = [
	{ id: 28, name: 'Action' },
	{ id: 12, name: 'Adventure' },
	{ id: 16, name: 'Animation' },
	{ id: 35, name: 'Comedy' },
	{ id: 80, name: 'Crime' },
	{ id: 99, name: 'Documentary' },
	{ id: 18, name: 'Drama' },
	{ id: 10751, name: 'Family' },
	{ id: 14, name: 'Fantasy' },
	{ id: 36, name: 'History' },
	{ id: 27, name: 'Horror' },
	{ id: 10402, name: 'Music' },
	{ id: 9648, name: 'Mystery' },
	{ id: 10749, name: 'Romance' },
	{ id: 878, name: 'Science Fiction' },
	{ id: 10770, name: 'TV Movie' },
	{ id: 53, name: 'Thriller' },
	{ id: 10752, name: 'War' },
	{ id: 37, name: 'Western' },
];
