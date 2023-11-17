import { useMovieContext } from '../../Context';
import { sortMovies } from '../../utils/filter';

const Sort = () => {
	const { filteredMovies, lastQuery, setFilteredMovies } = useMovieContext();

	const handleSort = (sort: string) => {
		if (sort === 'Sort') return filteredMovies;
		const sorted = sortMovies(filteredMovies.slice(), sort);
		setFilteredMovies(sorted);
	};

	return (
		<>
			<div className='flex items-center bg-transparent border-white border-[1px] rounded-lg py-2 px-4 w-fit text-white text-base'>
				<select
					className='focus:outline-none bg-transparent'
					defaultValue='Sort'
					onChange={(e) => handleSort(e.currentTarget.value)}>
					<option value='Sort'>Sort by</option>
					<option value='popularity'>Popularity</option>
					<option value='vote_average'>Note</option>
					<option value='release_date'>Date</option>
					<option value='title'>Title</option>
				</select>
			</div>
			{lastQuery && (
				<div className='md:text-2xl text-lg'>
					Results for: <span className='italic'>{lastQuery}</span>
				</div>
			)}
		</>
	);
};

export default Sort;
