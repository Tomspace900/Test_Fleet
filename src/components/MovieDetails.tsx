import { useParams, useNavigate } from 'react-router';
import { MovieDetailsType } from '../types/api';
import { useEffect, useState } from 'react';
import { getDetails } from '../utils/fetchAPI';
import Loading from './partials/Loading';
const IMG_PATH = process.env.REACT_APP_IMG_PATH;

const MovieDetails = () => {
	const [details, setDetails] = useState<MovieDetailsType | null>(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id) {
					const selected = await getDetails(parseInt(id, 10));
					setDetails(selected);
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching details', error);
				setLoading(false);
				navigate('/');
			}
		};

		fetchData();
	}, [navigate, id]);

	const img_src = `${IMG_PATH}${details?.poster_path}`;
	const customShadow = {
		filter: 'drop-shadow(0px 0px 15px #000000)',
	};

	const genres: string[] = details?.genres.map((genre) => genre.name) || [];

	return loading ? (
		<Loading />
	) : (
		<div className='flex flex-col justify-center items-center w-full h-full px-10'>
			<div className='max-w-[600px] lg:max-w-full w-full flex lg:flex-row flex-col'>
				<div className='lg:max-w-full lg:flex-1 max-w-[450px] w-full self-center lg:px-8'>
					<img src={img_src} alt='poster-img' className='rounded-lg' style={customShadow} />
				</div>
				<div className='lg:max-w-full lg:flex-1 lg:px-8 flex flex-col gap-6 my-8'>
					<div className='text-4xl'>{details?.title}</div>
					<div className='flex flex-wrap gap-4'>
						{genres.map((genre, index) => (
							<span key={index} className='p-1 text-primary-500 rounded-lg border border-primary-500'>
								{genre}
							</span>
						))}
					</div>
					<div className='text-lg text-justify'>{details?.overview}</div>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							Release Date: <br /> <span className='text-primary-500'>{details?.release_date}</span>
						</div>
						<div>
							Runtime: <br />
							<span className='text-primary-500'>{details?.runtime} minutes</span>
						</div>
						<div>
							Popularity: <br />
							<span className='text-primary-500'>{details?.popularity}</span>
						</div>
						<div>
							Vote Average: <br />
							<span className='text-primary-500'>{details?.vote_average.toPrecision(2) + ' /10'}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
