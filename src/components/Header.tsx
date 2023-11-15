import { Link } from 'react-router-dom';

type HeaderProps = {
	apiStatus: number;
};

const Header = ({ apiStatus }: HeaderProps) => {
	return (
		<header className='w-full h-24 flex justify-start items-center'>
			<img className='h-10' src='./logo.png' alt='logo' />
			<Link to='/' className='text-primary-500 h-full flex justify-center items-center cursor-pointer'>
				{apiStatus === 1 ? 'API connected' : 'API not connected'}
			</Link>
			<div className='h-20 bg-gray-100'>ICI CA CHERCHE</div>
		</header>
	);
};

export default Header;
