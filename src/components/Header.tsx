import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

type HeaderProps = {
	apiStatus: number;
};

const Header = ({ apiStatus }: HeaderProps) => {
	return (
		<header className='w-full h-24 max-w-[95%] flex justify-start items-center gap-4'>
			<Link to='/' className='text-primary-500 h-full w-fit flex justify-start items-center cursor-pointer'>
				<img className='h-10' src='./logo.png' alt='logo' />
				<div>{apiStatus === 1 ? 'API OK' : 'API Error'}</div>
			</Link>
			<div className='h-full w-fit flex justify-center items-center'>
				<SearchBar />
			</div>
		</header>
	);
};

export default Header;
