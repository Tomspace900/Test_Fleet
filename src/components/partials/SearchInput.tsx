import { useState } from 'react';
import { useMovieContext } from '../../Context';
import { useNavigate } from 'react-router';
import { getMovieSearch } from '../../utils/fetchAPI';

const SearchInput = () => {
	const [query, setQuery] = useState('');
	const { setMovies, setFilteredMovies, setLastQuery } = useMovieContext();
	const navigate = useNavigate();
	const handleSearch = async (query: string) => {
		try {
			const response = await getMovieSearch(query);
			setMovies(response.results);
			setFilteredMovies(response.results);
			setLastQuery(query);
			navigate('/');
		} catch (error) {
			console.error('Error fetching search', error);
		}
	};
	return (
		<div className='flex gap-3 pr-2 border-r-[1px] border-black'>
			<img
				src='./search.svg'
				alt='search-icon'
				className='w-8 hidden md:block cursor-pointer'
				onClick={() => {
					if (query) {
						handleSearch(query);
					}
				}}
			/>
			<input
				type='text'
				placeholder='Search for a movie'
				className='py-2 focus:outline-none placeholder-gray-500 bg-white h-full sm:w-[300px] w-fit'
				onChange={(e) => setQuery(e.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' && e.currentTarget.value) {
						handleSearch(e.currentTarget.value);
						e.currentTarget.value = '';
					}
				}}
			/>
		</div>
	);
};

export default SearchInput;
