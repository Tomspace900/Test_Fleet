import { useState } from 'react';
import { MovieType } from '../../types/api';
import { Link, useNavigate } from 'react-router-dom';
const IMG_PATH = process.env.REACT_APP_IMG_PATH;

type MovieCardProps = {
	movie: MovieType;
};

const MovieCard = ({ movie }: MovieCardProps) => {
	const [hover, setHover] = useState(false);
	const navigate = useNavigate();

	const img_src = `${IMG_PATH}${movie.poster_path}`;
	const imgBackground = {
		backgroundImage: `url(${img_src})`,
	};

	async function handleClick() {
		navigate(`/${movie.id}`);
	}

	return (
		<div className='bg-cover overflow-x-scroll rounded-lg cursor-pointer hover:scale-[1.03]' style={imgBackground}>
			<Link
				to={`/${movie.id}`}
				className='p-4 sm:h-72 sm:w-48 h-60 w-40 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end hover:backdrop-blur-sm'
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}
				onClick={() => handleClick()}>
				<div className='flex flex-col overflow-y-scroll overflow-hidden'>
					<span className='text-md text-white'>{movie.title}</span>
					{hover ? <p className='text-xs text-white mt-1'>{movie.release_date.slice(0, 4)}</p> : null}
					{hover ? <p className='text-xs text-white mt-3'>{movie.overview.slice(0, 100)}...</p> : null}
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
