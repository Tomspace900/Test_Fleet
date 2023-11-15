import React from 'react';

type MovieItemProps = {
	title: string;
};

const MovieItem: React.FC<MovieItemProps> = ({ title }) => {
	return (
		<div>
			<h2>{title}</h2>
		</div>
	);
};

export default MovieItem;
