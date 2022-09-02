import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaMailBulk } from 'react-icons/Fa';

export const Socials = () => {
	return (
		<div className='container'>
			<div className='flex text-white text-5xl w-min'>
				<FaFacebookSquare className='hover:text-blue-600 cursor-pointer mr-4' />
				<FaTwitterSquare className='hover:text-sky-400 cursor-pointer mr-4' />
				<FaMailBulk className='hover:text-red-400 cursor-pointer' />
			</div>
		</div>
	);
};
