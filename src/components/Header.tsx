import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Filters from './partials/Filters';
import { useState } from 'react';

const Header = () => {
	const [displayFilters, setDisplayFilters] = useState(false);
	return (
		<header className='w-full h-fit pt-4 lg:pt-8 max-w-[95%] flex justify-start items-center gap-4'>
			<Link to='/' className='text-primary-500 h-full min-w-fit flex justify-start items-center self-start cursor-pointer'>
				<img className='md:h-14 h-10' src='./logo.png' alt='logo' />
			</Link>
			<div className=' h-fit w-fit flex flex-wrap md:ml-12 ml-0 gap-4 justify-start items-center'>
				<SearchBar displayFilters={displayFilters} setDisplayFilters={setDisplayFilters} />
				{displayFilters && <Filters />}
			</div>
		</header>
	);
};

export default Header;
