type HeaderProps = {
	apiStatus: number;
};

const Header = ({ apiStatus }: HeaderProps) => {
	return (
		<header className='w-full h-24 flex justify-start items-center'>
			<a className='text-primary-500' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
				{apiStatus === 1 ? 'API connected' : 'API not connected'}
			</a>
			<div className='h-20 bg-gray-100'>ICI CA CHERCHE</div>
		</header>
	);
};

export default Header;
