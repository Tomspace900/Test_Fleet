import { useMovieContext } from '../../Context';
import { filterByGenre, filterByNote, filterByAdult, filterByYear, genres } from '../../utils/filter';

type FilterType = {
	[key: string]: string | null;
};

const activeFilters: FilterType = {
	genre: null,
	note: null,
	year: null,
	adult: null,
};

const Filters = () => {
	const { movies, setFilteredMovies } = useMovieContext();

	// switch case to handle the different filters, convert the value type and call the right function
	const handleFilterChange = (filterType: string, filterValue: string) => {
		if (filterValue === 'Genre' || filterValue === 'Note min' || filterValue === 'Year' || filterValue === 'Adult') {
			activeFilters[filterType] = null;
		} else {
			activeFilters[filterType] = filterValue;
		}

		let updatedList = movies;

		// browse the active filters and call the right function for each one
		Object.keys(activeFilters).forEach((filter) => {
			switch (filter) {
				case 'genre':
					if (activeFilters[filter]) {
						let intGenreId = parseInt(activeFilters[filter] as string);
						updatedList = filterByGenre(updatedList, intGenreId);
					}
					break;
				case 'note':
					if (activeFilters[filter]) {
						let intNote = parseInt(activeFilters[filter] as string);
						updatedList = filterByNote(updatedList, intNote);
					}
					break;
				case 'year':
					if (activeFilters[filter]) {
						let intYear = parseInt(activeFilters[filter] as string);
						updatedList = filterByYear(updatedList, intYear);
					}
					break;
				case 'adult':
					if (activeFilters[filter]) {
						let boolAdult = filterValue === 'true';
						updatedList = filterByAdult(updatedList, boolAdult);
					}
					break;
				default:
					break;
			}
		});

		setFilteredMovies(updatedList);
	};

	return (
		<div className='flex flex-wrap items-center gap-2 w-fit h-full text-black'>
			<div className='flex items-center bg-white rounded-lg py-2 px-4 w-fit h-[80%] text-black hover:scale-[1.03]'>
				<select
					className='focus:outline-none'
					defaultValue='Genre'
					onChange={(e) => handleFilterChange('genre', e.currentTarget.value)}>
					<option value='Genre'>Genre</option>
					{genres.map((genre) => (
						<option key={genre.id} value={genre.id}>
							{genre.name}
						</option>
					))}
				</select>
			</div>
			<div className='flex items-center bg-white rounded-lg py-2 px-4 w-fit h-[80%] text-black hover:scale-[1.03]'>
				<select
					className='focus:outline-none'
					defaultValue='Note min'
					onChange={(e) => handleFilterChange('note', e.currentTarget.value)}>
					<option value='Note min'>Note min</option>
					{[...Array(5)].map((_, i) => (
						<option key={i} value={9 - i}>
							{9 - i}
						</option>
					))}
				</select>
			</div>
			<div className='flex items-center bg-white rounded-lg py-2 px-4 w-fit h-[80%] text-black hover:scale-[1.03]'>
				<select
					className='focus:outline-none'
					defaultValue='Year'
					onChange={(e) => handleFilterChange('year', e.currentTarget.value)}>
					<option value='Year'>Year</option>
					{[...Array(50)].map((_, i) => (
						<option key={i} value={2023 - i}>
							{2023 - i}
						</option>
					))}
				</select>
			</div>
			<div className='flex items-center bg-white rounded-lg py-2 px-4 w-fit h-[80%] text-black hover:scale-[1.03]'>
				<select
					className='focus:outline-none'
					defaultValue='Adult'
					onChange={(e) => handleFilterChange('adult', e.currentTarget.value)}>
					<option value='Adult'>Adult only</option>
					<option value='true'>Yes</option>
					<option value='false'>No</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
