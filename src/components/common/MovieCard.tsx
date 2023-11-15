import { useState } from 'react';
import { Movie } from '../../types/api';
import { useMovieContext } from '../../Context';
import { getDetails } from '../../utils/fetchAPI';
const IMG_PATH = process.env.REACT_APP_IMG_PATH;

type MovieCardProps = {
	movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
	const [hover, setHover] = useState(false);
	const { selectMovie } = useMovieContext();

	const img_src = `${IMG_PATH}${movie.poster_path}`;
	const imgBackground = {
		backgroundImage: `url(${img_src})`,
	};

	async function handleClick() {
		const selected = await getDetails(movie.id);
		selectMovie(selected);
	}

	return (
		<div className='bg-cover overflow-x-scroll rounded-lg cursor-pointer hover:scale-[1.03]' style={imgBackground}>
			<div
				className='p-4 sm:h-72 sm:w-48 h-60 w-40 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end hover:backdrop-blur-sm'
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}
				onClick={() => handleClick()}>
				<div className='flex flex-col overflow-y-scroll overflow-hidden'>
					<span className='text-md text-white'>{movie.title}</span>
					{hover ? <p className='text-xs text-white mt-1'>{movie.release_date.slice(0, 4)}</p> : null}
					{hover ? <p className='text-xs text-white mt-3'>{movie.overview.slice(0, 100)}...</p> : null}
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

// discover response :
// {
// 	"adult": false,
// 	"backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
// 	"genre_ids": [
// 		18,
// 		36
// 	],
// 	"id": 872585,
// 	"original_language": "en",
// 	"original_title": "Oppenheimer",
// 	"overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
// 	"popularity": 2706.372,
// 	"poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
// 	"release_date": "2023-07-19",
// 	"title": "Oppenheimer",
// 	"video": false,
// 	"vote_average": 8.2,
// 	"vote_count": 4360
// },
