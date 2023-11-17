import SearchInput from './partials/SearchInput';

// pass the displayFilters state and setDisplayFilters function as props to use them in the parent component
type SearchBarProps = {
	displayFilters: boolean;
	setDisplayFilters: (value: boolean) => void;
};

const SearchBar = ({ displayFilters, setDisplayFilters }: SearchBarProps) => {
	return (
		<div className='flex gap-2 bg-white rounded-lg py-2 px-4 w-fit h-full text-black'>
			<SearchInput />
			<div
				className='flex justify-center items-center hover:scale-105'
				title='Filters'
				onClick={() => setDisplayFilters(!displayFilters)}>
				<img src='./filter.svg' alt='filter-icon' className='w-8 cursor-pointer' />
			</div>
		</div>
	);
};

export default SearchBar;
