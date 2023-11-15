const SearchBar = () => {
	return (
		<div className='flex gap-2 bg-white rounded-lg py-2 px-4 md:ml-12 ml-0 w-fit text-black'>
			<div className='flex gap-3 pr-2 border-r-[1px] border-black'>
				<img src='./search.svg' alt='search-icon' className='w-8 hidden md:block' />
				<input
					type='text'
					placeholder='Search for a movie'
					className='py-2 focus:outline-none placeholder-gray-500 bg-white h-full md:w-[300px] w-fit'
				/>
			</div>
			<div className='flex justify-center items-center'>
				<img src='./sort.svg' alt='sort-icon' className='w-8 cursor-pointer' />
			</div>
		</div>
	);
};

export default SearchBar;
