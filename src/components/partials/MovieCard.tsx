import { useState } from 'react';
import { IMovie } from '../../types/types';
import { Link } from 'react-router-dom';
const IMG_PATH = process.env.REACT_APP_IMG_PATH;

type MovieCardProps = {
	movie: IMovie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
	const [hover, setHover] = useState(false);

	const img_src = `${IMG_PATH}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`;
	const imgBackground = {
		backgroundImage: `url(${img_src})`,
		filter: 'drop-shadow(0px 0px 3px #00000080)',
	};

	return (
		<div
			className='bg-cover rounded-lg cursor-pointer hover:scale-[1.03] overflow-hidden transition-all ease-out duration-300'
			style={imgBackground}>
			<Link
				to={`/${movie.id}`}
				className='p-4 sm:h-72 sm:w-48 h-60 w-40 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end hover:backdrop-blur-sm'
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}>
				<div className='flex flex-col text-white'>
					<span className='text-md'>{movie.title}</span>
					{hover ? <p className='text-xs mt-1'>{movie.release_date.slice(0, 4)}</p> : null}
					{hover ? <p className='text-xs mt-3'>{movie.overview.slice(0, 100)}...</p> : null}
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
