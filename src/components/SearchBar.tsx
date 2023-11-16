import Input from './partials/Input';

const SearchBar = () => {
	return (
		<div className='flex gap-2 bg-white rounded-lg py-2 px-4 md:ml-12 ml-0 w-fit text-black'>
			<Input />
			<div className='flex justify-center items-center'>
				<img src='./sort.svg' alt='sort-icon' className='w-8 cursor-pointer' />
			</div>
		</div>
	);
};

export default SearchBar;
