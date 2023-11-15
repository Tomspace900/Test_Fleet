import { useParams, useNavigate } from 'react-router';
import { MovieDetailsType } from '../types/api';
import { useEffect, useState } from 'react';
import { getDetails } from '../utils/fetchAPI';
import Loading from './common/Loading';
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

	return loading ? (
		<Loading />
	) : (
		<div className='flex flex-col justify-center items-center w-full h-full'>
			<div>
				<img src={img_src} alt='poster-img' />
			</div>
			<div>{details?.title}</div>
		</div>
	);
};

export default MovieDetails;
